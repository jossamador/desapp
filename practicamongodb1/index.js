const { MongoClient } = require('mongodb');

const user = "josamador1789";
const password = "Hbra1205";

const uri = "mongodb+srv://josamador1789:Hbra1205@*@joss.r3dxu.mongodb.net/";
const client = new MongoClient(uri);

async function run() {
    try {
      await client.connect();
      const db = client.db('blog');
      const collection = db.collection('articulos');
  
      // Find the first document in the collection
      const first = await collection.findOne();
      console.log(first);
    } finally {
      // Close the database connection when finished or an error occurs
      await client.close();
    }
  }
  run().catch(console.error);