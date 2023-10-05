const db = require('../dbModel');

const newTicketController = {};

//controller to add new Ticket to the db
newTicketController.newTicket = async (req, res, next) => {
    const { name, email, description } = req.body
    const status = 'new'
    const response = ''
    const ticketValues = [name, email, description, status, response]

    const ticketQuery = 'INSERT INTO tickets (name, email, description, status, response) VALUES ($1, $2, $3, $4, $5)'
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
