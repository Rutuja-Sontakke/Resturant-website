const errorHandler = (req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message:err.message || "Internal Server Error",
        error: err.error || [],
        stack: 
        process.env.NODE_ENV === "development"
        ?err.stack
        :undefined,
    })
}

export default errorHandler;