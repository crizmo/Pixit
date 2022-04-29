const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('./static'))
app.use(express.json())

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('home');
})
