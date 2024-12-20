const { products } = require("./data");
const express = require("express");
const app = express();

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
