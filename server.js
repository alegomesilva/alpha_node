const express = require('express');
const server = express();

const clients = [
    {
        id: 1,
        name: 'Alessandro',
        email: 'alessandro@gmail.com',
    },
    {
        id: 2,
        name: 'fabio',
        email: 'fabio@gmail.com',
    },
    {
        id: 3,
        name: 'luiz',
        email: 'luiz@gmail.com',
    },
];
server.get('/', function (req, res){
    //res.send('Funcionou')
    console.log(req)
    res.send(JSON.stringify(clients));
});

server.get('/clients', function (req, res){
    //res.send('Rota clientes')
    res.send(JSON.stringify(clients));
});

server.get('/client/:id/', function(req, res) {
    // console.log(req.params.id);
    // res.send('id: ' + req.params.id + ' | Name: ' + req.params.name);
    const id = parseInt(req.params.id);
    let i = 0;
    let find = false;

    for(i = 0; i < clients.length; i++) {
        if(clients[i].id === id) {
            find = true;
            break;
        }
    }

    if(find) {
        res.send(clients[i]);
    } else {
        res.status(404).json({'message':'Id não encontrado'})
    }
    
});


server.listen(3000, function(){
    console.log('Servindo');
});