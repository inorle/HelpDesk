const db = require('../dbModel');

const adminTicketController = {};


//get all tickets
adminTicketController.getTickets = async (req, res, next) => {
    const ticketQuery = `SELECT * FROM tickets`
    try {
        data = await db.query(ticketQuery)
        // console.log(data.rows)
        res.locals.tickets = data.rows
        next()
    }
    catch {
        return next({
            message: { err: "Error in getting tickets", err }
        })
    }
}


//be able to respond to the tickets


//change status of the ticket

module.exports = adminTicketController;