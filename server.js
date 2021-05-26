const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(express.json());

//initial route
app.get("/", (req, res) => {
  res.send("<h1>Api is ready!!!</h1");
});
//route
app.use(require("./View/companyRoute"));
app.use(require("./View/employeeRoute"));

//database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("connected with db"))
  .catch(e => console.log("Error in db connect", e));

//listen post
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
