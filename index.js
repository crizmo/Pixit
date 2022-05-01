const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('./static'))
app.use(express.json())

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is now live`);
})

app.get('/', (req, res) => {
    res.render('home');
})