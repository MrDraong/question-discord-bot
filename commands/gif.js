const fetch = require('node-fetch');
module.exports = async function(message, args){
    let url = `https://api.tenor.com/v1/search?q=${args}&key=${process.env.GIF_TOKEN}`;
    let reponse = await fetch(url);
    let json = await reponse.json();
    const index = Math.floor(Math.random() * json.results.length);
    message.channel.send(json.results[index].url);
    message.channel.send("GIF from Tenor:" + args);
}