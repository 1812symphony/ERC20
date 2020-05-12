const express = require("express");
const axios = require("axios");
const path = require("path");

var bodyParser = require("body-parser");

var apiAddress = "http://13.56.163.182:8000/transfer-token";
const app = express();

app.use("/", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// when we get a request, we send the client. This assumes homepage.html is in the same directory (__dirname) as this file
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "homepage.html"));
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/transfer-token", (req, res) => {
    const { userAddress } = req.body; // we received this from the client
    console.log("got address", userAddress);
    return res.status(200).end();
    axios.post(apiAddress, {
        // we request that the adventure API send a token to this user
        to: userAddress,
        amount: 10,
        ticker: "HAMBURGER",
        hookUrl: "http://localhost:5000", // give any value since we're localhost and not live, just dont give empty value
    });
});

app.listen(5000);