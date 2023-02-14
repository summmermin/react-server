const express = require('express')
const app = express()
const cors = require('cors')

//어떤 origin 이든 데이터 꺼내갈수있음 cors(테스트용에서만 사용할것)
app.use(cors())
//body-parsing 하기위한 코드
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let id = 2;
const todoList = [{
    id: 1,
    text: '할일1',
    done: false
}];

// app.get('/', function (req, res) { //화면 구현 확인용도
//     res.send('port 8080')
// })

app.get('/api/todo', (req, res) => {
    res.json(todoList);
})

app.post('/api/todo', (req, res) => {
    const {text, done} = req.body; //데이터를 꺼내옴
    console.log('req.body : ', req.body);
    todoList.push({
        id: id++,
        text,
        done,
    })
    return res.send('success');
})

app.listen(8080, () => {
    console.log('server start!')
})