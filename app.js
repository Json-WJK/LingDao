//模块
const express=require('express');
const bodyParser=require('body-parser');
const session=require('express-session');
const cors = require("cors")
//路由文件
// const user=require('./routes/user.js')
// const search=require('./routes/search.js')
// const detail=require('./routes/account-detail.js')
// const order=require('./routes/order.js')

var app=express();
app.listen(0808);
//配置session
app.use(session({
	secret: '128位随机字符串',
	resave: false,
	saveUninitialized: true,
  }))
  /*挂载 */
app.use(express.static(__dirname+'/public'));
/*中间件 */
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(cors({
	origin:[
		"http://127.0.0.1:0808",
		"http://localhost:0808",
		"http://127.0.0.1:8080",
		"http://localhost:8080"
	],credentials:true    
}))
console.log("            LingDao服务器运行中 ...")

// app.use('/user',user);
// app.use('/search',search);
// app.use('/detail',detail);
// app.use('/order',order);