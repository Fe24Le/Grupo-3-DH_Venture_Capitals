const express = require("express")
const path = require("path")

const app = express()

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath))

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Corriendo puerto ${port}`));

app.use('/',(req,res) => {res.status(200).send('Api Funciona Correctamente')});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"))
})

app.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'))
})

app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.get("/productDetail.html", (req, res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
})

app.get("/productCar.html", (req, res) => {
    res.sendFile(path.join(__dirname, './views/productCar.html'))
})


