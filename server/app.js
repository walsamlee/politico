import express from 'express';
import bodyParser from 'body-parser';

import authRouter from './routes/authRoute';
import router from './routes/router';
import voteRouter from './routes/voteRouter';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use('/auth', authRouter);
app.use('/api/v1', router);
app.use('/votes', voteRouter);

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

export default server;
