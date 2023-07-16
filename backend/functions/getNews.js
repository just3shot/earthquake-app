const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('d1f56f78ac624bdc800e70fde7e76173');

exports.handler = async function (event, context) {
    try {
        const response = await newsapi.v2.everything({
            qInTitle: 'earthquake magnitude',
            language: 'en',
            pageSize: 10,
            sortBy: 'publishedAt'
        });

        console.log(response.articles);
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Something went wrong!' })
        };
    }

}