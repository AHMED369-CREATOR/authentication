const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require('config')
const secret = config.get('secret')



const isAuth = async (req,res,next) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, secret);
        const user = await User.findById(decoded.id).select("-password");
        if (!user) return res.status(400).json([{ msg:"unauthorized" }]);
        else {
            req.user = user;
            next();
        }
    } catch (error) {
        res.send( error.message);
        
    }

};
module.exports = isAuth;