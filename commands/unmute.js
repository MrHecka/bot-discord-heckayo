const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", function() { 
  console.log('Unmute.js aktif!')
})

module.exports = {
  name: "unmute",
  description: "Unmute semua member yang ada di voice channel kamu!",
  execute: async (client, message, args) => {
  
  const channel = message.member.voice.channel
  
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      let unmutepermembed = new Discord.MessageEmbed()
      .setAuthor("🎙️🚫🎙️ || Fitur unmute hanya bisa digunakan oleh admin!")
      return message.channel.send(unmutepermembed);
      
    }
    
    if (!channel) {  
      let unmutefalseembed = new Discord.MessageEmbed()
      .setAuthor("🎙️🚫🎙️ || Fitur unmute tidak akan aktif jika kamu tidak berada di voice channel!")
      return message.channel.send(unmutefalseembed);
    }
    
  
    
  if (message.member.voice.channel) {
    let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
    for (const [memberID, member] of channel.members) {
    member.voice.setMute(false); 
}
    
  }
  
  let unmuteembed = new Discord.MessageEmbed()
  .setAuthor("🎙️🎙️🎙️ || Semua member yang ada di voice channel kamu sudah boleh bersuara!")
  message.channel.send(unmuteembed)


  
  
  }
  
}






