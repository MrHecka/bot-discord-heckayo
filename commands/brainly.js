const Discord = require('discord.js')
const bot = new Discord.Client()
const axios = require('axios')


module.exports = {
	name: "brainly",
	description: "Mengambil beberapa keyword yang di temukan lewat brainly!",
	usage: "brainly <text>",
	execute: 
	
		async (client, message, args) => {
		
		const url = 'http://api.farzain.com/brainly.php?id='
		const api = process.env.apibrainly
		let keyword = args.join(" ")
		
		if(!args[0]) return message.channel.send('```Masukkan keyword!```')
		
		message.channel.send('```Tunggu Sebentar...Heckayo Sedang Mengambil Data...```')
		
		axios
		.get(url + keyword + '&apikey=' + api)
		.then((result) => {
		
		let bembed = new Discord.MessageEmbed()
		.setAuthor('[BERIKUT INFORMASI DARI BRAINLY YANG HECKAYO DAPAT]')
		.setDescription(`${message.author} | **${keyword}** |`)
		.addField('1',`[${result.data[0].title}](${result.data[0].url})`)
		.addField('2',`[${result.data[1].title}](${result.data[1].url})`)
		.addField('3',`[${result.data[2].title}](${result.data[2].url})`)
		.addField('4',`[${result.data[3].title}](${result.data[3].url})`)
		.addField('5',`[${result.data[4].title}](${result.data[4].url})`)
		.addField('6',`[${result.data[5].title}](${result.data[5].url})`)
		.addField('7',`[${result.data[6].title}](${result.data[6].url})`)
		.addField('8',`[${result.data[7].title}](${result.data[7].url})`)
		.addField('9',`[${result.data[8].title}](${result.data[8].url})`)
		.addField('10',`[${result.data[9].title}](${result.data[9].url})`)
    .setThumbnail('https://cdn.glitch.com/d2744c78-64b8-4367-a416-4cc8b6ddfd51%2Fbrainly.png?v=1606968044472')
		.setFooter('ENJOY ^_^')
			
		message.channel.send(bembed)
	  
		
}).catch((err) => {
		console.error('ERROR : ', err)
    message.channel.send('```| ERROR |```')
    })
    }
  
}

          



