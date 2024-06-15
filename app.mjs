import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/water', (req, res) => {
  console.log(`${req.ip} is asking for water`);
  res.send('Here is the water!');
});

app.get('/food', (req, res) => {
  console.log(`${req.ip} is asking for food`);
  res.send('Here is your food!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
