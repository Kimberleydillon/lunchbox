"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/orders", (req, res) => {
    knex
      .select("*")
      .from("meal")
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}


//app.get("/orders", function(req,res){
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