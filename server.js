const express = require("express");
require("dotenv").config();
const cors = require("cors");
const firebaseModul = require("firebase/app");
const userRouter = require("./Routers/userRouter.jsx");
//const firebase = require("firebase/database");

/* firebase
  .connect(process.env.DATABASE_URL || "")
  .then(() => {
    console.log("Connected to Firebase");
  })
  .catch((err) => {
    console.log(err.message);
  }); */

//test
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use("/api/seed", seedRouter);
//app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
//app.use("/api/orders", orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server in port `, process.env.PORT);
});

module.exports = app;
