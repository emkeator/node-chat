const express = require('express'),
      bodyParser = require('body-parser'),
      mc = require('./server/controller/messages_controller'),
      app = express(),
      port = 3000;


app.use(bodyParser.json());
app.use(express.static('./public/build'));

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

app.listen(port, ()=> console.log(`I'm listening on port ${port}!`));