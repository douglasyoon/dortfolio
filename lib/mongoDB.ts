import { MongoClient } from 'mongodb';
import { MONGODB_URL, DB_NAME } from './constant';

const mongoDB = async (collectionName: string) => {
  const client = await MongoClient.connect(MONGODB_URL);
  const db = client.db(DB_NAME);

  return db.collection(collectionName);
};

export default mongoDB;
