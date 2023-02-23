const express = require("express")
const fruit = express.Router()




// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

//FIND ALL musicians

fruit.get("/", async (req, res) => {
     let allFruit = await fruits;
     res.json(allFruit)
})

fruit.get("/:id", (req, res)=>{
    res.json(fruits[req.params.id-1])
    })


module.exports = fruit;