//"https://api.coindesk.com/v1/bpi/currentprice.json"
let content = document.getElementById('#root')
let api = "https://api.coindesk.com/v1/bpi/currentprice.json"
console.log(api)
fetch(api).then( resp =>{
    return resp.json()
}).then(data =>{
    
    let info = data.bpi.map()
    var time = data.time   
    
return console.log(info)
})

function getHtml(){

}