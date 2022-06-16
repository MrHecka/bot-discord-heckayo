const Discord = require('discord.js')
const bot = new Discord.Client()
const axios = require('axios')
const prefix = "--"


bot.on('ready', function() {
		console.log('filmtrend Ready!')
	})

module.exports = {
	name: "filmtrend",
	description: "Cari film trending minggu ini lewat discord bot heckayo!",
	execute:
	

	
	async (client, message, args) => {
		
	const url = 'https://api.themoviedb.org'	
	const apitmdb = process.env.apikeytmdb	
	
	axios
	.get(url + `/3/trending/movie/week?api_key=${apitmdb}`)
	.then((res) => {
  

    
    
		
		if(isNaN(args[0])) {
		let filmtrendlist = new Discord.MessageEmbed()
		filmtrendlist.setAuthor('| List 20 Film Trending Minggu Ini! |')
		filmtrendlist.setColor("RANDOM")
		filmtrendlist.addField('Trending #1', 'Judul : ' + '**' + res.data.results[0].title + '**' + ' | --filmtrend 1')
		filmtrendlist.addField('Trending #2', 'Judul : ' + '**' + res.data.results[1].title + '**' + ' | --filmtrend 2')
		filmtrendlist.addField('Trending #3', 'Judul : ' + '**' + res.data.results[2].title + '**' + ' | --filmtrend 3')
		filmtrendlist.addField('Trending #4', 'Judul : ' + '**' + res.data.results[3].title + '**' + ' | --filmtrend 4')
		filmtrendlist.addField('Trending #5', 'Judul : ' + '**' + res.data.results[4].title + '**' + ' | --filmtrend 5')
		filmtrendlist.addField('Trending #6', 'Judul : ' + '**' + res.data.results[5].title + '**' + ' | --filmtrend 6')
		filmtrendlist.addField('Trending #7', 'Judul : ' + '**' + res.data.results[6].title + '**' + ' | --filmtrend 7')
		filmtrendlist.addField('Trending #8', 'Judul : ' + '**' + res.data.results[7].title + '**' + ' | --filmtrend 8')
		filmtrendlist.addField('Trending #9', 'Judul : ' + '**' + res.data.results[8].title + '**' + ' | --filmtrend 9')
		filmtrendlist.addField('Trending #10', 'Judul : ' + '**' + res.data.results[9].title + '**' + ' | --filmtrend 10')
		filmtrendlist.addField('Trending #11', 'Judul : ' + '**' + res.data.results[10].title + '**' + ' | --filmtrend 11')
		filmtrendlist.addField('Trending #12', 'Judul : ' + '**' + res.data.results[11].title + '**' + ' | --filmtrend 12')
		filmtrendlist.addField('Trending #13', 'Judul : ' + '**' + res.data.results[12].title + '**' + ' | --filmtrend 13')
		filmtrendlist.addField('Trending #14', 'Judul : ' + '**' + res.data.results[13].title + '**' + ' | --filmtrend 14')
		filmtrendlist.addField('Trending #15', 'Judul : ' + '**' + res.data.results[14].title + '**' + ' | --filmtrend 15')
		filmtrendlist.addField('Trending #16', 'Judul : ' + '**' + res.data.results[15].title + '**' + ' | --filmtrend 16')
		filmtrendlist.addField('Trending #17', 'Judul : ' + '**' + res.data.results[16].title + '**' + ' | --filmtrend 17')
		filmtrendlist.addField('Trending #18', 'Judul : ' + '**' + res.data.results[17].title + '**' + ' | --filmtrend 18')
		filmtrendlist.addField('Trending #19', 'Judul : ' + '**' + res.data.results[18].title + '**' + ' | --filmtrend 19')
		filmtrendlist.addField('Trending #20', 'Judul : ' + '**' + res.data.results[19].title + '**' + ' | --filmtrend 20')
    filmtrendlist.setThumbnail('https://cdn.glitch.com/d2744c78-64b8-4367-a416-4cc8b6ddfd51%2Fblue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.png?v=1606968144078')
		filmtrendlist.setFooter('Ketik --filmtrend 1 untuk mendapatkan info film trending nomor 1 [begitu juga dengan nomor trending lainnya (Maksimal 1 sampai 20)]')
		
		
		message.channel.send(filmtrendlist)
		return
		
		}
		
		if (args[0] > 20) {
			return message.channel.send('```Masukkan angka filmtrend 1-20```')
		}
		
				if (args[0] < 1) {
			return message.channel.send('```Masukkan angka filmtrend 1-20```')
		}
    


		const angkafilmtrend = args[0]
		
		var linkfilm = 'https://dutafilm.today/search/' + res.data.results[`${angkafilmtrend}` - 1].title
		var linkfilm2 = 'https://www.google.com/search?q=Nonton+Film+' + `${res.data.results[angkafilmtrend - 1].title}` + '+Subtitle+Indonesia&oq=Nonton+Film+}' + `${res.data.results[angkafilmtrend - 1].title}` + '+Subtitle+Indonesia'
		let filmtrend = new Discord.MessageEmbed()
    
    
    filmtrend.setAuthor(`| TRENDING #${args[0]} | ` + res.data.results[`${angkafilmtrend}` - 1].title)
    filmtrend.setDescription(res.data.results[`${angkafilmtrend}` - 1].overview.replace(/<[^>]*>/g, '').split('\n'))
		filmtrend.setColor("RANDOM")
		filmtrend.addField('•Informasi Film•', `**Judul Film : **${res.data.results[angkafilmtrend - 1].title}\n**Tanggal Rilis : **${res.data.results[angkafilmtrend - 1].release_date}\n**Film Dewasa ? : **${res.data.results[angkafilmtrend - 1].adult ? 'Iya' : 'Tidak'}\n**Bahasa : **${res.data.results[angkafilmtrend - 1].original_language}`, true)
		filmtrend.addField('•Rating•', `**Total Vote : ** ${res.data.results[angkafilmtrend - 1].vote_count}\n**Vote Average : **${res.data.results[angkafilmtrend - 1].vote_average}`, true)
		filmtrend.addField(`[•Link Nonton Film•]`, `\n[DutaFilm](${linkfilm}) | | | \n[Google Search](${linkfilm2})`.replace(/\s/g, ''))
		filmtrend.setThumbnail('https://image.tmdb.org/t/p/w500' + res.data.results[angkafilmtrend - 1].poster_path)
		filmtrend.setFooter('Jika link tidak bisa dibuka/error silahkan buka link manual di [dutafilm.com] | atau jika anda sultan nonton di netflix!')
		
      message.channel.send(filmtrend)
    
  
  
		
      

	.catch((err) => {
		console.error('ERROR : ', err)
	})
    
  

                                               
  

  })
  
  

}
      
}





