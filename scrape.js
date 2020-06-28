const request = require('request');
const cheerio = require('cheerio');

// request('https://inc42.com/sitemap_index.xml', (error,response, html) => {
//     if(!error && response.statusCode == 200){
//         const $ = cheerio.load(html);

//         const loc = $('loc')
//         const urls = [];
//         const dates = [];
//         loc.map(function(i,el){
//             const link = $(el).text();
//             urls.push(link);
//         })
//         const lastmod = $('lastmod');
//         lastmod.map(function(i,el){
//             const date = $(el).text()
//             dates.push(Date.parse(date));

//         })
//         // console.log(dates);

//     }
// })

function traverse(start,end,url){
    request(url,(error,response,html) => {
        if(!error && response.statusCode == 200){
            const $ = cheerio.load(html);
            const loc = $('loc');

        }
    })
}

function traverse_first(url) {
    request(url, (error,response,html) => {
        if(!error && response.statusCode == 200){
            const $ = cheerio.load(html);
            const loc = $('loc');
            loc.map((function(i,el){
            traverse_second($(el).text());
        }))
        }
    })
}

function traverse_second(url){
    request(url, (error,response,html) => {
        if(!error && response.statusCode == 200){
            const $ = cheerio.load(html);
            const h2 = $('h2');
            h2.map(function(i,el){
                console.log($(el).text());
            })
        }
    })
}

traverse_first('https://inc42.com/post-sitemap6.xml');