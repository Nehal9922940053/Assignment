const express = require('express');
const morgan = require('morgan');
const mongoose= require('mongoose');
const {result} = require('lodash');

const Blog = require('./models/blog');

const app = express();

// const dbURI='mongodb+srv://sahil-1:sahil-1@cluster0.0ii7x.mongodb.net/?retryWrites=true&w=majority';

//connect to mongodb

const dbURI='mongodb+srv://sahil-1:sahil-1@cluster0.0ii7x.mongodb.net/node-tutorials?retryWrites=true&w=majority';

// mongoose.connect(dbURI,{
//     useNewUrlParse:true,
//     useUnifiedTopology:true
// });


mongoose.connect(dbURI)
.then(result=>{
    app.listen(3000)
    // console.log("connected to database successfully");
})
.catch(err=>console.log(err));
// app.listen(3000);



app.set('view engine','ejs');

// app.set('views','myviews')

// app.listen(3000);

//setting up public directory
//express.static-built in middleware 
app.use(express.static('public'));


//custom middleware
app.use((req,res,next) =>{
    console.log("New Request is made: ");
    console.log("Host: " + req.hostname);
    console.log("Path: " + req.path);
    console.log("Method: " + req.method);
    next();
});



app.use(morgan("dev"));
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// app.use(morgan('tiny'));


// app.use((req,res,next) =>{
//     console.log("This is the next Middleware ");
//     next();
// });

app.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err)=>console.log(err));
    })
    
    app.get('/single-blog',(req,res)=>{
        Blog.findById('6548d525b02c7815fee45421')
    .then((result) => {
        res.send(result);
    })
    .catch((err)=>console.log(err));
    })
    
    
    app.get('/add-blog',(req,res)=>{
    const blog =new Blog({
        title:'new blog',
        preview:'this is a new blog with mongo db',
        body:'this is blog body',
        author:'Nehal'
    });
    blog.save()
    .then(result =>{
        res.send(result)
    })
    .catch((err)=>console.log(err))
    })

app.get('/', (req, res) => {
    // res.send('<h1>This is Home Page</h1>')
    // res.sendFile('./views/index.html', {root: __dirname});
   
   
   //adding blogs
   const blogs =[
    {blogtitle: 'Arena', previewtext:'This is a preview text', blogcontent:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio libero, modi quia exercitationem sapiente amet repellendus itaque eius recusandae accusantium aliquid quod a fugiat numquam accusamus aut provident nesciunt veniam?', author:'Avinash' },
    {blogtitle: 'Top Players', previewtext:'This is a preview text', blogcontent:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio libero, modi quia exercitationem sapiente amet repellendus itaque eius recusandae accusantium aliquid quod a fugiat numquam accusamus aut provident nesciunt veniam?', author:'Avinash' },
    {blogtitle: 'Trending games', previewtext:'This is a preview text', blogcontent:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio libero, modi quia exercitationem sapiente amet repellendus itaque eius recusandae accusantium aliquid quod a fugiat numquam accusamus aut provident nesciunt veniam?', author:'Preetish' },
    {blogtitle: 'Basic Tutorial', previewtext:'This is a preview text', blogcontent:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio libero, modi quia exercitationem sapiente amet repellendus itaque eius recusandae accusantium aliquid quod a fugiat numquam accusamus aut provident nesciunt veniam?', author:'Avinash' },
    {blogtitle: 'Rank', previewtext:'This is a preview text', blogcontent:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio libero, modi quia exercitationem sapiente amet repellendus itaque eius recusandae accusantium aliquid quod a fugiat numquam accusamus aut provident nesciunt veniam?', author:'Omkar' }
   ];
   
    res.render('index',{title:'Home', blogs})
});

app.get('/about', (req, res) => {
    // res.send('<h1>This is About Page</h1>')
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about',{title:'About'})

});

app.get('/AboutUs', (req, res) => {
    // res.send('<h1>This is About Page</h1>')
    res.redirect('/about');
});

app.get('/aboutus', (req, res) => {
    // res.send('<h1>This is About Page</h1>')
    res.redirect('/about');
});


app.use((req,res,next) =>{
    console.log("This is the next Middleware ");
    next();
 });


app.get('/teams', (req, res) => {
    // res.send('<h1>This is Teams Page</h1>')
    // res.sendFile('./views/teams.html', {root: __dirname});
    res.render('teams',{title:'Teams'})
});

app.get('/myteam', (req, res) => {
    // res.send('<h1>This is Teams Page</h1>')
    res.redirect('/teams');
});

app.get('/blogs/create', (req, res) => {
    res.render('createBlog',{title :'Create Blog'})
});


app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404',{title: '404'});
});

