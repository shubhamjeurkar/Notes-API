require('dotenv').config();
// require('express-async-errors');
const express = require('express');

const app = express();
const helmet = require('helmet');
const cors = require('cors');
const rateLimiter = require('express-rate-limit');

const connectDB = require('./db/connect');

const authRouter = require('./routes/auth');
const noteRouter = require('./routes/note');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authenticateUser = require('./middleware/authentication');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));


app.set('trust proxy', 1);
app.use(rateLimiter({
 windowMs: 15 * 60 * 1000, //15 minutes
 max: 100 // limit each IP to 100 requests per windowMS
}));
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/notes', authenticateUser, noteRouter);

app.get('/', (req, res) => {
 res.status(200).redirect('/api-docs');
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
