const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { Server } = require('socket.io');

class WhatsAppManager {
    constructor() {
        this.clients = {};
    }

    createClient(id, io) {
        const client = new Client({
            authStrategy: new LocalAuth({ clientId: id }),
            puppeteer: { headless: true }
        });

        client.on('qr', (qr) => {
            qrcode.generate(qr, { small: true });
            io.emit('qr', { id, qr });  // Emit QR with client ID
        });

        client.on('ready', () => {
            console.log(`Client ${id} is ready!`);
            io.emit('ready', { id, message: 'WhatsApp client is ready!' });
        });

        client.on('message', message => {
            console.log(`Received message from client ${id}: ${message.body} from ${message.from}`);
            io.emit('message', { id, from: message.from, body: message.body });
        });

        client.initialize();
        this.clients[id] = client;
    }

    getClient(id) {
        return this.clients[id];
    }

    getClients() {
        return this.clients;
    }
}

module.exports = new WhatsAppManager();
