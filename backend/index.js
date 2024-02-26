
const connectToMongo = require("./db");
const cors = require('cors');

connectToMongo();




const express = require('express')
const app = express()
app.use(cors({
  origin: 'https://my-notes-app-mern-project.vercel.app',
}));
const port = process.env.PORT

app.use(express.json());
// Available routes 

app.use('/api/auth', require("./routes/auth"));
app.use('/api/notes', require("./routes/notes"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})