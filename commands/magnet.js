const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", function () {
  console.log('magnet.js aktif!!!')
  
})


module.exports = {
  name: "magnet",
  description: "tarik semua member ke voice channel kamu!",
  execute:async (client, message, args) => {


  const channel = message.member.voice.channel;
  
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      let magnetpermembed = new Discord.MessageEmbed()
      .setAuthor("🧲🚫🧲 || Magnet hanya bisa digunakan oleh admin!")
      return message.channel.send(magnetpermembed);
      
    }
    

    if (!channel) {
      
      let magnetfalseembed = new Discord.MessageEmbed()
      .setAuthor("🧲🚫🧲 || Magnet tidak akan aktif jika kamu tidak berada di voice channel!")
      return message.channel.send(magnetfalseembed);
    }



  message.guild.members.cache.forEach(member => {
  
  if(member.id === message.member.id || !member.voice.channel) return;
    member.voice.setChannel(channel);
  
})

  let magnetembed = new Discord.MessageEmbed()
  .setAuthor("🧲🧲🧲 || Menarik semuanya yang ada di server ke voice channel kamu!")
  message.channel.send(magnetembed)

  }
}







