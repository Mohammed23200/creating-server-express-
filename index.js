const express = require('express');
const app = express();
// app.use((req,res)=>{
//     console.log("we got re");
//     res.send('<h1>this is h1 guys</h1>')
// })
// /cats =>meow
// /dogs => 'woof'
// ./ =>'welcome to our home'
app.post("/cats", (req, res) => {
    res.send("Hello World!");
})
app.get("/cats",(req,res)=>{
    console.log("cat request");
    res.send("Meow")
})
app.get("/dogs",(req,res)=>{
    console.log("dog request");
    res.send("woof")
})
app.get("/",(req,res)=>{
    console.log("home request");
    res.send("this is a home page")
})
// app.get(/(.*)/,(req,res)=>{
//     res.send("404")
// })
// /r/somthing
app.get("/r/:subreddit", (req,res)=>{
    const {subreddit} = req.params;
    res.send(`<h1>browsing the ${subreddit} subreddit</h1>`)
})

app.get("/search",(req,res)=>{
    const {q} = req.query;
    if (!q){
        res.send("nothing found if nothing search");
    }
    res.send(`<h1>search for ${q}</h1>`)
})





app.listen(3000,()=>{
    console.log('Server started on port 3000');
})
