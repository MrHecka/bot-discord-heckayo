const Discord = require ("discord.js");
const bot = new Discord.Client
const prefix = "--";

bot.login(process.env.BOT_TOKEN);

bot.on("ready", function (){
  console.log(`${bot.user.tag} jadwal.js aktif`);
    
})

bot.on('message', async message =>{

if(!message.guild) return;
if(!message.content.startsWith(prefix)) return;
if(message.author.bot) return;
if(message.channel.type === "dm") return;  
  
  
if (message.content === `${prefix}jadwal`){
const jadwalEmbed = {
	title: 'Jadwal Ganjil 2020-2021',
	image: {
		url: ('https://cdn.glitch.com/d2744c78-64b8-4367-a416-4cc8b6ddfd51%2Fimage_2020-11-14_195825.png?v=1605358709221'),
	},

};
  message.channel.send({ embed: jadwalEmbed});
  
} else if (message.content === `${prefix}jadwalpas`){
const jadwalpasEmbed = {
	title: 'Jadwal PAS',
	image: {
		url: ('https://cdn.glitch.com/d2744c78-64b8-4367-a416-4cc8b6ddfd51%2FjadwalPAS.PNG?v=1606464423849'),
	},

};
  message.channel.send({ embed: jadwalpasEmbed});
}
  
  
  
  
})


