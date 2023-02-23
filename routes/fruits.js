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

//get all

fruit.get("/", async (req, res) => {
     let allFruit = await fruits;
     res.json(allFruit)
})

//get fruit by id

fruit.get("/:id", (req, res)=>{
    res.json(fruits[req.params.id-1])
    })

// post

fruit.post("/", async (req, res) => {
    try {
      // const userObj = req.body;
      const createFruit = await fruits.push(req.body);
  
      res.status(200).send({ msg: "Success", createFruit });
    } catch (error) {
      res.status(500).send({ err: error.message });
    }
  });

  // PUT update - using where req.body - not confident this will work *****
fruit.put("/", async (req, res) => {
    try {
      const updatedFruit = await fruits.update(req.body.update, {
        where: req.body.where,
      });
      if (updatedFruit[0] > 0) {
        res.status(200).send({ msg: "Success", updatedFruit});
      } else {
        throw new Error("No update made");
      }
    } catch (error) {
      res.status(500).send({ err: error.message });
    }
  });


module.exports = fruit;