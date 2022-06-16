const { MessageEmbed } = require("discord.js")
const { COLOR } = require("./config.json");



const discord = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stop musik!",
  execute(client, message, args) {
    
    
let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("🚫 || Kamu harus berada di voice channel terlebih dahulu!")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("🚫 || Tidak ada lagu yang bisa saya berhentikan sekarang!")
      return message.channel.send(embed);
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
};
