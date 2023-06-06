
const app=require('./app')
const {PORT} =require('../src/config')
require('./database')

app.listen(PORT)
console.log('Conectando app',PORT);


