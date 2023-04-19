

let temperature = document.getElementById('temperature').getContext('2d');

let massPopChart= new Chart(temperature,{
    type:'line',
    data:{
        labels:['6:00','9:00','12:00','15:00','18:00','21:00'],
        datasets:[{
            label:'Temperature',
            data:[
                12.5,
                15,
                16,
                15.5,
                13.5,
                10
            ],
            backgroundColor: "green",
            borderColor: "green"
        }]
    },
    options: {
        scales: {
            y: {
                min: -30,
                max: 40,
                ticks: {
                    callback: function(value, index, values) {
                      return value + " C";
                    }
                  }
            }
        },
        //color: "green"
    }
});


let humidity = document.getElementById('humidity').getContext('2d');

let massPopChart1= new Chart(humidity,{
    type:'line',
    data:{
        labels:['6:00','9:00','12:00','15:00','18:00','21:00'],
        datasets:[{
            label:'Humidity',
            data:[
                76,
                79,
                82,
                84,
                80,
                81
            ],
            backgroundColor: "orange",
            borderColor: "orange"
        }]
    },
    options: {
        scales: {
            y: {
                min: 0,
                max: 100,
                ticks: {
                    callback: function(value, index, values) {
                      return value + " %";
                    }
                  }
            }
        }
    }
});

let pressure = document.getElementById('pressure').getContext('2d');

let massPopChart2= new Chart(pressure,{
    type:'line',
    data:{
        labels:['6:00','9:00','12:00','15:00','18:00','21:00'],
        datasets:[{
            label:'Pressure',
            data:[
                990,
                989,
                986,
                988,
                987,
                990
            ],
            backgroundColor: "blue",
            borderColor: "blue"
        }]
    },
    options: {
        scales: {
            y: {
                min: 500,
                max: 1300,
                ticks: {
                    callback: function(value, index, values) {
                      return value + " hPa";
                    }
                  }
            }

        },
    }
});


document.getElementById("btn-temperature").addEventListener("click", function() {
    document.getElementById("temperature").style.display = "inline-block";
    document.getElementById("humidity").style.display = "none";
    document.getElementById("pressure").style.display = "none";
});

document.getElementById("btn-humidity").addEventListener("click", function() {
    document.getElementById("temperature").style.display = "none";
    document.getElementById("humidity").style.display = "inline-block";
    document.getElementById("pressure").style.display = "none";
});

document.getElementById("btn-pressure").addEventListener("click", function() {
    document.getElementById("temperature").style.display = "none";
    document.getElementById("humidity").style.display = "none";
    document.getElementById("pressure").style.display = "inline-block";
});

