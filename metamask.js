const express = require("express");
const axios = require("axios");
const path = require("path");

var bodyParser = require("body-parser");
userAdress = "";
apiAddress = "http://13.56.163.182:8000/transfer-token";
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
    const {userAddress} = req.body; // we received this from the client
    console.log("got address", userAddress);
    res.status(200).end();
    axios.post(apiAddress, {
        ticker: "HAMBURGER",
        amount: 10,
        to: userAddress,
        hookUrl: "done",
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
});





app.listen(5000);