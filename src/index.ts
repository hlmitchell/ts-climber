import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';

config();
const app = express();
const port = 3000;

const y: string = 'hey';


app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) console.error(err);
  else console.log('Connected to db...');
});

app.listen(port, (err) => {
  if (err) console.error(err);
  else console.log(`server running on ${port}...`);
});