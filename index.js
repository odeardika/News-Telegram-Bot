const TelegramBot = require('node-telegram-bot-api');
const { getData } = require('./utils/getData');
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

bot.onText(/\/news/, async (msg) => {
    const chatId = msg.chat.id;
    const data = await getData();
    bot.sendMessage(chatId, data.title);
    bot.sendMessage(chatId, data.by);
    bot.sendMessage(chatId, data.url);
});

