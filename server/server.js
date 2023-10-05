const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const newTicketController = require('./controllers/newTicketController')
const adminTicketController = require('./controllers/adminTicketController')


app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ credentials: true, methods: ['POST', 'GET', 'PATCH'], origin: '*' }));

app.post('/api/newticket', newTicketController.newTicket, (req, res) => {
    return res.status(201).json('successfully added new ticket')
})
app.get('/api/alltickets', adminTicketController.getTickets, (req, res) => {
    return res.status(200).json(res.locals.tickets)
})
app.patch('/api/status', adminTicketController.changeStatus, (req, res) => {
  return res.status(200).json('changed status')
})

app.patch('/api/response', adminTicketController.sendResponse, (req, res) => {
  return res.status(200).json(res.locals.response)
})

app.use(express.static(path.join(__dirname, '../build')));

//send static html w client side routing as well
app.get("/*",  (req, res, ) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'), function (err) {
    if (err) {
      console.log(err);
    }
  });
});

//error handling
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



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
