if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{ useUnifiedTopology:true,useNewUrlParser:true})
const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=>console.log('Connected on Database'))

/*app.use(express.json())

//const subcribersRouter = require('./routes/subscribers')
//app.use('/subscribers',subcribersRouter)



const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
  res.render('home.ejs')
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login', failureFlash: true,
  

})

)
app.post('/login',async (req,res)=>{
  const user = users.find(user => user.name = req.body.name)
  if(user == null){
    return res.status(400).send('/')
  }
  try {
    if(await bcrypt.compare(req.body.password,user.password)){
      res.send('/')
    }
    else {
      res.send('/login')
    }
  } catch {
    res.status(500).send()
  }
})

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
  console.log(users)
})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}
const express = require('express')
const app = express()
const path = require('path')
app.use('/',(req,res)=>{
  var duongDanFile = path.join(__dirname,'home.html')
  res.sendFile(duongDanFile)
})*/
app.get('/', (req,res)=>{
  res.json('Hello')
})
app.listen(process.env.PORT,function(){
  
})