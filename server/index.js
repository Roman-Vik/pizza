import express, {request} from "express"
import cors from "cors"
import data from './srs/data.json' assert {type: 'json'};
import drinks from './srs/pages/drinks.json' assert {type: 'json'};
import pizza from './srs/pages/pizzas.json' assert {type: 'json'};
import combo from './srs/pages/combo.json' assert {type: 'json'};
import snacks from './srs/pages/snacks.json' assert {type: 'json'};
import desserts from './srs/pages/dessert.json' assert {type: 'json'};
import other from './srs/pages/other.json' assert {type: 'json'};

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

