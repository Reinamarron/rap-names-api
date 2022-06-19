const express = require('express')
const app = express()
const PORT = 8000

const connectionString = process.env.MONGODB_URL

MongoClient.connect(connectionString, {useUnifiedTopology: true})
const entree = {
     'dinner':{
        'salad':'Spring Salad with Burrata',
        'dessert':'Muscatine Grapes',
        'drink':'Ginger Orange Spritzer',
      },
      'lunch':{
        'smoothie':'Chocolate Rasberry Smoothie',
        'dip':'Roasted Red Pepper Hummus',
        'drink':'Mango Slushie',
      },
      'breakfast':{
        'protein':'Chocolate Rasberry Smoothie',
        'dip':'Roasted Red Pepper Hummus',
        'drink':'Mango Slushie',
      },
   }

app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api',(request,response)=>{
  response.json(entree)
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log('The server is running on port ${PORT}! You better go catch it!')
})