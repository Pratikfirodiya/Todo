
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Yuvraj:Yuvraj@1898@cluster0.bm4y2z8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection1 = client.db("Todo").collection("Todos1");
  // perform actions on the collection object
  console.log(collection1.find());
  
  client.close();
});
