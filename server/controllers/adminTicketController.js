const db = require('../dbModel');

const adminTicketController = {};


//controller to get all the tickets from the db
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
            message: { err: 'Error in getting tickets', err }
        })
    }
}




//controller to update the response from the admin in the db
adminTicketController.sendResponse = async (req, res, next) => {
    const { email, response, id } = req.body
    const values = [response, id]
    try {
        const ticketQuery = 'UPDATE tickets SET response=$1 WHERE id=$2'
        data = await db.query(ticketQuery, values)
        console.log(`to: ${email} body: ${response}`)
        res.locals.response = response;
        next();
    }
    catch {
        return next({
            message: { err: 'Error in changing status', err }
        })
    }
}

//controller to change the status of the ticket in the db
adminTicketController.changeStatus = async (req, res, next) => {
    const { id, status } = req.body
    const values = [status, id]
    try {
        const ticketQuery = 'UPDATE tickets SET status=$1 WHERE id=$2'
        data = await db.query(ticketQuery, values)
        next()
    }
    catch {
        return next({
            message: { err: 'Error in changing status', err }
        })
    }
}

module.exports = adminTicketController;