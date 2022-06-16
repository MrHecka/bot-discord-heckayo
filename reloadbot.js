const Discord = require ("discord.js");
const bot = new Discord.Client();


bot.on("ready", function (){
  console.log(`${bot.user.tag} reloadbot.js aktif!`);
    
})

const premiumID = ["244309041399070720"]


const prefix = "--";
bot.on("message", async message => {

let premium = premiumID.includes(message.author.id)  
let msg = message.content.toLowerCase();
if(!message.content.startsWith(prefix)) return;
if(!message.guild) return;
if(message.author.bot) return;
if(message.channel.type === "dm") return;
  
  
  if(msg.startsWith (prefix + "reloadbot")) {
  if(!premium) return message.channel.send("```Hanya pemilik ku yang bisa menggunakan fitur ini!```")
    message.channel.send('```BOT BERHASIL DI RELOAD! || SEBENTAR SABAR...... [Tunggu Sekitar 30 Detik]```').then(() => {
      console.log('BOT BERHASIL DI RELOAD!')
      process.exit(1);

      
    })
    
  }
  
})

bot.login(process.env.BOT_TOKEN)




