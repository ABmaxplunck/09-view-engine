const { render } = require('ejs')
const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('view engine','ejs') // we want to change the view engine with ejs value



app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

let post={
    title: 'Test Title',
    body: 'Test Body',
    published: true
}

//posts is an array
let posts = [
    {title: 'Title one', author: 'ab'},
    {title: 'Title two', author: 'nda'},
    {title: 'Title three', author: 'mla'},
    {title: 'Title four', author: 'rsf'}
]






//about page handler
app.get('/about', (request,response)=>{
    response.render('pages/about',{title: 'EJS is an awesome',post,posts})
})

//help page handler
app.get('/help', (request,response)=>{
    response.render('pages/help')
})


app.get('/',(request,response)=>{

    //object
/*     let post={
        title: 'Test Title',
        body: 'Test Body',
        published: true
    }
    
    //posts is an array
    let posts = [
        {title: 'Title one', author: 'ab'},
        {title: 'Title two', author: 'nda'},
        {title: 'Title three', author: 'mla'},
        {title: 'Title four', author: 'rsf'}
    ]
 */
    response.render('pages/index', {title: 'EJS is an awesome',post,posts})

})






const PORT= process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})

