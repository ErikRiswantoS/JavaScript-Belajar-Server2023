const express  = require ('express');

const app= express();
const port = 5000;

app.get(`/`, (req, res)=>{
    res.send('Hallo Erik Riswanto Saputra');
});
app.get(`/About`, (req, res)=>{
    res.send('tentang Erik Riswanto Saputra');
});
app.get(`/HOME`, (req, res)=>{
    res.send('cuaks');
});
app.listen(port, ()=> {
    console.log(`server berjalan pada http://localhost:${port}`);


});