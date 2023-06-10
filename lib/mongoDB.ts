import { MongoClient } from 'mongodb';

const mongoDB = async (collectionName: string) => {
  const client = await MongoClient.connect(
    process.env.NEXT_APP_MONGODB_URL ?? ''
  );
  const db = client.db(process.env.NEXT_APP_DB_NAME);

  return db.collection(collectionName);
};

export default mongoDB;
