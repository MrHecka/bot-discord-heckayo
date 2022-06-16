const Discord = require ("discord.js");
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] } || {disableEveryone: false});

bot.on("ready", function (){
  console.log('reaction.js aktif');
    
})

bot.on('message', async message =>{
  if (message.content === `lol`){
	  message.react('😄');
  } else if (message.content === `lmao`){
    message.react('😄');
  }
});

bot.login(process.env.BOT_TOKEN);


