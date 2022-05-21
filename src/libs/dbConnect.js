const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    "mongodb+srv://juan:campanitas21@clustercertus.ckyxs.mongodb.net/?retryWrites=true&w=majority";
/* const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log(collection); 
    client.close();
}); */

let client;

if (!client) {
    try {
        client = new MongoClient(uri);
    } catch (error) {
        console.log(error);
    }
}

module.exports = client