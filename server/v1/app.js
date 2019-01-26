import express from 'express';
import bodyParser from 'body-parser';

import router from './routes/router';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use('/api/v1', router);

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {
      status: 404,
    },
  });
});

module.exports = server;
