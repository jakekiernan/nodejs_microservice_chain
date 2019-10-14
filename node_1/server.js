const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res)=>{
  console.log(`Recieved on first node: ${JSON.stringify(req.body)}\n`);
  const reqUpper = {
    firstName: req.body.firstName.toUpperCase(),
    lastName: req.body.lastName.toUpperCase()
  }
  axios.post('http://node_2:1234', reqUpper)
  .then(response => {
    res.send(response.data)
  })
  .catch(error => {
    console.log(error);
  });
})

app.listen(1234, () => console.log("node_1 is listening on port 1234"));
