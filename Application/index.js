const express = require('express');
const myData = require('../Data/data');
const myBlogs = require('../Data/blogs')
const app = express();
const port = 5000;

//-------------------------------------------------here is my all user database api---------------------------------------------------------
//this is my root api, method: GET
app.get('/', (req, res) => {
    res.send(myData)
});

//this api provide all user, method: GET
app.get('/all_users', (req, res) => {
    res.send(myData);
});

//this api provide unic user given. method: GET
app.get('/users/id/:index', (req, res) => {
    const index = req.params.index;
    if (index) {
        const unicIndex = myData[index];
        res.send(unicIndex);
    }
    else {
        res.send('"Data not found, please try again!"');
    }
});

//this api provide unic user given. method: GET
app.get('/users/user_id/:id', (req, res) => {
    const id = req.params.id;
    if (id) {
        const searchId = myData.find((user) => user._id.toLocaleLowerCase().includes(id.toLocaleLowerCase()));
        res.send(searchId);
    }
    else {
        res.send("Data not found, please try again!");
    }
});

// This is my search API.this api provide user search result, when user doing search.....
app.get('/search/users/id', (req, res) => {
    const search_id = req.query.search_id;
    if (search_id) {
        const searchResult = myData.find((user) => user._id.toLocaleLowerCase().includes(search_id.toLocaleLowerCase()));
        res.send(searchResult);
    }
    else {
        res.send("Data not found, please try again!");
    }
});


// This is my search API. this api provide user search result, when user doing search.....
app.get('/search/users/name', (req, res) => {
    const search_name = req.query.search_name;
    if (search_name) {
        const searchResult = myData.filter((user) => user.name.toLocaleLowerCase().includes(search_name.toLocaleLowerCase()));
        res.send(searchResult);
    }
    else {
        res.send("Data not found, please try again!");
    }
})


//-------------------------------------------------here is my all blogs database api---------------------------------------------------------

//this is my root blog api, method: POST
app.get('/', (req, res) => {
    res.send(myBlogs);
});

//this api provide all blogs, method: GET
app.get('/all_blogs', (req, res) => {
    res.send(myBlogs);
});

//this api provide unic user given. method: GET
app.get('/blogs/id/:index', (req, res) => {
    const index = req.params.index;
    if (index) {
        const blogsIndex = myBlogs[index]
        console.log(blogsIndex)
        res.send(blogsIndex);
    }
    else {
        res.send("Data not found, please try again!");
    }
})

//this api provide unic user given. method: GET
app.get('/blogs/blogs_id/:id', (req, res) => {
    const id = req.params.id;
    if (id) {
        const searchId = myBlogs.find((blog) => blog._id.toLocaleLowerCase().includes(id.toLocaleLowerCase()));
        res.send(searchId);
    }
    else {
        res.send("Data not found, please try again!");
    }
});

// This is my search API.this api provide user search result, when user doing search.....
app.get('/search/blogs/id', (req, res) => {
    const search_id = req.query.search_id;
    if (search_id) {
        const searchResult = myBlogs.find((blog) => blog._id.toLocaleLowerCase().includes(search_id.toLocaleLowerCase()));
        res.send(searchResult);
    }
    else {
        res.send("Data not found, please try again!");
    }
});


// This is my search API. this api provide user search result, when user doing search.....
app.get('/search/author/name', (req, res) => {
    const search_name = req.query.search_name;
    console.log(search_name)
    if (search_name) {
        const searchResult = myBlogs.filter((blog) => blog.author.toLocaleLowerCase().includes(search_name.toLocaleLowerCase()));
        res.send(searchResult);
    }
    else {
        res.send("Data not found, please try again!");
    }
})


app.listen(port, () => {
    console.log(`My node.js sever listening on port ${port}`);
});