require('dotenv').config();
// require('express-async-errors');
const express = require('express');

const app = express();

const connectDB = require('./db/connect');

const authRouter = require('./routes/auth');
const noteRouter = require('./routes/note');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authenticateUser = require('./middleware/authentication');



app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/notes', authenticateUser, noteRouter);

app.get('/', (req, res) => {
 res.send('Notes API')
})
const port = process.env.PORT || 5000;

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
 try {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => {
   console.log(`App is listening on port ${port}...`);
  })
 } catch (error) {
  console.log(error);
  
 }
}

start();
