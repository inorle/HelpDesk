const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;
const db = require('./dbModel');


app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));


app.get('/api', (req, res) => {
    const dbtest = `SELECT * FROM tickets`
    db.query(dbtest).then(data=> console.log(data.rows));
    return res.status(200).json({ "Hello": "world" })
})

app.use((err, req, res, next) => {
    console.log('ERR', err);
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => console.log(`Listening on port 3000.`));
