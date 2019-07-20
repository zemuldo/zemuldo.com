/* Typed.js */

function whiten (string) {
    return '<span style="color: white;">' + string +  '</span>'
}

function getYearsBetween (sdt) { 
    var date_difference = new Date(new Date() - sdt);
    var years = date_difference.toISOString().slice(0, 4) - 1970;
    var months = function (months) {
        if(months == 0) return '';
        if(months > 11){
            years +=1;
            return '';
        }
        return ' and ' + months + ' Months';
    };
    return years + ' Years' + months(date_difference.getMonth()+1);
}

function typeOnTerminal () {

    var waitAndBreak = '^700 <br/>';
    var start = '<span class="margin-left--10 color-blue font-size-14 !important">➜:~</span>';
    var myStack = start + whiten('Skill Set?') + waitAndBreak + ['Nodejs', 'ReactJS', 'Elixir', 'Docker', 'Python for Data', 'Kubernetes', 'GCP', 'Heroku' ,'AWS.'].join(',^500 ');
    var experience = getYearsBetween(new Date("February 1 2016 00:00"));
    var yearsOfExperience = waitAndBreak + start + whiten('Experience?') + waitAndBreak + experience;
    var funGames = ['Chess,' + ' Music and ' +  'Dancing'].join('^500, ');
    var currentStatus = waitAndBreak + start + whiten('My Fun time?') + waitAndBreak + funGames;
    var coolStuff = ['I do mentorship and also write content on medium.'];
    var someOtherCoolStuffICanDo = waitAndBreak + start + whiten('Any cool stuff I can do?') + waitAndBreak + coolStuff;
    $('.typed').typed({
        strings: [myStack + yearsOfExperience + currentStatus],

    });
}

/*
    Matrix Background canvas
*/

var c = document.getElementById('c');
var ctx = c.getContext('2d');

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
//converting the string into an array of single characters
matrix = matrix.split('');

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = '#0F0'; //green text
    ctx.font = font_size + 'px arial';
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 100);

var images = ['trivial.png', 'black.jpg', 'impala.jpg'];

function switchMe(){
    document.getElementById('me-pic').src= '/images/logo/' + images[Math.floor(Math.random() * images.length)]
}

setInterval(() => {
    switchMe()
}, 7000);