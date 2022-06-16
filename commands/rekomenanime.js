// REKOMENDASI ANIME DARI MEOWNIME!

const discord = require('discord.js')
const bot = new discord.Client()
const axios = require('axios');
const cheerio = require('cheerio');


module.exports = {
	name: "rekomenanime",
	description: "Dapatkan rekomendasi anime dari meownime!",
	execute: async (client, message, args) => {


		message.channel.send("```Sabar loading ngab...```")

        // GET DATA WITH AXIOS

            axios.get('https://meownime.moe/rekomendasi-anime/').then(async res => {

        // LOAD DATA WITH CHEERIO    
            
            const $ = await cheerio.load(res.data)

        // RANDOM NUMBER GENERATOR(SYNC WITH LIST LENGTH)

            const maxrandom1 = await $('div[class="entry-content"] > ol > li').length
            const maxrandom2 = await $('div[class="entry-content"] > ol > li').length
            const maxrandom3 = await $('div[class="entry-content"] > ol > li').length
            const maxrandom4 = await $('div[class="entry-content"] > ol > li').length
            const maxrandom5 = await $('div[class="entry-content"] > ol > li').length
            const maxrandom6 = await $('div[class="entry-content"] > ol > li').length
            const maxrandom7 = await $('div[class="entry-content"] > ol > li').length
            const maxrandom8 = await $('div[class="entry-content"] > ol > li').length
            const maxrandom9 = await $('div[class="entry-content"] > ol > li').length
            const maxrandom10 = await $('div[class="entry-content"] > ol > li').length

        // RANDOM THE NUMBER OF LI LENGTH
        
            const random1 = await Math.floor(Math.random() * Math.floor(maxrandom1));
            const random2 = await Math.floor(Math.random() * Math.floor(maxrandom2));
            const random3 = await Math.floor(Math.random() * Math.floor(maxrandom3));
            const random4 = await Math.floor(Math.random() * Math.floor(maxrandom4));
            const random5 = await Math.floor(Math.random() * Math.floor(maxrandom5));
            const random6 = await Math.floor(Math.random() * Math.floor(maxrandom6));
            const random7 = await Math.floor(Math.random() * Math.floor(maxrandom7));
            const random8 = await Math.floor(Math.random() * Math.floor(maxrandom8));
            const random9 = await Math.floor(Math.random() * Math.floor(maxrandom9));
            const random10 = await Math.floor(Math.random() * Math.floor(maxrandom10));

        // SCRAPE THE LIST
            
            const anime1 = await $('div[class="entry-content"] > ol > li').eq(random1).text();
            const anime2 = await $('div[class="entry-content"] > ol > li').eq(random2).text();
            const anime3 = await $('div[class="entry-content"] > ol > li').eq(random3).text();
            const anime4 = await $('div[class="entry-content"] > ol > li').eq(random4).text();
            const anime5 = await $('div[class="entry-content"] > ol > li').eq(random5).text();
            const anime6 = await $('div[class="entry-content"] > ol > li').eq(random6).text();
            const anime7 = await $('div[class="entry-content"] > ol > li').eq(random7).text();
            const anime8 = await $('div[class="entry-content"] > ol > li').eq(random8).text();
            const anime9 = await $('div[class="entry-content"] > ol > li').eq(random9).text();
            const anime10 = await $('div[class="entry-content"] > ol > li').eq(random10).text();
	
			
		// OUTPUT DISCORD EMBED 

    let rekomen = new discord.MessageEmbed()
		.setAuthor("10 REKOMENDASI ANIME! [RANDOM]")
		.setDescription("Note : Semua rekomendasi anime disini diambil dari website meownime, data akan berubah-ubah sesuai dari website tersebut!")
		.setColor("RANDOM")
		.addFields(
		{name: `⬇️ 1 ⬇️`, value: '**' + anime1 + '**'}
		)
		.addFields(
		{name: `⬇️ 2 ⬇️`, value: '**' +  anime2 + '**'}
		)
		.addFields(
		{name: `⬇️ 3 ⬇️`, value: '**' + anime3 + '**'}
		)
		.addFields(
		{name: `⬇️ 4 ⬇️`, value: '**' + anime4 + '**'}
		)
		.addFields(
		{name: `⬇️ 5 ⬇️`, value: '**' + anime5 + '**'}
		)
		.addFields(
		{name: `⬇️ 6 ⬇️`, value: '**' + anime6 + '**'}
		)
		.addFields(
		{name: `⬇️ 7 ⬇️`, value: '**' + anime7 + '**'}
		)
		.addFields(
		{name: `⬇️ 8 ⬇️`, value: '**' + anime8 + '**'}
		)
		.addFields(
		{name: `⬇️ 9 ⬇️`, value: '**' + anime9 + '**'}
		)
		.addFields(
		{name: `⬇️ 10 ⬇️`, value: '**' + anime10 + '**'}
		)


  .setFooter('TOLONG JANGAN KEBANYAKAN NGANIME, KARENA TERLALU BANYAK NGANIME BISA MEMBUAT ANDA MENJADI NOLEP, ANTI SOSIAL, BEBAN KELUARGA, IQ MENURUN, TAPI ITU TERSERAH KALIAN SAYA HANYA MENGINGATKAN, TERIMA KASIH ^_^')
	.setThumbnail('https://meownime.moe/wp-content/uploads/2020/05/cropped-android-icon-192x192-1-192x192.png')
	
		// OUTPUT DISCORD EMBED
			
		// SEND!
            
			message.channel.send(rekomen)
		
		// SEND!
    
		})
	  
	
	}
    
}
      

        





