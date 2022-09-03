const mongoose = require('mongoose');
const logger = require('../tools/logger');
const tags = require('./data/meta_tags');

require('dotenv').config();

function connectionString (){
  if (process.env.MONGODB_URI) return process.env.MONGODB_URI;
  else if (process.env.NODE_ENV === 'production') return `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`;
  else return `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`;
}

mongoose.connect(connectionString(), {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', (e)=> {
  logger.error(e.toString(), true);
  logger.error(e.stack, true);
  process.exit(999);
});

db.once('open', async function() {
  logger.info('DB Connected Successfully');
  logger.info('Seeding tags');
  process.emit('db-connected');

  const Tag = require('./models/tag');
  const posService = require('./services/post');
  await tags.map((t)=>{
    const tag = new Tag({...t, _id: t.value});
    tag.save()
      .then((_d)=>true)
      .catch(_e=>false);

  });
  await posService.buildTopTags()
});

module.exports = mongoose;