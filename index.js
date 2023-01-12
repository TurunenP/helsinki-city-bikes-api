/**
 * 
 * Author :  Purity
 *  
 */

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

// routes



const app = express();

app.use(cors());

app.use(express.json());



app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Journey API' });
}
);




app.listen(PORT, () => {
    console.log('Journey ApI listening on port 3000!');
});