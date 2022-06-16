const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", function() { 
  console.log('mute.js aktif!')
})

module.exports = {
  name: "mute",
  description: "Mute semua member yang ada di voice channel kamu!",
  execute: async (client, message, args) => {
  
  const channel = message.member.voice.channel
  
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      let mutepermembed = new Discord.MessageEmbed()
      .setAuthor("🔇🚫🔇 || Fitur mute hanya bisa digunakan oleh admin!")
      return message.channel.send(mutepermembed);
      
    }
    
    if (!channel) {  
      let mutefalseembed = new Discord.MessageEmbed()
      .setAuthor("🔇🚫🔇 || Fitur mute tidak akan aktif jika kamu tidak berada di voice channel!")
      return message.channel.send(mutefalseembed);
    }
    
  
    
  if (message.member.voice.channel) {
    let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
    for (const [memberID, member] of channel.members) {
    member.voice.setMute(true); 
}
    
  }
  
  let muteembed = new Discord.MessageEmbed()
  .setAuthor("🔇🔇🔇 || Semua member yang ada di voice channel kamu telah di bungkam!")
  message.channel.send(muteembed)


  
  
  }
  
}








