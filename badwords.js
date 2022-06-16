const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: false});
client.login(process.env.BOT_TOKEN);
const { badwords } = require("./badwords.json")


client.on("ready", () => {
  console.log("badwords.js aktif");
});

//ANTI BADWORD




client.on("message", async message => {
  
if (message.author.bot) return;
if (message.webhookID) return;
  
let confirm = false;


var i;
  for(i = 0;i < badwords.length; i++) {
    
    if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
      confirm = true;
  }
  
  if(confirm){
    message.delete()
    return message.channel.send(`${message.author} Tolong gunakan bahasa yang baik dan benar, terima kasih! 😄`)
    
  }


})

//ANTI BADWORD




          
