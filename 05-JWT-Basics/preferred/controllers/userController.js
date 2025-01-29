const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const logon = async (req, res) => {
    const { name, password} = req.body;

    if (!name || !password) {
        return res.status(400).json({ message: 'Please provide name and password!' });
    }

    const id = new Date().getDate();

    const token = jwt.sign({ id, name }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });

    res.status(200).json({ token });
};

const hello = async (req, res) => {
    res.status(200).json({ message: `Hello ${req.user.name}!` })
};

module.exports = {
    logon, hello
};