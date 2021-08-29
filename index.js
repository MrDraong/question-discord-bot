const {Client, Intents, Collection, MessageEmbed} = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = "!";

require('dotenv').config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
 });
  
 client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return
    };

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'ping':
            message.channel.send('pong');
          break;
        case 'roll':
            let roll = 0;
            while(roll == 0){
                roll = Math.floor(Math.random() * 6);
            }
            message.channel.send(`Dice : ${roll}`);
          break;
        default:
            message.channel.send('Sorry, command is not recognize');
      }
    
  });
  

client.login(process.env.TOKEN);