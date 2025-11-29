const express = require('express');

const app = express();
const server = require('http').createServer(app);

app.use(express.json());

const db = require('./db.js')

//* Usuarios
app.get('/usuarios', (req, res)=>{
    const usuarios = db.map(({itens, ...resto})=>
        resto
    );
    res.status(200).json(usuarios);
});

app.post('/usuarios', (req, res)=>{
    const {nome, genero, idade, email} = req.body;

    if(db.map(d=>d.email).includes(email)) return res.status(409).json({error: "Ja existe usuario com esse email"})
    const ultimoId = db.at(-1).id;
    db.push({
        id: ultimoId+1,
        nome,
        genero,
        idade,
        email,
        itens: []
    })
    res.status(201).json(db.at(-1))
})

app.get('/usuarios/:id', (req, res)=>{
    const id = Number(req.params.id);
    const usuario = db.find(d=>d.id===id);
    if(!usuario) return res.status(404).json({error: "Não existe usuario com esse id"})
    res.status(200).json(usuario)
})

app.get('/usuarios/:id/itens', (req,res)=>{
    const id = Number(req.params.id);
    const usuario = db.find(d=>d.id===id);
    if(!usuario) return res.status(404).json({error: "Não existe usuario com esse id"})
    res.status(200).json(usuario.itens)
})

app.post('/usuarios/:id/itens', (req,res)=>{
    const {nome, descricao, preco} = req.body;
    const id = Number(req.params.id);
    const usuario = db.find(d=>d.id===id);
    if(!usuario) return res.status(404).json({error: "Não existe usuario com esse id"})
    const ultimoItemId = db.flatMap(d=>
        d.itens
    ).sort((a,b)=>a.id-b.id).at(-1).id;
    usuario.itens.push({
        id: ultimoItemId+1,
        nome, descricao, preco,
        usuario_id: usuario.id
    })
    res.status(201).json(usuario.itens.at(-1))
})

//* Itens
app.get('/itens', (req, res)=>{
    const itens = db.flatMap(d=>
        d.itens
    ).sort((a,b)=>a.id-b.id);
    res.status(200).json(itens);
});

app.get('/itens/:id', (req, res)=>{
    const id = Number(req.params.id);
    const itens = db.flatMap(d=>
        d.itens
    );
    const item = itens.find(i=>i.id===id);
    if(!item) return res.status(404).json({error: "Não existe item com esse id"})
    res.status(200).json(item);
});

server.listen(3000, ()=> console.log("Servidor rodando em: http://localhost:3000"))