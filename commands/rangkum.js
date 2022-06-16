const discord = require('discord.js')
const client = new discord.Client()
const summarizer = require('text-summarisation')


client.on("ready", function () {
  console.log("rangkum.js aktif!!!")
  
})

module.exports = {
  name: "rangkum",
  description: "Rangkum teks mudah dan cepat!",
  usage: "rangkum <text>",
  execute: async (client, message, args) => {



  let embedrangkum = new discord.MessageEmbed()
  const text = args.join(" ")
  const result = summarizer(text)
  
  
  if (!args[0]) {
      embedrangkum.setAuthor("Masukkan kata-kata yang ingin dirangkum!") 
      return message.channel.send(embedrangkum)
    }

    if(!args[9]) return message.reply("Tolong masukkan minimal 10 kata!");
    
    


  summarizer(text, { sentences: 2 }).then(result => message.channel.send("```" + result + "```" + `\n${message.author} || Enjoy ^_^`));
  
  if (args[0]) {
      message.delete()
    }
  



}

}
  




