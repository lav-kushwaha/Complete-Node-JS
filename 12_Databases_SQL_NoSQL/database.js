const {MongoClient} = require("mongodb");

//connection url
const url = "mongodb+srv://lavkushwaha:<password>@lavdb.dfcx5.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld"; //database name

async function main() {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('user'); //document name

    //insertMany
    const data = {
        "name":"Lav kushwaha",
        "age":"20",
        "gender":"male",
    }
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    //Read
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    //update
    const updateResult = await collection.updateOne({"name":"Lav Kushwaha" }, { $set: { "name": "Lav" } });
    console.log('Updated documents =>', updateResult);

    return "done";   
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());
