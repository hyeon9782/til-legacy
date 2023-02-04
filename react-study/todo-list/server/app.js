const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));


let id = 2;

const todoList = [
    {
        id: 1,
        text: '할일 1',
        done: false
    }
]

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/todo', (req,res) => {
    console.log("겟1");
    res.json(todoList);
    console.log("겟2");
});

app.post('/api/todo', (req, res) => {
    const { text, done } = req.body;
    todoList.push({
        id: id + 1,
        text,
        done
    });
    return res.send('success');
})


app.listen(5000, () => {
    console.log('server start!!');
})