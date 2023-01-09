import express from "express"

const app =  express()

const  host = '127.0.0.1'
const port = 3001

app.get('/home', (req, res)=>{
    res.status(200).type('text/plain')
    res.send('Home page')
})

app.get('/pizza', (req, res)=>{
    res.status(200).type('text/plain')
    res.send('Pizza')
})



app.listen(port,host, ()=>{
    console.log(`Server listens http://${host}:${port}`)
})