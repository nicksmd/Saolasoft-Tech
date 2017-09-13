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

async function get2Json(){
    let json1 = axios.get('https://tutorialzine.com/misc/files/example.json');
    let json2 = axios.get('http://coin.linecentury.com/api/v1/coins');
    //let res = [await json1, await json2];
    //return res
    await Promise.all([json1, json2])
        .then((res)=>{
            return res
        });
}

async function slowGet2Json(){
    let json1 = await axios.get('https://tutorialzine.com/misc/files/example.json');
    let json2 = await axios.get('https://tutorialzine.com/misc/files/example.json');
    //let res = [await json1, await json2];
    //return res
    let res = [json1, json2];
    return res
}

// console.time("json");
// get2Json().then((result)=>{
//    console.timeEnd("json");
// });
//
// console.time("json_slow");
// slowGet2Json().then(res=>{
//     console.timeEnd("json_slow");
// });

/*
 * json: 2491.464ms
 *
 */

let A = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 2);
});

let B = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 3);
});

let C = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 4);
});

async function slow_mul(){
    let a = await A;

    let b = await B;

    let c = await C;

    return a*b*c;
}

let AA = function(){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000,3);
    });
};

let BB = function(x){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, x+1);
    });
};

async function depended_slow_mul(){
    let a = await AA();
    let b = await BB(3);
    let c = await BB(4);
    return a*b*c;
}

async function depended_fast_mul(){
    let res =  await Promise.all([AA(),BB(3),BB(4)]);
    //let res = [await AA(), await BB(3), await BB(4)];
    return res[0]*res[1]*res[2]
}

async function fast_mul(){
    let res =  await Promise.all([A,B,C]);
    return res[0]*res[1]*res[2];
}

console.time("slow");
depended_slow_mul().then(res=>{
    console.log(res);
    console.timeEnd("slow");
});

console.time("fast");
depended_fast_mul().then(res=>{
    console.log(res);
    console.timeEnd("fast");
});
