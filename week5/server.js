let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./dbConnection');
let router = require('./routers/router');
const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

let userIdCounter = 1;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/dog',router);

io.on('connection',(socket)=>{
    
    const userId = userIdCounter++;
    console.log('User connected: ' + userId);
    const intervalId = setInterval(() => {
        let randomNum = parseInt(Math.random() * 10);
        socket.emit('number', { id: userId, number: randomNum });
        console.log(`Emitting Number ${randomNum} to User ${userId}`);
    }, 1000);

    
    socket.on('disconnect', () => {
        console.log('User disconnected: ' + userId);
        clearInterval(intervalId);  
    });
});

http.listen(port, ()=>{
    console.log('express server started');
});
