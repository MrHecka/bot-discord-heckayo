const Discord = require('discord.js')
const bot = new Discord.Client()
const axios = require('axios')

bot.on("ready", function (){
  console.log(`${bot.user.tag} SMS AKTIF!`);
    
})


module.exports = {
	name: "sms2",
	description: "SMS ke Orang Random Lewat Discord!",
	usage: "sms2 <nomortelepon> <pesan>",
	execute: async (client, message, args) => {
		

const notelepon = args[0]
const pesan = args.slice(1).join(' ')
const email = process.env.emailmedansms 
const pw = process.env.pwmedansms

if(!args[0,1]) {
	message.channel.send('```Error | Silahkan Masukkan Nomor Telepon Dan Teks SMS Yang Mau Dikirim! [Contoh : --sms2 086969696969 Kamu Jelek Beut Dah, Aku Kesal!]```')
  message.delete()
	return
}

if(pesan.length < 11) {
	message.channel.send('```Masukkan Pesan SMS Minimal 10 Huruf!```')
  message.delete()
	return
}
    
if(args[0].length > 12) {
	message.channel.send('```Masukkan Nomor Telepon Range 1-12 Angka!```')
  message.delete()
	return
}
    
if(args[0].length < 11) {
	message.channel.send('```Masukkan Nomor Telepon Range 1-12 Angka!```')
  message.delete()
	return
}
    



if(isNaN(args[0])) {
	message.channel.send('```Nomor Telepon Mana Ada Yang Pake Huruf Ngab???```')
  message.delete()
	return
}

  
if(args[0,1]) {
  
 let sendsuccess = new Discord.MessageEmbed().setColor("RANDOM")
		
		.setAuthor(`Pesan Terkirim! | Dari ${message.author.username} | Ke ${(notelepon.replace(notelepon.substring(4,9), "xxxxx"))}`)
		.addField('**Nomor Tujuan**', notelepon.replace(notelepon.substring(4,9), "xxxxx"))
		.addField('**Pesan**', pesan)
		
		message.channel.send(sendsuccess)
    message.delete()
  
}
    
		
axios({
  method: 'post',
  url: `https://reguler.medansms.co.id/sms_api.php?action=kirim_sms&email=${email}&passkey=${pw}&no_tujuan=${notelepon}&pesan=${pesan} -------------------------- Dikirim Oleh : ${message.author.username} - By BOT Heckayo X https://medansms.co.id!`

  }).catch((err) => {
		console.error('ERROR : ', err)
		message.channel.send('```ERROR | Gagal Mengirim Pesan :(```')
    
  })
    
  }
}
  

		
		


