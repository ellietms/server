const express =  require('express');
const mongodb = require('mongodb');
const router = express.Router();
const URI = process.env.URI;
const client = new mongodb.MongoClient(URI)
const app = express();
router.get("/about", (req,res) => {
    res.send("ABOUT PAGE");
})

router.get("/chargepoint_manufacturer", (req,res) => {
    client.connect(() => {
        const db = client.db("EVHS");
        const collection = db.collection("chargepoint_manufacturer");
        collection.find().toArray((err,chargepoint_manufacturer) => {
            if(err){
                res.send("ERROR:", err);
            }
            else{
                res.json(chargepoint_manufacturer);
            }
            client.close();
        })
    })
})


router.get("/chargepoint_model", (req,res) => {
    client.connect(() => {
        const db = client.db("EVHS");
        const collection = db.collection("chargepoint_model");
        collection.find().toArray((err, chargePoint_model)=> {
            if(err){
                res.send("ERROR:", err)
            }
            else{
                res.json(chargePoint_model);
            }
            client.close();
        })
    })

})



module.exports = router