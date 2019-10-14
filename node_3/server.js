const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res)=>{
  console.log(`Recieved on third node: ${JSON.stringify(req.body)}\n`);
  const reqInitial = {
    firstName: req.body.firstName.charAt(0).toUpperCase() + req.body.firstName.slice(1),
    lastName: req.body.lastName.charAt(0).toUpperCase() + req.body.lastName.slice(1),
  }
  res.send(reqInitial)
})

app.listen(3456, () => console.log("Listening on port 3456"));
