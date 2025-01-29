const { products } = require("./data");
const express = require("express");
const app = express();
const peopleRouter = require('./routes/people');

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().toISOString();
    console.log(method, url, time);
    next();
};

app.use(logger);

// app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1/people', peopleRouter);

// app.get('/api/v1/people', (req, res) => {
//     res.status(200).json({ success: true, data: people });
// });

// app.post('/api/v1/people', (req, res) => {
//     const { name } = req.body;
//     if(!name){
//         return res.status(400).json({ success: false, message: 'Please provide a name' })
//     }
//     people.push({ id: people.length + 1, name: req.body.name });
//     res.status(201).json({ success: true, name: req.body.name })
// });

// app.put('/api/v1/people/:id', (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;

//     const person = people.find((person) => person.id === Number(id))
//     if(!person){
//         return res.status(400).json({ success: false, message: `No person with id ${id}` })
//     }
//     const newPeople = people.map((person) => {
//         if(person.id === Number(id)){
//             person.name = name
//         }
//         return person
//     });
//     res.status(200).json({success: true, data: newPeople })
// });

// app.delete('/api/v1/people/:id', (req, res) => {
//     const person = people.find((person) => person.id === Number(req.params.id))
//     if(!person){
//         return res.status(400).json({ success: false, message: `No person with id ${req.params.id}` })
//     }
//     const newPeople = people.filter((person) => person.id !== Number(req.params.id));

app.use(express.static("./public"));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked! "});
});

app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);

    if (!product) {
        return res.status(404).json({ message: "That product was not found."});
    } else {
    return res.json(product)
    }
});

app.get('/api/v1/query', (req, res) => {
    const { search, limit, price } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        });
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, parseInt(limit))
    }

    if (price) {
        const priceLimit = parseFloat(price);
        sortedProducts = sortedProducts.filter((product) => product.price <= priceLimit);
    }

    res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
    res.status(404).send("Not Found");
})

app.listen(3000, () => {
    console.log("Running...");
});
