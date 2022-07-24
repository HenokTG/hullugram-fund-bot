const axios = require("axios").default;
const { Telegraf } = require("telegraf");

exports.handler = async (event) => {
	console.log("Received an update from Telegram!", process.env.APP_URL);
    await axios.post(
		`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
		{
			chat_id: JSON.parse(event.body).message.chat.id,
			text: "I got your message!",
		}
	);
	return { statusCode: 200 };
};
