const express = require("express");
const bodyparser= require("body-parser");
const date= require(__dirname +"/date.js");


const app = express();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
var items = ["Buy Foods"
,"Cook Foods"
,"Eat Foods"];
var workItems = [];
app.get("/", function(req, res)
{
  let day = date.getDay();
res.render("list", {listTitle: day, newit: items});

});
app.post("/", function(req, res)
{ console.log(req.body);

  var item  = req.body.new;
  if(req.body.list=="Work")
{
  workItems.push(item);
  res.redirect("/work");
}
else{
  items.push(item);
  res.redirect("/");
}

});
app.get("/work", function(req, res)
{
res.render("list", {listTitle: "Work List", newit: workItems});

});
app.get("/about", function(req, res)
{
res.render("about");

});
app.listen(3000, function()
{
  console.log("server is up at 3000");
});
