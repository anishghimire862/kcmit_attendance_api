module.exports = {
    validateEmptyString: function(req, res, next) {
        if(Object.entries(req.body).length == 0) {
            res.status(500)
        }
        next();
    }
}