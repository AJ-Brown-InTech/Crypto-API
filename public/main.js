const api = "https://api.coindesk.com/v1/bpi/currentprice.json";
const footer = document.getElementById
async function apiAsyncCall() {
  let result = await fetch(api);
  let data = result.json().then((data) => {
    const { bpi, time } = data;
    let eur = bpi.EUR
    let gbp = bpi.GBP
    let usd = bpi.USD
const places = [eur, gbp ,usd]

let cards = places.map( x => getHTML(x)).join('')

document.getElementById("root").innerHTML = cards
   


function getHTML(places) {
        return ` <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${places.code}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${places.symbol}</h6>
            <p class="card-text">${places.description}</p>
            <h6 class="card-text">${places.rate_float} or ${places.rate}</h6>
          </div>
        </div>`;
      }
   
 
      console.log(content)
  });
}
apiAsyncCall();

