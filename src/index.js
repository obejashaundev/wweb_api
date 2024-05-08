const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerv1 = require('./routes/v1/index')

// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: true }));
// To parse json data
app.use(bodyParser.json());


app.use('/v1', routerv1)

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('API listening on http://localhost:3000'));

// const { Client } = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal');

// const client = new Client({
//     webVersionCache: {
//         type: "remote",
//         remotePath:
//             "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
//     },
// });

// client.on('loading_screen', (percent, message) => {
//     console.log('LOADING SCREEN', percent, message);
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
// });

// client.on('qr', qr => {
//     qrcode.generate(qr, { small: true });
// });

// // Listening to all incoming messages
// client.on('message_create', message => {
//     console.log(message.body);
//     if (message.body === '!ping') {
//         // reply back "pong" directly to the message
//         message.reply('pong');
//     }
// });


// client.initialize();
