
// error middleware
const errorHandler = (err, req, res, next) => {

    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error'
 res.status(500).json({
        success:false, 
        message
       })
}

module.exports = errorHandler