const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/routes');
const videoRoute = require('./routes/video.routes')
const Notification = require('./routes/notification');
const Faculty = require('./routes/faculty');
const Course = require('./routes/course');
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./DB/db");
const Login = require('./routes/login');

dotenv.config();
app.use(express.json());
connectDB();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/test',route);
app.use('/video',videoRoute);
app.use('/notify',Notification);
app.use('/courses',Course);
app.use('/faculty',Faculty);
app.use('/login',Login);
const server = http.createServer(app);
server.listen(3000);