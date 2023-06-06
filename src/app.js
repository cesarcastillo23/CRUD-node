const express=require('express')
const exphbs=require('express-handlebars')
const indexRoutes=require('../src/routes/index.routes')
const path=require('path')
const { create } = require('express-handlebars');
const morgan=require('morgan')



const app = express();

app.set('views', path.join(__dirname, './views'));

var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    defaultPartials: "navbar",
    extname: ".hbs",
})

app.engine(".hbs",hbs.engine);
app.set("view engine", ".hbs");
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(morgan('dev'))

app.use(indexRoutes);
// public fails
app.use(express.static(path.join(__dirname,'public')))

module.exports=app;






