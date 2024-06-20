const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');
const WhatsAppManager = require('./clients');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(bodyParser.json());

app.post('/create-client', (req, res) => {
    const { id } = req.body;
    if (WhatsAppManager.getClient(id)) {
        return res.status(400).send('Client already exists');
    }
    WhatsAppManager.createClient(id, io);
    res.send('Client created successfully');
});

app.get('/contacts/:id', async (req, res) => {
    const client = WhatsAppManager.getClient(req.params.id);
    if (!client) {
        return res.status(404).send('Client not found');
    }
    const contacts = await client.getContacts();
    res.json(contacts);
});

app.post('/send-message/:id', async (req, res) => {
    const { id } = req.params;
    const { number, message } = req.body;
    const client = WhatsAppManager.getClient(id);
    if (!client) {
        return res.status(404).send('Client not found');
    }
    const chatId = `${number}@c.us`;
    try {
        await client.sendMessage(chatId, message);
        res.send('Message sent successfully');
    } catch (error) {
        res.status(500).send('Failed to send message');
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
