By definition, NodeJS is an event-driven nonblocking runtime environment for JavaScript that has become very popular on the server side. This is because Nodejs has an event-driven architecture capable of asynchronous I/O. This post explores what this event-driven architecture is like and how to exploit the event-driven nature of Nodejs in a very simple and basic way.

## Who is this post for?
If you already have been programming in Nodejs, this post is for you because with the available libraries and frameworks in the npmjs community, most developers never get the necessity to experience the core driving capabilities of Nodejs. If you are new to Nodejs, this beginners guide is good for you. As a new beginner, you can also go through this tutorial though you might find some hard time you will start the right way. Either way, you will learn how awesome Nodejs is when approached from this direction.

## Case Study.
Before we start event-driven programming, let's find a problem that requires us to use events. I have just the perfect idea! Imagine you have two interfaces. An HTTP client eg a web browser and a TCP interface eg a very monolithic postilion that only accept stream based TCP messages.

```
const net = require('net');
const server = net.createServer();
const config = {
    host: '0.0.0.0',
    port: 9670,
    exclusive: true,
}

server.on('connection', (socket) => {
    console.log('New client connected')
    socket.on('data', (data) => {
        const code = data.toString().slice(0,3);
        switch (code) {
            case '404':
                return socket.write(`Code ${code}: Not found, used when user request for a resource or page that does not exist.\n`);
            case '500':
                return socket.write(`Code ${code}: Internal Server, used when web server has an unxpected error.\n`);
            default:
                return socket.write(`I dont know about code "${code}" mate, or I am yet to learn about it \n`);
        }
    });

    socket.on('error', (err) => {
        console.log({ error: `error in connection ${err}` });
        socket.destroy(JSON.stringify({
            error: 'connection error',
            code: 500,
        }));
        socket.end();
    });
});

// Start server
server.listen(config);

// server running
server.on('listening', () => {
    console.log('server is listening on %j', config.port);
});

// Restart server if port or address is under use
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('Address or Port in use, retrying...');
        setTimeout(() => {
            server.close();
            server.listen(config);
        }, 5000);
    } else {
        console.log({ err: `Server error ${err}` });
    }
});

module.exports = server;
```

Now we have the TCP server, let's test it. First, run the server. If you are on windows, just fire up putty and select telnet then enter 127.0.0.1 in hostname and 9670 as the port. as shown below. Click open, you should have a new terminal like a window. Typing 404 or 500 should make a conversation over the socket created.

```
const net = require('net');
const client = new net.Socket();
const config = {
    host: '0.0.0.0',
    port: 9670,
    exclusive: true,
}
const timeout = 3000;
let retrying = false;
// Functions to handle client events
// connector
function makeConnection() {
  client.connect(config.port, config.host);
}
function connectEventHandler() {
  console.log('***** connected ******');
  console.log({
    port: client.remotePort,
    host: client.remoteAddress,
  }, 'connected to server');
  retrying = false;
}

function errorEventHandler(e) {
  console.log(`Connection error ${e.code}`);
  if (!retrying) {
    retrying = true;
  }
  setTimeout(makeConnection, timeout);
}
function closeEventHandler() {
  if (retrying) return false;
  console.log('Server closed');
  console.log(`Reconnecting... in ${timeout / 1000} Seconds`);
  if (!retrying) {
    retrying = true;
  }
  return setTimeout(makeConnection, timeout);
}
// Start Eevent Listeners
client.on('connect', connectEventHandler);
client.on('error', errorEventHandler);
client.on('close', closeEventHandler);

// Connect to remote server
console.log('***** connecting ******');
makeConnection();

module.exports = client;
```

# Creating the web server.
Install express and create a server just one endpoint. We call the server with query statusCode being the code we want to get its description from the TCP server. The web server will take the code in the query and write to the socket. Then await a response message. We will use Nodejs event module to make this work. Here is the complete code of the web server.

```
const express = require('express');
const client = require('./tcp/client');
const EventEmitter = require('events');

class OnDataEmitter extends EventEmitter { }
const OnData = new OnDataEmitter();

const app = express()

// TCP Client data event listener that handles data event by the client.
client.on('data', (data) => {
  const code = data.toString().slice(0,3)
  OnData.emit(code, data.toString())
});


app.get(('/'), async (req, res) => {
    const code = req.query.statusCode;
    let status = false
    OnData.on(code, (data)=>{
        status = true
        res.send({data})
        OnData.removeAllListeners(code);
    })

    // set a timeout to remove listener and send timeout response if the TCP server fails to reply
    setTimeout(()=>{
        if(status) return true;
        // Clear the enevnt listener to void memory leaks
        OnData.removeAllListeners(code);
        res.send({error: 'timedout'})
    }, 2000)
    client.write(code)
});

app.listen(8090,()=>console.log('Server listening on http://localhost:8090'))
```

