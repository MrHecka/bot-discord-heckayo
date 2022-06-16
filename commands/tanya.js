const Discord = require("discord.js")
const bot = new Discord.Client();


bot.on("ready", function (){
  console.log(`${bot.user.tag} tanya.js aktif`);
    
})

module.exports = {
  name: "tanya",
  description: "Silahkan tanyakan sesuatu",
  usage: "tanya <pertanyaan>",
  execute: async (client, message, args) => {
  if(!args[2]) return message.reply("Tolong masukkan pertanyaan dengan benar! [Minimal 3 Kata!]");
  let balas = ["Iya", "Tidak", "Tidak Tahu", "Tanyakan lagi nanti"];
    
  let jawaban = Math.floor((Math.random() * balas.length));
  let pertanyaan = args.slice(0).join(" ");
    
  let tanyaembed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor("RANDOM")
    .addField("Pertanyaan", pertanyaan + "?")
    .addField("Jawaban", balas[jawaban])
    
    message.channel.send(tanyaembed);
}

}






