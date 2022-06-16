const { MessageEmbed } = require("discord.js")
const { COLOR } = require("./config.json");

module.exports = {
  name: "loop",
  description: "Mengulangi antrian musik yang telah di play!",
  execute (client, message, args) {
    let embed = new MessageEmbed()
  .setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      
      embed.setAuthor("🚫 || Kamu harus berada di voice channel terlebih dahulu!")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("🚫 || Tidak ada musik yang bisa saya ulangi/loop :/")
      return message.channel.send(embed);
    }
    
  
    serverQueue.loop = !serverQueue.loop
    
    
    embed.setDescription(`Loop Mode : **${serverQueue.loop ? "Aktif" : "Mati"}**`)
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed)
    
    
    
    
  }
}



