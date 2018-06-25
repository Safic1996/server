const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
console.log('3400');
console.log('true');
console.log('ksksksksksk');
console.log('bin')

app.use(bodyParser.json())
app.get('/', function(request, response) {
    response.send('hello world world world');
})
app.post('/github', function(request, response){
    console.log(request.body);
    //response.send(request);
});    

app.listen(port, (err) => {
if (err) {
return console.log('something bad ', err)
}

console.log(`server is listening on ${port}`)
})
