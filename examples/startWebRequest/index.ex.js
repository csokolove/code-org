const startWebRequest = require('../../src/lib/startWebRequest');

getISS()

function getISS() {
    startWebRequest('http://api.open-notify.org/iss-now.json', function(status, type, content) {
      console.log(content);
      var jsonContent = JSON.parse(content);
      var lat = jsonContent.iss_position.latitude;
      var lon = jsonContent.iss_position.longitude;
      
      console.log('Location: ' + lat + '° N, ' + lon + '° E as of ' + jsonContent.timestamp);
    });
    setTimeout(getISS, 3000);
}