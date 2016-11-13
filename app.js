var express = require('express');
var url = require('url');
var app = express();

var port = process.env.PORT||3000
app.set('view engine', 'pug');
app.set('views', './views');

//options field in Intl.DateTimeFormat which specifies the date format
var dateFormat ={
  month:'long',
  day :'numeric',
  year: 'numeric'
}

// function to return the result.
function timeStampReturn(date){
  return {
    unix: Math.round(date.getTime()/1000),
    natural : new Intl.DateTimeFormat('en-US',dateFormat).format(date)
  }
}

//render the index page
app.get('/', function(req,res){
  res.render('index')
})

// display the index page
app.get('/:date',function (req, res) {
      var timeStamp;
      var parsedUrl = url.parse(req.url, true) //get url
      var urlExtract = parsedUrl.path.slice(1, parsedUrl.path.length); //remove '/' from the request url path
      if(urlExtract.match(/(^[0-9]*$)/g)){
        timeStamp = urlExtract * 1000; // convert to microsecond and type: number
      }
       else {
           timeStamp = parsedUrl.path.slice(1, parsedUrl.path.length).replace(/%20/g ,' '); // replace url encoded spaces(%20) into spaces
       }
      var date = new Date(timeStamp) // get the date from JS's Date object.
      res.writeHead(200,{"Content-Type":"application/json"});
      res.end(JSON.stringify(timeStampReturn(date))); // JSON response.
    }
  )
app.listen(port);
