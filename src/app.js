const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port =process.env.PORT || 8000;

// for static path
const staticPath = path.join(__dirname ,"../public");
const templatePath = path.join(__dirname ,"../templates/views");
const partialsPath = path.join(__dirname ,"../templates/partials");
// now use handlebars
app.set('view engine' , 'hbs');
// change view to template
app.set('views' , templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("/about" , (req,res) => {
    res.render('about');
});
app.get("/weather" , (req,res) => {
    res.render('weather');
});
app.get("*" , (req,res) => {
    res.render('404error');
});


app.get("/" , (req,res) => {
    res.send(`Hello dynamic wwebsite`);
});

// withot hbs routes will be like this
// app.get("/about" , (req,res) => {
//     res.send(`Hello about wwebsite`);
// });
// app.get("/contact" , (req,res) => {
//     res.send(`Hello contact wwebsite`);
// });

// now using hbs route willbe like this







app.listen(port, () => {
    console.log(`listening to the port at port ${port}`);
});