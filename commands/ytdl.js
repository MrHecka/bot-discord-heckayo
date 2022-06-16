const Discord = require('discord.js')
const bot = new Discord.Client()
const axios = require('axios')
const TinyURL = require('tinyurl')



bot.on('ready', function() {
		console.log('ytdl.js Ready!')
	})
	
	
module.exports = {
	name: "ytdl",
	description: "Download video/mp3 dari youtube lewat discord!",
	execute:
  
	
	async (client, message, args) => {
		
		const url = 'https://api.i-tech.id/dl/'
		const api = process.env.apitech
    
    
 message.channel.send("```Tunggu sebentar...```")   
    
    
    if(!args[0]) return message.channel.send('```Masukkan link youtube atau ID video dari youtube!```')
		
		axios
		.get(url + 'yt?key=' + api + '&link=' + args[0])
		.then((result) => {
			


 if (result.data.code != 200 && result.data.status != 'success') return message.channel.send(result.data.pesan + " | ERROR (Mungkin karena website API down/MT)")

 
TinyURL.shorten(result.data.url_video, async(urlvideo) => {
  
TinyURL.shorten(result.data.url_audio, async(urlaudio) => {


			
			let embedytdl = new Discord.MessageEmbed()
			.setAuthor(`| LINK DOWNLOAD | ${result.data.title}`)
			.setColor("RANDOM")
			.setDescription(result.data.desc)
			.addField('Judul Video : ', result.data.title)
			.addField('Durasi : ', result.data.duration + " Menit|Detik")
      .addField('Link Download MP4 [Video] : ', urlvideo)
			.addField('Link Download MP3 [Musik]: ', urlaudio)
			.setThumbnail(result.data.thumbnail)
			
			
return message.channel.send(embedytdl)
  
    })
})
      
      

		}).catch((err) => {
		console.error('ERROR : ', err)
      message.channel.send(err + " | ERROR!")
  })

    }
    
  }
  

         
    
	
	

