const form = document.querySelector(".formulario")
const img = document.querySelector(".img").src
var  dollar =  54.930


form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const inp = document.querySelector(".coin").value
    
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false")
    .then(res => {
        

        res.data.forEach(e => {
            if ((inp.toLowerCase() === e.symbol || inp.toLowerCase() === e.id)){
                    document.querySelector(".img").src = e.image
                    document.querySelector(".current").innerHTML = e.current_price
                    document.querySelector(".change").innerHTML = e.price_change_percentage_24h+" %"
                    document.querySelector(".rd").innerHTML = " RD$ "+parseFloat(e.current_price*dollar) 
                    
                    
                }
            });
        })
})