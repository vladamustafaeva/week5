const pool = require("./pgConfig")
const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>
	{
		pool.query("select * from students;", (err, results) =>
			{
				res.render('index',{rows: results.rows})
			})
	})

app.get('/user/register', (req, res) =>
	{
		res.render('register')
	}
)

app.post('/user/register', (req, res) =>
	{
		let {fname, lname} = req.body
		pool.query(`insert into students (firstname, lastname) values ($1, $2)`, [fname, lname], (err, result) =>
			{
				if(err)
				{ 
					throw err
				}
				res.redirect("/")
			}
		)
	}
)

app.listen(8080,()=>{console.log("portn 8080")})




