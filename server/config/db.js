const mongoose = require("mongoose");

const ATLAS_HOSTS = [
  "ac-w2s0xiq-shard-00-00.3ciokta.mongodb.net:27017",
  "ac-w2s0xiq-shard-00-01.3ciokta.mongodb.net:27017",
  "ac-w2s0xiq-shard-00-02.3ciokta.mongodb.net:27017",
].join(",");

const getConnectionUri = () => {
  const uri = process.env.MONGO_URI;

  if (!uri?.includes("@cluster0.3ciokta.mongodb.net")) {
    return uri;
  }

  const credentialsAndPath = uri.replace("mongodb+srv://", "");
  const [credentials, hostAndPath] = credentialsAndPath.split("@");
  const databaseAndOptions = hostAndPath.slice(hostAndPath.indexOf("/") + 1);
  const [database, query = ""] = databaseAndOptions.split("?");
  const options = new URLSearchParams(query);

  options.set("authSource", "admin");
  options.set("replicaSet", "atlas-e46xi9-shard-0");
  options.set("tls", "true");

  return `mongodb://${credentials}@${ATLAS_HOSTS}/${database}?${options}`;
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(getConnectionUri(), {
      serverSelectionTimeoutMS: 10_000,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Error: ${error.message}`);
    console.log("Retrying MongoDB connection in 10 seconds...");
    setTimeout(connectDB, 10_000);
  }
};

module.exports = connectDB;
