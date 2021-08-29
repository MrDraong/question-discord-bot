const {Client, Intents, Collection, MessageEmbed} = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = "!";

require('dotenv').config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
 });
  
 client.on('messageCreate', message => {
    if (message.content === 'ping') {
      message.channel.send('pong');
    }
  });
  

client.login(process.env.TOKEN);