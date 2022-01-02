const express = require("express")
const mongoose = require("mongoose")
const BodyParser = require("body-parser")
const Morgan = require("morgan")
const Cors = require("cors")
require("dotenv").config()

// swaggerUI
const swaggerUI = require("swagger-ui-express")
const Yaml = require("yamljs")
const swaggerDocument = Yaml.load("./swagger.yaml")

const { readdirSync } = require("fs")
// middlewares
const App = express()

App.use(Morgan('dev'))
App.use(Cors())


// routemiddleware
readdirSync("./routes").map((r)=>App.use("/api",require("./routes/" + r)))

// Database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB Connection Failed", err))


// routes



// Server
const Port = process.env.PORT
App.listen(Port, () => {
    console.log(`Server is up at ${Port}`)
})