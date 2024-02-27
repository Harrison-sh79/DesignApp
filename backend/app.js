const express = require("express");

const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: "AKIA2U2ND5YXX44WWMP4",
  secretAccessKey: "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",
  region: "us-east-2",
});

const db = require("./config/database");
const { verifyCode } = require("./controllers/authController");
db.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

const app = express();
app.use(express.json());

app.post("/verify-code", verifyCode);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
