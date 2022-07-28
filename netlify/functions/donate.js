const { Telegraf } = require("telegraf");

// require("dotenv").config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const webLink = process.env.APP_URL;

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍 good!"));
bot.hears("hi", (ctx) => ctx.reply("Hey there, Henok"));
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
