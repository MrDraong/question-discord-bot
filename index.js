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
    const command = args.shift.toLowerCase();

    switch (command) {
        case 'ping':
            message.channel.send('pong');
          break;
        case 'roll':
            let res = 0;
            while(res == 0){
                res = Math.floor(Math.random() * 6);
            }
          console.log(`Dice : ${roll}`);
          break;
        default:
          console.log('Sorry, command is not recognize');
      }
    
  });
  

client.login(process.env.TOKEN);