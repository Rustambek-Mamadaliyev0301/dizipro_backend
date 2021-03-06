module.exports.customError = class customError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}

module.exports.errorHandleMiddleware = function errorHandleMiddleware(
    error, req, res, next
) {
    res.status(error.code || 500).json({
        ok: false,
        message: error.message || "Internal Server Error",
    })
}