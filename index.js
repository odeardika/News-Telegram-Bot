const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Replace with your actual token from BotFather
const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/start"
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'To get the news use the /news command');
});

