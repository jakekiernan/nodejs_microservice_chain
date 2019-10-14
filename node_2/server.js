const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res)=>{
  console.log(`Recieved on second node: ${JSON.stringify(req.body)}\n`);
  const reqLower = {
    firstName: req.body.firstName.toLowerCase(),
    lastName: req.body.lastName.toLowerCase()
  }
  axios.post('http://localhost:3456', reqLower)
  .then(response => {
    res.send(response.data)
  })
  .catch(error => {
    console.log(error);
  });
})

app.listen(2345, () => console.log("Listening on port 2345"));
