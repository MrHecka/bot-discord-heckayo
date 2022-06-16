const { MessageEmbed } = require("discord.js");

const { COLOR } = require("./config.json");
module.exports = {
  name: "volume",
  description: "Volume musik!",
  execute(client, message, args) {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("🚫 || Kamu tidak bisa mengganti volume dari lagu ini (Butuh izin admin!)")
    }
    

    
    let embed = new MessageEmbed().setColor(COLOR);

    
    const { channel } = message.member.voice;
    if (!channel) {

      embed.setAuthor("🚫 || Kamu harus berada di voice channel terlebih dahulu!")
      return message.channel.send(embed);
    }
    
     const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("🚫 || Heckayo sedang tidak memainkan musik :/")
      return message.channel.send(embed);
    }
    
    if(!args[0]) {
      embed.setAuthor(`🎶 || Volume saat ini ${serverQueue.volume}`)
      return message.channel.send(embed)
    }
    
    if(isNaN(args[0])) {
      embed.setAuthor("🚫 || Masukkan angka!")
      return message.channel.send(embed)
    }
    
    if(args[0] > 100) {
      embed.setAuthor("🚫 || Kamu akan mati jika melewati volume 100, jadi jangan :/")
      return message.channel.send(embed)
    }
    
    serverQueue.volume = args[0]
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100)
    embed.setDescription(`🎶 || Volume diubah ke ${args[0]}`)
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed)
    
  }
};
