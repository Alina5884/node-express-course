const express = require('express');
const router = express.Router();

const { logon, hello } = require('../controllers/userController');
const authenticationMiddleware = require('../middleware/userMiddleware');

router.route('/logon').post(logon);
router.route('/hello').get(authenticationMiddleware, hello);

module.exports = router;