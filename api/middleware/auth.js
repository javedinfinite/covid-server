module.exports = (req, res, next) => {
    try {
        //Here we can authenticate the request
        console.log("passing authentication....")
        next();
 
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed.....',
            error: error
        });
    }
};