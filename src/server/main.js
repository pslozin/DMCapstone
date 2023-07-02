const express = require("express");
const ViteExpress = require("vite-express");
const { Sequelize } = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize(process.env.CONNECTION_STRING)

const bcrypt = require('bcrypt');
const { Console } = require("console");

console.log("CONNECT", process.env.CONNECTION_STRING)

const app = express();
app.use(express.json())

// const users = [
//   {
//     name: 'Philip',
//     password: 'Post1'
//   },
//   {
//     name: 'Sveta',
//     password: 'Post2'
//   }
// ]

// app.get("/hello", (req, res) => {
//   res.send("Hello Vite + React!");
// });


// app.get("/menuitems", (req, res) => {
//   res.json(users)
//   console.log("Request received");
//   //console.log("Request received",res);
// })

// app.post('/users', (req, res) => {
//   const user = [...users, { name: req.body.name, password: req.body.password }]
//   //users.push(users)
//   console.log(users)
//   res.json(user)

// })

app.post('/api/signup', (req, res) => {
  //Veryfy for users already exist
  // select id from store_users where user_name = 'pslozin@gmil.com'
  sequelize.query(`
  select id from store_users where user_name = '${req.body.username}'

`).then(async (dbRes) => {
 
    if (dbRes[0].length != 0)
    {
      console.log('USER EXIST')
      res.send(dbRes[0])
    }
    else{
//----------
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

res.status(200).send('user registered');

//-- END INSERTING TO DB

    }
  })

})



//---------------------

app.post('/api/login', (req, res) => {

  console.log("LOGIN FROM FE", req.body)

  sequelize.query(`
  
  select user_password from store_users where user_name = '${req.body.username}'

`).then(async (dbRes) => {

    if (dbRes[0].length === 0) {
      res.send(dbRes[0])
    }
    else {

      let hashedPassword = dbRes[0][0].user_password
      if (await bcrypt.compare(req.body.password, hashedPassword)) {
        res.send('ok')
        console.log('SUCESS')
      }
      else {
        res.send('wrong password')
        console.log('NO SUCESS')
      }
    }
  })
})

app.post('/api/sendorder',(req,res)=>{

  sequelize.query(`
  
  insert into orders (id,email,total,items)
  values ('${req.body.date}','${req.body.email}','${req.body.total}','${req.body.items}')

`).then(res.send("ORDER PLACED"))

})




ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);


