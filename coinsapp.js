
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

                    // jodiendo con fechas y moments JS
                    var fecha = e.last_updated
                    var horaGood = fecha.substring(12, 19 )
                    var fechaGood = fecha.substring(0,4)+''+(fecha.substring(5,7))+''+(fecha.substring(8,10))+horaGood
                    var hola = moment(fechaGood, "YYYYMMDD, h:mm:ss a").endOf('hour').fromNow(); 
                    document.querySelector(".img").src = e.image
                    document.querySelector(".current").innerHTML = e.current_price
                    document.querySelector(".change").innerHTML = e.price_change_percentage_24h > 0 ? `${e.price_change_percentage_24h}` : `${e.price_change_percentage_24h}`+" %"
                    document.querySelector(".rd").innerHTML = " RD$ "+parseFloat(e.current_price*dollar) 
                    document.querySelector("#name").innerHTML = e.name 
                    document.querySelector(".market_cap_rank").innerHTML = e.market_cap_rank 
                    document.querySelector(".price_change_24h").innerHTML = e.price_change_24h 
                    document.querySelector(".ts").innerHTML = e.total_supply 
                    document.querySelector(".alt").innerHTML = e.atl 
                    document.querySelector(".ath").innerHTML = e.ath 
                    document.querySelector(".last_update").innerHTML =  hola
                    
                    
                }
                else{

                    const toast = document.querySelector(".toast")
                    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
                    var toastList = toastElList.map(function (toastEl) {
                    return new bootstrap.Toast(toastEl, option)
                    })


                }
            });
        })
})
