

let chart = document.getElementById('chart').getContext('2d');

let massPopChart= new Chart(chart,{
    type:'line',
    data:{
        labels:['6:00','9:00','12:00','15:00','18:00','21:00'],
        datasets:[{
            label:'Tempertura',
            data:[
                12.5,
                15,
                16,
                15.5,
                13.5,
                10
            ]
        }]
    },
    options:{}
});

