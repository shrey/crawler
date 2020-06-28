const request = require('request');
const cheerio = require('cheerio');

request('https://yourstory.com/mystory/news-sitemap.xml', (error,response,html) => {
    if(!error && response.statusCode == 200){
        console.log(html);

    }
})