var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tableArray = [
    {
      name: "chris",
      phoneNumber: 111111111,
      email: "chris@mail.com",
      tableId: 1
    }
]

var waitingArray = [
    {
      name: "chris",
      phoneNumber: 111111111,
      email: "chris@mail.com",
      waitingId: 1  
    }
]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/makereservations", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.post("/api/makereservations", function(req, res) {
    var newCustomer = req.body
    console.log(newCustomer); 
    tableArray.push(newCustomer);
    res.json(newCustomer);
  });

  app.get("/api/makereservations", function(req, res) {
   return res.json(newCustomer);
  });

  app.get("/api/tables", function(req, res) {
    return res.json(tableArray);
  });

  app.get("/api/tables", function(req, res) {
    return res.json(waitingArray);
  });

  app.post("/api/tables", function(req, res){
    if (tableArray.length < 3) {
        tableArray.push(req.body) 
        res.json(true)
    } else {
        waitingArray.push(req.body)
        res.json(false)
    }
  })
  app.listen(PORT, function(){
      console.log("App listening on PORT" + PORT);
  })