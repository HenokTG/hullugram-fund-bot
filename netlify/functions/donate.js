
exports.handler = async (event) => {
	console.log("Received an update from Telegram!", event.body);
	return { statusCode: 200 };
};

// const axios = require("axios").default;
// const { Telegraf } = require("telegraf");

// const BOT_TOKEN = process.env.BOT_TOKEN;
// const webLink = process.env.APP_URL;

// const bot = new Telegraf(BOT_TOKEN);

// bot.start((ctx) =>
// 	ctx.reply("Welcome to Hulugram Fund", {
// 		reply_markup: {
// 			inline_keyboard: [
// 				[{ text: "Hulu Donate", web_app: { url: webLink } }],
// 			],
// 		},
// 	})
// );
// bot.launch();

// exports.handler = async (event) => {
// 	console.log("Received an update from Telegram!", BOT_TOKEN, webLink);

//     await axios.post(
// 		`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
// 		{
// 			chat_id: JSON.parse(event.body).message.chat.id,
// 			text: "I got your message!",
// 		}
// 	);

//     return { statusCode: 200 };
// };
