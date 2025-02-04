const express  = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); 


app.get('/', (req,res,next) =>{
    console.log("First middleware", req.path, req.method);
    res.send('<h1> Home </h1>')
})

app.get('/contact-us', (req,res,next) =>{
    console.log("Second middleware", req.path, req.method);

    res.send(`
        <h1> Enter details </h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="home" placeholder="Enter the name of the home"/>
            <input type="text" name="price" placeholder="Enter the price of the home"/>
            <input type="submit"/>
        </form>  `)
})

app.post('/contact-us', (req,res,next)=>{
    console.log(req.body);
    res.send('<h1> Home details received </h1>')
})

app.use('/', (req,res,next) =>{
    console.log("First middleware", req.path, req.method);
    res.send('<h1> Error 404! Page not found. </h1>')
})

PORT = 5005;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})