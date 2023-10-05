const db = require('../dbModel');

const userController = {};


userController.verifyUser = async (req, res, next) => {
    const {username, password} = req.body
    try {
        const userQuery = `SELECT * FROM users WHERE username = $1 AND password = $2`
        result = await db.query(userQuery, [username, password]);
        res.locals.userid = result.rows[0].id
        next()
    }
    catch (err) {
        return next({
            message: { err: 'Problem Verifying User', err }
        })
    }
}


module.exports = userController;