const Discord = require ("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.login(process.env.BOT_TOKEN);

bot.on("ready", function (){
  console.log(`${bot.user.tag} mention.js aktif`);
    
})

const premiumID = ["244309041399070720"]


const prefix = "--";
bot.on("message", async message => {

let premium = premiumID.includes(message.author.id)  
  
let msg = message.content.toLowerCase();

let args = message.content.slice(prefix.length).trim().split(/ +/);

if(!message.content.startsWith(prefix)) return;
  
if(!message.guild) return;
  
if (message.author.bot) return;

if (message.channel.type === "dm") return;
  
if (msg.startsWith (prefix + "kirim")) {
            if(!premium) return message.channel.send("```Hanya pemilik ku yang bisa menggunakan fitur ini!```")
            let mentiondoi = message.mentions.members.first();
            if (!mentiondoi) return message.channel.send('```Masukkan Nama User!```')

            let message2 = args.slice(1).join(" ")
            if (!message2) return message.channel.send('```Masukkan Pesan!```')

            mentiondoi.send(message2)
           
            message.channel.send(`Berhasil Mengirim Pesan ( **${mentiondoi}: ${message2}** )`).then(msg => {
              });
          
            message.delete();
          
            }
  
  if (msg.startsWith (prefix + "say")) {
    
    if(!premium) return message.channel.send("```Hanya pemilik ku yang bisa menggunakan fitur ini!```")
    let saymessage = args.slice(1).join(" ")
    if (!saymessage) return message.channel.send('```Masukkan pesan untuk ditulis oleh bot Heckayo!```')

    message.channel.send(saymessage)
    
    message.delete();

    }
  
    
    
        
  
});
           
                  





