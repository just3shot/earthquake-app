const express = require('express');
const pg = require('pg')

const app = express();
const cors = require('cors');
const port = 3000;

var conString = "postgres://lmobexnt:L9eE_s0jAb0mBJPGULGJQbk6Qno27Qiw@satao.db.elephantsql.com/lmobexnt" //Can be found in the Details page
var client = new pg.Client(conString);

// Enable CORS middleware
app.use(cors());

// Connect to the PostgreSQL database
client.connect((err) => {
    if (err) {
        console.error('could not connect to postgres', err);
    } else {
        console.log('Connected to the database');
    }
});


app.get('/api/data', (req, res) => {
    client.query('SELECT * FROM geophone_data', (err, result) => {
        if (err) {
            console.error('error running query', err);
            return res.status(500).json({ error: 'Error running the query' });
        }
        console.log(result.rows[0])
        res.json(result.rows);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});