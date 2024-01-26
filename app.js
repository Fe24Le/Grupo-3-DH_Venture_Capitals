const express = require("express")
const path = require("path")

const app = express()

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath))

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Corriendo puerto ${port}`));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/registro.html'))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
})

app.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productDetail.html'))
})

app.get("productCar", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productCar.html'))
})


