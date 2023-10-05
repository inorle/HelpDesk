const db = require('./server/dbModel');

const newticketController = {};


newTicketController.newTicket = async (req, res, next) => {
    const { name, email, description } = req.body
    const status = 'new'
    const ticketValues = [name, email, description, status]

    const ticketQuery = 'INSERT INTO tickets (name, email, description, status) VALUES ($1, $2, $3, $4)'
    try {
        result = await db.query(ticketQuery, ticketValues);
        console.log(result)
        return next()
    }
    catch (err) {
        return next({
            message: { err: 'Problem creating new ticket', err }
        })
    }
}


module.exports = newTicketController;
