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
  axios.post('http://node_3:1234', reqLower)
  .then(response => {
    res.send(response.data)
  })
  .catch(error => {
    console.log(error);
  });
})

app.listen(1234, () => console.log("node_2 is listening on port 1234"));
