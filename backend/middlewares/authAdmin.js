import jwt from "jsonwebtoken";

// Admin Authendication Middleware
const authAdmin = async (req, res, next) => {

    const { atoken} = req.headers;
    if (!atoken) {
        return res.json({
            success: false,
            message: "Not Authorized Login Again"
        })
    };

    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
         return res.json({
            success: false,
            message: "Not Authorized Login Again"
        })
    };

    next();
}

export default authAdmin