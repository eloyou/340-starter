const errorCont = {}

errorCont.error500 = async function(req, res, next) {
    const err = new  Error("Intentional Server Error")
    err.status = 500
    err.message = "Intentional Server Error"

    next(err)
    
}

module.exports = errorCont