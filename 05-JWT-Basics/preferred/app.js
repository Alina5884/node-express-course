const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api/v1', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening port ${PORT}`));