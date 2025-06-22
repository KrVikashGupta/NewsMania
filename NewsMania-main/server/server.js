import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));

const API_KEY = process.env.API_KEY;

function fetchNews(req,res){
    axios.get(req)
    .then(response =>{
        if(response.data.totalResults > 0){
            res.json({
                status: 200,
                success: true,
                message: "News fetched successfully",
                data: response.data

            });
        } else{
            res.json({
                status: 200,
                success: true,
                message: "No news found",
                data: []
            });
            
        }
    })
    .catch(error =>{
        res.json({
            status: 500,
            success: false,
            message: "failed to fetched the data from the API",
            error: error.message
        });

   });
}

app.get('/all-news',(req,res) =>{
    let pageSize = parseInt(req.query.pageSize) || 40;
    let page = parseInt(req.query.page) || 1;
    let url = `https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;

    fetchNews(url,res);
});


app.get('/top-headlines',(req,res) =>{
    let pageSize = parseInt(req.query.pageSize) || 40;
    let page = parseInt(req.query.page) || 1;
    let category = req.query.category || 'general';
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;

    fetchNews(url,res);
});

app.options("/country/:iso",cors());
app.get('/country/:iso',(req,res) =>{
    let pageSize = parseInt(req.query.pageSize) || 40;
    let page = parseInt(req.query.page) || 1;
    const country = req.params.iso;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;

    fetchNews(url,res);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});