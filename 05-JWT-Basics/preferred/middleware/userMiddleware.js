const jwt = require('jsonwebtoken');
const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' })
    };

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { name: payload.name };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' })
    };

};

module.exports = authenticationMiddleware;