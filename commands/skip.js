const { MessageEmbed } = require("discord.js")

const { COLOR } = require("./config.json");


module.exports = {
  name: "skip",
  description: "Lewati musik!",
  async execute(client, message, args) {
   
    
    
    
let embed = new MessageEmbed()
.setColor(COLOR);


    const { channel } = message.member.voice;

       
    if (!channel) {

      embed.setAuthor("🚫 || Kamu harus berada di voice channel terlebih dahulu!")
      return message.channel.send(embed);
    }
    const serverQueue = message.client.queue.get(message.guild.id);
    const vote = message.client.vote.get(message.guild.id)
    if (!serverQueue) {
      embed.setAuthor("🚫 || Tidak ada lagu yang bisa saya lewati!")
      return message.channel.send(embed);
    }
    

    serverQueue.connection.dispatcher.end();
    embed.setDescription(`⏩ | Lagu dilewati oleh ${message.author}!`)
    embed.setThumbnail(client.user.displayAvatarURL())
    return message.channel.send(embed);
       }  

       


       
       
       
}
    
     
     
     
