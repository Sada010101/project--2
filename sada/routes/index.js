var express = require('express');
var router = express.Router();
var fs=require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/infoUser", function(req,res){
  fs.appendFileSync("user.txt", req.query.imia+" "+req.query.fam+" "+req.query.age+",")

  res.render("users.hbs", {})
})

router.get("/getUsers", function(req,res){
  let textFromTxt=fs.readFileSync("user.txt", "utf8");
  console.log(textFromTxt);
  res.render("userList.hbs", {
    users:textFromTxt
  })
})

module.exports = router;


