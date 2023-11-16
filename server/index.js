"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mysql2_1 = __importDefault(require("mysql2"));
var app = express_1.default();
//mysql setting
var connection = mysql2_1.default.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'docker',
    password: 'docker',
    database: 'test'
});
connection.connect();
//cors setting
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Get example
var router = express_1.default.Router();
router.get('/api/getTest', function (req, res) {
    res.send(req.query);
});
// 
router.get('', function (req, res) {
    res.send("<h1>Server working,test running on port 3001</h1>");
});
//Post example
router.post('/api/postTest', function (req, res) {
    res.send({ hello: 'world' });
});
app.use(router);
app.listen(3001, function () { console.log('Example app listening on port 3001!'); });


// process.once('SIGUSR2', function () {
//     process.kill(process.pid, 'SIGUSR2');
//   });
  
// process.on('SIGINT', function () {
// // this is only called on ctrl+c, not restart
// process.kill(process.pid, 'SIGINT');
// });

// lsof -i tcp:3001
// $ sudo kill -9 $(lsof -i tcp:3001 -t)
