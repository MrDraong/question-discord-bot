const {Client, Collection, MessageEmbed} = require("discord.js");

const client = new Client();
const prefix = "!";

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let commandBody = message.content.slice(prefix.length);
    let args = commandBody.split(' ');
    let command = args.shift().toLowerCase();

    if (command === "ping") {
         const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);                   
    }   
});

client.login(process.env.TOKEN);