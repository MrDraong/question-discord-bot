module.exports = async function(message, args){
    const user = message.author;

    console.log(message.mentions.users.first().username);
    //message.channel.send(members.name);
}