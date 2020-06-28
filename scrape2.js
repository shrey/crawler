const request = require('request');
const cheerio = require('cheerio');


request('https://inc42.com/resources/open-source-for-entrepreneurs-linux/', (error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        const h2 = $('h2');
        h2.map(function(i,el){
            console.log($(el).text());
        })
    }
})