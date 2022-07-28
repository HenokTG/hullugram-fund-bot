const { Telegraf } = require("telegraf");

const BOT_TOKEN = process.env.BOT_TOKEN;
const webLink = process.env.APP_URL;

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
	ctx.reply("Hello, " + ctx.from.first_name + "!");
	ctx.reply("Welcome to Hulugram Fund", {
		reply_markup: {
			inline_keyboard: [
				[{ text: "Hulu Donate", web_app: { url: webLink } }],
			],
		},
	});
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
