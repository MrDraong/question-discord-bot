const ping = require("./commands/ping");
const roll = require("./commands/roll");
const gif = require("./commands/gif");
const test = require("./commands/test");
const fs = require('fs');

const commands = {
    ping,
    roll,
    gif,
    test
}
const prefix = "!";

module.exports = async message => {
    /* if there is no prefix or a bot message just return */
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return
    };

    /* Read content of repertory commands and stock all file's name in an array */
    const checkAvailable = [];
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
	    checkAvailable.push(file.split(".")[0]);
    }
    
    /* delete the prefix and split args and command */
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    /* check if the command exist */
    if(checkAvailable.indexOf(command) >= 0){
        commands[command](message, args);
    }
    else{
        message.channel.send("Don't know this command !")
    }
}