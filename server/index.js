import express, {request} from "express"
import cors from "cors"
import data from './data.json' assert {type: 'json'};

const app =  express()

const  host = '127.0.0.1'
const port =  5000

app.use(express.json())
app.use(cors())

app.use(
    '/photos',
    express.static(`./assets/images/`)
);


app.get('/home', (req, res)=>{
    res.status(200).type('text/plain')
    res.send('Home page')
})

app.get('/pizza', (req, res)=>{
    res.status(200).type('text/plain')
    res.send('Pizza')
})
app.get('/api', (req, res)=>{
    return res.status(201).json(data)
})



app.listen(port,host, ()=>{
    console.log(`Server listens http://${host}:${port}`)
})

