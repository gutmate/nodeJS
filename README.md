# node.js

[node.js tutorials](https://opentutorials.org/course/2136)

### 예제

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello home page</h1>');
});
app.get('/login', (req, res) => {
    res.send('<h2>Please Login</h2>');
});
app.listen(3000, () => {
    console.log('Connected 3000 port!');
});
```

### 정의

`get()` = 라우터 <br/>
`get()` 하는 일 = 라우팅

### 통신방식

User -> `get('/')` -> `send('Welcome Home')`<br/>
User -> `get('/login')` -> `send('Login please')`

### 라우터의 역할

* 사용자의 요청과 컨트롤러(요청에 대한 처리)를 중계