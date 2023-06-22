const express = require("express");
const ViteExpress = require("vite-express");
const { Sequelize } = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize(process.env.CONNECTION_STRING)

const bcrypt = require('bcrypt')

console.log("CONNECT", process.env.CONNECTION_STRING)

const app = express();
app.use(express.json())

const users = [
  {
    name: 'Philip',
    password: 'Post1'
  },
  {
    name: 'Sveta',
    password: 'Post2'
  }
]

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});


app.get("/menuitems", (req, res) => {
  res.json(users)
  console.log("Request received");
  //console.log("Request received",res);
})

app.post('/users', (req, res) => {
  const user = [...users, { name: req.body.name, password: req.body.password }]
  //users.push(users)
  console.log(users)
  res.json(user)

})

app.post('/api/signup', async (req, res) => {
  let hashedPassword = ''
  try {
    
    hashedPassword = await bcrypt.hash(req.body.password, 10)
    
    let passwrd = 'Slozin'

    console.log("RECEIVED FROM FRONTEND", req.body.username, hashedPassword)
   
  }
  catch {
    res.status(500)
  }

  //-- INSERTING INTO DB

  sequelize.query(`
    
  insert into store_users (user_name, user_password)
  values ('${req.body.username}','${hashedPassword}');

`).then(() => {
    console.log('User info iserteD !')
    //res.json('SEEDED !!')
  })
 
  res.status(200).send(req.body);

  //-- END INSERTING TO DB



})


app.post('/api/login', (req, res) => {

  console.log("LOGIN FROM FE",req.body.username)
  sequelize.query(`
  
  select user_password from store_users where user_name = '${req.body.username}'

`).then((dbRes) => {
    console.log('PASS',dbRes[0])
    res.status(200).send(dbRes[0])
  })

})






ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);


