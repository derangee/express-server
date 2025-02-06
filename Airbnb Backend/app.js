const express  = require('express');
const path = require('path')
const app = express();

const pathDir = require('./utils/path')
app.use(express.static(path.join(pathDir, 'public')))

app.set('view engine', 'ejs');
app.set('views', 'views');


const {hostRouter} = require('./routes/host-router')
const userRouter = require('./routes/user-router')

app.use(express.urlencoded({ extended: true })); 

app.use('/host', hostRouter)
app.use('/', userRouter)

app.use((req, res) => {
    console.log("404 malware", req.url, req.method);
    res.status(404).render('404')
});

PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})