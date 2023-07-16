const pg = require('pg')
 
exports.handler = async function(event, context) {

    var conString = "postgres://lmobexnt:L9eE_s0jAb0mBJPGULGJQbk6Qno27Qiw@satao.db.elephantsql.com/lmobexnt" //Can be found in the Details page
    var client = new pg.Client(conString);

    try {
        await client.connect();
        console.log('Connected to the database');

        const result = await client.query('SELECT * FROM geophone_data ORDER BY date DESC, time DESC LIMIT 10');
        console.log("Hello! 222")
        console.log(result.rows);

        return {
            statusCode: 200,
            body: JSON.stringify(result.rows)
        };
    } catch (err) {
        console.error('Error running the query', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error running the query' })
        };
    } finally {
        client.end();
    }
    
}

