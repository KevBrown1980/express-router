
const express = require("express")
const app = express();
const user = express.Router()

// List of Users//
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]


//get all

user.get("/", async (req, res) => {
    let allUsers = await users;
    res.json(allUsers)
})

// get by id

user.get("/:id", (req, res)=>{
    res.json(users[req.params.id-1])
    })


    // post

    user.post("/", async (req, res) => {
        try {
          // const userObj = req.body;
          const createUser = await users.push(req.body);
      
          res.status(200).send({ msg: "Success", createUser });
        } catch (error) {
          res.status(500).send({ err: error.message });
        }
      });

// put

// PUT update - using where req.body - not confident this will work *****
user.put("/", async (req, res) => {
    try {
      const updatedUser = await users.update(req.body.update, {
        where: req.body.where,
      });
      if (updatedUser[0] > 0) {
        res.status(200).send({ msg: "Success", updatedUser});
      } else {
        throw new Error("No update made");
      }
    } catch (error) {
      res.status(500).send({ err: error.message });
    }
  });

  // DELETE musician by ID using try and catch //not confident this willl work
user.delete("/:id", async (req, res) => {
    try {
      // Cannot accept body
      const deletedUser = users.destroy([req.params.id-1])
  
      if (deletedUser[0] > 0) {
        res.status(200).send({ msg: "Success" });
      } else {
        throw new Error("Not deleted");
      }
    } catch (error) {
      res.status(500).send({ err: error.message });
    }
  });




module.exports = user;