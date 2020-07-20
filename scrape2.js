const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');



fs.mkdir('./test-dir', function(err){
    if(err){
        console.log(error);
    }
    else{
        console.log("Directory created");
    }
})
// request('https://wordinfo.info/results?searchString=defdsr', (error,response,html) => {
//     if(!error && response.statusCode == 200){
//         // console.log(html);
//         const $ = cheerio.load(html);
//         const selector = $('#Words > div > div.definition > center:nth-child(3) > img')
//         if(selector.attr('src')){
//             console.log('exists');
//         }
//         else{
//             console.log('not exists');
//         }
//     }
// })