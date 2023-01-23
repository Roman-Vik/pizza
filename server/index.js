import express, {request} from "express"
import cors from "cors"
import data from './src/data.json' assert {type: 'json'};
import drinks from './src/pages/drinks.json' assert {type: 'json'};
import pizza from './src/pages/pizzas.json' assert {type: 'json'};
import combo from './src/pages/combo.json' assert {type: 'json'};
import snacks from './src/pages/snacks.json' assert {type: 'json'};
import desserts from './src/pages/dessert.json' assert {type: 'json'};
import other from './src/pages/other.json' assert {type: 'json'};

const app =  express()

const host = '127.0.0.1'
const port =  5000

app.use(express.json())
app.use(cors())

app.use(
    '/photos',
    express.static(`./assets/images/`)
);

app.get('/api', (req, res)=>{
    return res.status(201).json(data)
})
app.get('/pizzas', (req, res)=>{
    return res.status(201).json(pizza)
})
app.get('/combo', (req, res)=>{
    return res.status(201).json(combo)
})
app.get('/snacks', (req, res)=>{
    return res.status(201).json(snacks)
})
app.get('/desserts', (req, res)=>{
    return res.status(201).json(desserts)
})
app.get('/drinks', (req, res)=>{
    return res.status(201).json(drinks)
})
app.get('/other', (req, res)=>{
    return res.status(201).json(other)
})

app.listen(port,host, ()=>{
    console.log(`Server listens http://${host}:${port}`)
})

