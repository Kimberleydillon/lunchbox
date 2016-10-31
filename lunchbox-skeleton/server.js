"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Twilio Credentials 
const accountSid = 'AC7011efdc779e50376cf818a70aff0736'; 
const authToken = '760e6cf8a2c4892843b530c19ad398fe'; 
   
  //require the Twilio module and create a REST client 
const twilio = require('twilio')(accountSid, authToken); 

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));


// Home page
app.get("/", (req, res) => {
  console.log("meal");
  res.render("index.ejs");
});


app.get("/orders/new", function(req,res){

  let templateVars = { pValue: req.body.name };

// res.render("custConfirm.ejs", templateVars);
res.render("custConfirm.ejs");

});

//////OWNERS ORDER CONFIRM PAGE

app.get("/orders", function(req,res){
  //to do - GET orders from database 
  var orders = [
    {
      name_cust: "linley", 
      phone_num: "+2508935747", 
      meal_id: "meat"
    },
    {
      name_cust: "Nick", 
      phone_num: "+2509208221", 
      meal_id: "veggie"
    }
  ]

  res.render("orderConfirm.ejs", { orders: orders })
});
////SENDING INFORMATION TO CUSTOMER CONFIMATION, CUST REDIRECT TO custconfirm

app.post("/orders/new", function(req,res){
  console.log(req.body);

  var to = req.body.phone_num;
  var cName = req.body.name_cust;
  var mealID = req.body.meal_id;

    twilio.messages.create({ 
        to: to, 
        from: "+17784001638 ", 
        body: "Hi " + cName + ", your order will be ready in 30 minutes!", 
    }, function(err, message) { 
        console.log(message); 
        console.error(err)
    });

  knex('order_lunch').insert({
    name_cust: cName,
    phone_num: to,
    meal_id: mealID,
    completion: false,
  })

  res.render("custConfirm.ejs");
  // res.json(req.body)
});

//POSTING INFO TO orderConfirm page

// app.get("/orders/new",function(req,res){
//   console.log(req.body);
//   res.render('orderConfirm.ejs')
// });

//endpoint for orders page when click complete
app.post("/orders/:id/complete", function(req,res){
  //to be done after database is set up
  //1) to do update completion on order status
  //2) to do: get order from database by id in url
  twilio.messages.create({ 
      to: "+12508935747", 
      from: "+17784001638 ", 
      body: "Your order is ready for pick up", 
  }, function(err, message) { 
      console.log(message); 
  });


});


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
