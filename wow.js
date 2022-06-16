const Discord = require('discord.js')
const bot = new Discord.Client()
const { wow } = require('./wow.json')

const prefix = "--"

bot.on("ready", () => {
  console.log("WOW.JS AKTIF!")
  
});


bot.on("message", async message => {
  
  if(!message.guild) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  
  if(message.content === `${prefix}wow`){
    
  let wowhasil1 = Math.floor(Math.random() * wow.length);
  let wowhasil2 = Math.floor(Math.random() * wow.length);
  let wowhasil3 = Math.floor(Math.random() * wow.length);
  let wowhasil4 = Math.floor(Math.random() * wow.length);
  let wowhasil5 = Math.floor(Math.random() * wow.length);
  let wowhasil6 = Math.floor(Math.random() * wow.length);
  let wowhasil7 = Math.floor(Math.random() * wow.length);
  let wowhasil8 = Math.floor(Math.random() * wow.length);
  let wowhasil9 = Math.floor(Math.random() * wow.length);
  let wowhasil10 = Math.floor(Math.random() * wow.length);
    
  let wowembed = new Discord.MessageEmbed()
  
    .setAuthor(`|WORD OF THE WEEKS|`)
    .setColor("RANDOM")
    .addField('**1**', wow[wowhasil1])
    .addField('**2**', wow[wowhasil2])
    .addField('**3**', wow[wowhasil3])
    .addField('**4**', wow[wowhasil4])
    .addField('**5**', wow[wowhasil5])
    .addField('**6**', wow[wowhasil6])
    .addField('**7**', wow[wowhasil7])
    .addField('**8**', wow[wowhasil8])
    .addField('**9**', wow[wowhasil9])
    .addField('**10**', wow[wowhasil10])
    .addField('**TRANSLATE**', "(https://translate.google.co.id/?hl=id\)")
    .setFooter("| PERHATIAN! Fitur WOW ini masih dalam tahap beta, mohon maaf jika ada persamaan kata yang terdapat dalam list diatas |")
  
    message.channel.send(wowembed);
  
  }
  
})


bot.login(process.env.BOT_TOKEN)




