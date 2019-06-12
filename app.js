const express =require('express');
const app = express();
const port=process.env.PORT||3000;
const bodyParser = require('body-parser');
const router1= require('./routers/api')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router1);

module.exports=app;
