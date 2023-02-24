const express = require("express")
const app = express()
const port = 3000
const userRouter = require("./routes/users")
const fruitRouter = require("./routes/fruits")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/fruits", fruitRouter)
app.use("/users", userRouter)



// Express Routes




app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
