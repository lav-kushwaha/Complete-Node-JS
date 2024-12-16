const adminAuth = (req, res, next) => {
    console.log("Admin auth is being checked!!");

    const token = "lav"; // Hardcoded Authorization Token for simplicity

    // Check if the token matches the expected value
    const isAdminAuthorized = token === "lav";

    if (!isAdminAuthorized) {
        return res.status(401).send("Unauthorized request!!"); // If not authorized, return 401 status
    }
    next(); // If authorized, pass control to the next middleware or route handler
}

const userAuth = (req, res, next) => {
    console.log("User auth is being checked!!");

    const token = "lav"; // Hardcoded Authorization Token for simplicity

    // Check if the token matches the expected value
    const isAdminAuthorized = token === "lav";

    if (!isAdminAuthorized) {
        return res.status(401).send("Unauthorized request!!"); // If not authorized, return 401 status
    }
    next(); // If authorized, pass control to the next middleware or route handler
}

module.exports = {
    adminAuth,
    userAuth
}