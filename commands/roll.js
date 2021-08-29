module.exports = function(message, args) {
    let roll = 0;
    while(roll == 0){
        roll = Math.floor(Math.random() * 6);
    }
    message.channel.send(`Dice : ${roll}`);

}         