var http = require('http');

const monMap = new Map();
monMap.set("Jan", 1);
monMap.set("Feb", 2);
monMap.set("Mar", 3);
monMap.set("Apr", 4);
monMap.set("May", 5);
monMap.set("Jun", 6);
monMap.set("Jul", 7);
monMap.set("Aug", 8);
monMap.set("Sep", 9);
monMap.set("Oct", 10);
monMap.set("Nov", 11);
monMap.set("Dec", 12);


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(getOutput());
  res.end();
}).listen(8080); 


function getOutput(){
    let splitData = Date().split(" ");
    return "UHRZEIT: " + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12:false}) + ", TAG: " + splitData[2] + ", MONAT: " + monMap.get(splitData[1]) + ", JAHR: " + splitData[3] + "\r\n<br\>" + splitData[4];
}