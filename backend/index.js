
const connectToMongo = require("./db");
const cors = require('cors');

connectToMongo();




const express = require('express')
const app = express()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
const port = process.env.PORT

app.use(express.json());
// Available routes 

app.use('/api/auth', require("./routes/auth"));
app.use('/api/notes', require("./routes/notes"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})