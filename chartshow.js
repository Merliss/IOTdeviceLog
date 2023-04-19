

let myChart = document.getElementById('myChart').getContext('2d');

let massPopChart= new Chart(myChart,{
    type:'bar',
    data:{
        labels:['X1','X2','X3','X4','X5','X6'],
        datasets:[{
            label:'Dane1',
            data:[
                1203,
                1234,
                5555,
                14213,
                123,
                9944
            ]
        }]
    },
    options:{}
});

