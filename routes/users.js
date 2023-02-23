
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


//.findAll()

user.get("/", async (req, res) => {
    let allUsers = await users;
    res.json(allUsers)
})


user.get("/:id", (req, res)=>{
    res.json(users[req.params.id-1])
    })

module.exports = user;