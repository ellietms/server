const express =  require('express');
const mongodb = require('mongodb');
const router = express.Router();
const URI = process.env.URI;
const client = new mongodb.MongoClient(URI)
const app = express();
router.get("/about", (req,res) => {
    res.send("ABOUT PAGE");
})

router.get("/chargepoint", (req,res) => {
    client.connect(() => {
        const db = client.db("EVHS");
        const collection = db.collection("chargepoint_manufacturer");
        collection.find().toArray((err,chargePoint) => {
            if(err){
                res.send("ERROR:", err);
            }
            else{
                res.json(chargePoint);
            }
            client.close();
        })
    })
})




module.exports = router