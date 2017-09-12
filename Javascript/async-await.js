/**
 * Created by quangh on 9/12/2017.
 */
/*
 https://tutorialzine.com/2017/07/javascript-async-await-explained
 https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
*/
let axios = require('axios');
function getJsonPromise() {
    return new Promise((resolve) =>{
        axios.get('https://tutorialzine.com/misc/files/example.json')
            .then((json)=>{
                resolve(json)
            })
    })
}

async function getJson(){
    try{
        let json = await axios.get('https://tutorialzine.com/misc/files/example.json');
        return json
    }
    catch(error){

    }
}

getJson().then((result)=>{
            console.log(result)
        })
    .catch((error)=>{

    });

getJsonPromise()
    .then((result)=>{
        console.log(result)
    });

