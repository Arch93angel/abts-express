const express = require('express');
const bodyParser = require('body-parser');
const pathDir = require('path');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

const path = '/';
const about = '/about';
const contact = '/contact';
const pricing = '/pricing';
const faq = '/faq';
const blog_home = '/blog-home';
const blog_post = '/blog-post';
const portfolio_item = '/portfolio-item';
const portfolio_overview = '/portfolio-overview';



app.get(path, (request, response) => {
    response.render('index')
});
app.get(about, (request, response) => {
    response.render('about')
});
app.get(contact, (request, response) => {
    response.render('contact')
});
app.get(pricing, (request, response) => {
    response.render('pricing')
});
app.get(faq, (request, response) => {
    response.render('faq')
});
app.get(blog_home, (request, response) => {
    response.render('blog-home')
});
app.get(blog_post, (request, response) => {
    response.render('blog-post')
});
app.get(portfolio_item, (request, response) => {
    response.render('portfolio-item')
});
app.get(portfolio_overview, (request, response) => {
    response.render('portfolio-overview')
});



app.listen(port, () => console.log(`app is listening on http://localhost:${port}/`))


