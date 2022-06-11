




axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
.then(res =>  res.data.map(e => {
    var texcolor = ""
    if(e.price_change_percentage_24h > 0){
        texcolor = "text-success"
    }
    else{
        texcolor = "text-danger"
        
    }
    document.querySelector(".tableCoins").innerHTML += `
    
    <tr>
    <th scope="row" class="uid">${e.market_cap_rank}</th>
    <td colspan="2">
    <img src="${e.image}" style="width:20px;"/>    
    ${e.name} 
    <span class="ms-3 text-muted text-uppercase">${e.symbol}</span>
    </td>
    <td>${e.current_price}</td>
    <td class="${texcolor}">${e.price_change_percentage_24h}</td>
    </tr>
    
    
    ` 
}))

axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false")
    .then(res => {
        var ctx = document.querySelector("#hola").getContext("2d")
        const plugin = {
            id: 'custom_canvas_background_color',
            beforeDraw: (chart) => {
              const ctx = chart.canvas.getContext('2d');
              ctx.save();
              ctx.globalCompositeOperation = 'destination-over';
              ctx.fillStyle = 'rgb(169, 171, 174)';
              ctx.fillRect(0, 0, chart.width, chart.height);
              ctx.restore();
            }
          };
        var chasr = new Chart(ctx, {
            
            type: 'line',
            data: {
                labels: [res.data[0].symbol,res.data[1].symbol,res.data[2].symbol,res.data[3].symbol],
                datasets:[{
                    data:[ res.data[0].current_price, res.data[1].current_price,res.data[2].current_price,res.data[3].current_price],
                    borderColor: 'rgb(234, 255, 236)',
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(#3FFE0A)',
                        'rgb(255, 205, 86)',
                        'rgb(54, 162, 235)'
                    ],
                    color: 'rgb(0,0,0)',
                    tension: 0.0,
                    

                }]
            },
            plugins: [plugin],
            
            
        })

        console.log(res.data)
    })




