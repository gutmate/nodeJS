# node.js
node.js tutorials

```javascript
app.get('/', (req, res) => {
    res.send('<h1>Hello home page</h1>');
});

app.get();
```

`get()` = 라우터 <br/>
`get()` 하는 일 = 라우팅

User -> `get('/')` -> `send('Welcome Home')`<br/>
User -> `get('/login')` -> `send('Login please')`


### 라우터의 역할

- 사용자의 요청과 컨트롤러(요청에 대한 처리)를 중계