const {Client, Intents} = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const commandHandler = require("./commands")

require('dotenv').config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
 });
  
client.on('messageCreate', commandHandler);
  

client.login(process.env.TOKEN);