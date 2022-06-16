const Discord = require('discord.js')
const bot = new Discord.Client()
const unirest = require('unirest')


module.exports = {
	name: "translate",
	description: "Translate bahasa inggris ke bahasa indonesia lewat discord!",
	usage: "translate <text>",
	execute:
	
	async (client, message, args) => {

	let embederr = new Discord.MessageEmbed()	

	const text = args.join(' ')
  
	if (!text) {
    embederr.setAuthor('ENGLISH > BAHASA')
		embederr.setDescription('**ERROR! | Masukkan kata-kata terlebih dahulu! [Contoh : --translate Hello World]**')
		message.channel.send(embederr)
		return
	} 

var req = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");

req.headers({
	"content-type": "application/x-www-form-urlencoded",
	"accept-encoding": "application/gzip",
	"x-rapidapi-key": "e55509fc6bmsh3f71f47d6561243p1419d4jsn7de06765a09e",
	"x-rapidapi-host": "google-translate1.p.rapidapi.com",
	"useQueryString": true
});

req.form({
	"q": text,
	"source": "en",
	"target": "id"
});


req.end(function (res) {
	if (res.error) return message.channel.send(`${message.author} | ERROR | Format yang dimasukkan salah!`)
	let transembed = new Discord.MessageEmbed()
	.setAuthor('[HASIL TERJEMAHAN]')
  .setDescription(`${message.author}`)
	.addField('**Dari BAHASA INGGRIS**', text)
	.addField('**Ke BAHASA INDONESIA**', res.body.data.translations[0].translatedText)
  .setFooter('______')
  
  message.channel.send(transembed)

})
    


  
  
}



}








