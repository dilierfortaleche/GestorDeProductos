const express = require('express');
const connectDB = require('./src/config/db');
const UserRoutes = require('./src/routes/UserRouter');
const ProductRoutes = require('./src/routes/productRoutes');
const CategoryRoutes = require('./src/routes/categoryRoutes');
const app = express();
const cors = require('cors');

require('dotenv').config();
connectDB();

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use('/api/User', UserRoutes);
app.use('/api/Product', ProductRoutes);
app.use('/api/Category', CategoryRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server  corriendo en http://localhost:${PORT}`);
});