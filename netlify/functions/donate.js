const { Telegraf } = require("telegraf");

// require("dotenv").config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const webLink = process.env.APP_URL;

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
	ctx.reply("Hello " + ctx.from.first_name + "!");
	ctx.reply("Welcome to Hulugram Fund", {
		reply_markup: {
			inline_keyboard: [
				[{ text: "Hulu Donate", web_app: { url: webLink } }],
			],
		},
	});
});
bot.help((ctx) => {
	ctx.reply("Send /start to receive a greeting");
	ctx.reply("Send /keyboard to receive a message with a keyboard");
	ctx.reply("Send /quit to stop the bot");
});

bot.on("sticker", (ctx) => ctx.reply("👍 good!"));
bot.hears("hi", (ctx) => ctx.reply(`Hey there, ${ctx.from.last_name}`));

bot.command("quit", (ctx) => {
	// Explicit usage
	ctx.telegram.leaveChat(ctx.message.chat.id);
	// Context shortcut
	ctx.leaveChat();
});

bot.command("keyboard", (ctx) => {
	ctx.reply("Keyboard", {
		reply_markup: {
			keyboard: [
				[
					{ text: "First option", callback: { data: "first" } },
					{ text: "Second option", callback: { data: "second" } },
				],
			],
		},
	});
});


bot.on("text", (ctx) => {
	ctx.reply(
		"You choose the " +
			(ctx.message.text === "First option" ? "First" : "Second") +
			" Option!"
	);
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
