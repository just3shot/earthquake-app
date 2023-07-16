import { Box, Card, CardActionArea, Container, List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'
import { getNews } from '../apis';

export default function NewsList() {

    const navigate = (url) => {
        window.open(url, '_blank');
    };
    /*
    // Set the query parameters for the request
    const apiKey = 'd1f56f78ac624bdc800e70fde7e76173';
    const query = 'earthquake magnitude';
    const language = 'en';
    const numOfArticlesShown = 10;
    const sortBy = 'publishedAt';

    const url = `https://newsapi.org/v2/everything?qInTitle=${query}&language=${language}&pageSize=${numOfArticlesShown}&sortBy=${sortBy}&apiKey=${apiKey}`
    */
    const [articles, setArticles] = React.useState([]);

    const getTimeAgo = (publishedAt) => {
        const currentTime = new Date();
        const newsTime = new Date(publishedAt);
        const timeDiff = Math.abs(currentTime - newsTime);
        const minutes = Math.floor(timeDiff / (1000 * 60));
        if (minutes < 60) {
            return `${minutes}m ago`;
        } else if (minutes < 1440) {
            const hours = Math.floor(minutes / 60);
            return `${hours}h ago`;
        } else {
            const days = Math.floor(minutes / 1440);
            return `${days}d ago`;
        }
    };
    /*
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                if (data.status === 'ok') {
                    setArticles(data.articles);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    */

    React.useEffect(() => {
        const getNewsAsync = async () => {
            try {
                const data = await getNews();
                console.log(data)
                if (data.status === 'ok') {
                    console.log(data);
                    setArticles(data.articles);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getNewsAsync();
    }, []);

    return (
        <Box sx={{ pt: 2, pb: 2 }}>

            {articles.map(article => (
                <Card key={article.publishedAt} elevation={3} sx={{ my: 2, p: 2 }}>
                    <CardActionArea onClick={() => navigate(article.url)}>
                        <Typography variant="h6" textAlign='left' sx={{ color: '#990000' }} gutterBottom>
                            {article.title}
                        </Typography>
                        <Typography variant="subtitle2" textAlign='left' gutterBottom>
                            {getTimeAgo(article.publishedAt)} | {article.source.name}
                        </Typography>
                    </CardActionArea>
                </Card>


            ))}

        </Box>
    )
}
