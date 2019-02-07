import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './routes/router';

const app = express();

app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use(cors());

app.use('/api/v1', router);

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// catch 404
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Not found'
  });
});

export default server;
