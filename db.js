const dados = [
    {
        id: 1,
        nome: "Ana Silva",
        genero: "F",
        idade: "28",
        email: "ana.silva@email.com",
        itens: [
        {
            id: 1,
            nome: "Notebook Dell",
            descricao: "Notebook Dell Inspiron 15, 8GB RAM, 256GB SSD",
            preco: 2500.00,
            usuario_id: 1
        },
        {
            id: 2,
            nome: "Mouse Logitech",
            descricao: "Mouse sem fio Logitech M170",
            preco: 45.90,
            usuario_id: 1
        },
        {
            id: 3,
            nome: "Teclado Mecânico",
            descricao: "Teclado mecânico RGB Redragon Kumara",
            preco: 199.99,
            usuario_id: 1
        }
        ]
    },
    {
        id: 2,
        nome: "Carlos Oliveira",
        genero: "M",
        idade: "32",
        email: "carlos.oliveira@email.com",
        itens: [
        {
            id: 4,
            nome: "iPhone 13",
            descricao: "iPhone 13 128GB, tela 6.1\", azul",
            preco: 3800.00,
            usuario_id: 2
        },
        {
            id: 5,
            nome: "Capinha Protetora",
            descricao: "Capinha silicone para iPhone 13",
            preco: 59.90,
            usuario_id: 2
        },
        {
            id: 6,
            nome: "Carregador Wireless",
            descricao: "Carregador wireless MagSafe",
            preco: 199.00,
            usuario_id: 2
        }
        ]
    },
    {
        id: 3,
        nome: "Mariana Santos",
        genero: "F",
        idade: "25",
        email: "mariana.santos@email.com",
        itens: [
        {
            id: 7,
            nome: "Kindle Paperwhite",
            descricao: "Leitor de e-books Kindle 10ª geração",
            preco: 449.00,
            usuario_id: 3
        },
        {
            id: 8,
            nome: "Capa para Kindle",
            descricao: "Capa protetora para Kindle Paperwhite",
            preco: 79.90,
            usuario_id: 3
        },
        {
            id: 9,
            nome: "Fone de Ouvido",
            descricao: "Fone de ouvido Bluetooth JBL Tune 510BT",
            preco: 199.00,
            usuario_id: 3
        }
        ]
    },
    {
        id: 4,
        nome: "João Pereira",
        genero: "M",
        idade: "30",
        email: "joao.pereira@email.com",
        itens: [
        {
            id: 10,
            nome: "PlayStation 5",
            descricao: "Console PlayStation 5 edição digital",
            preco: 3500.00,
            usuario_id: 4
        },
        {
            id: 11,
            nome: "Controle DualSense",
            descricao: "Controle PS5 DualSense branco",
            preco: 349.00,
            usuario_id: 4
        },
        {
            id: 12,
            nome: "God of War Ragnarok",
            descricao: "Jogo God of War Ragnarok para PS5",
            preco: 299.00,
            usuario_id: 4
        }
        ]
    },
    {
        id: 5,
        nome: "Juliana Costa",
        genero: "F",
        idade: "22",
        email: "juliana.costa@email.com",
        itens: [
        {
            id: 13,
            nome: "Câmera Canon",
            descricao: "Câmera Canon EOS Rebel T7 com lente 18-55mm",
            preco: 1800.00,
            usuario_id: 5
        },
        {
            id: 14,
            nome: "Tripé",
            descricao: "Tripé profissional para câmera",
            preco: 120.00,
            usuario_id: 5
        },
        {
            id: 15,
            nome: "Cartão Memória",
            descricao: "Cartão de memória SD 64GB Classe 10",
            preco: 89.90,
            usuario_id: 5
        }
        ]
    },
    {
        id: 6,
        nome: "Ricardo Almeida",
        genero: "M",
        idade: "35",
        email: "ricardo.almeida@email.com",
        itens: [
        {
            id: 16,
            nome: "Smart TV 55\"",
            descricao: "Smart TV LG 55\" 4K UHD WebOS",
            preco: 2200.00,
            usuario_id: 6
        },
        {
            id: 17,
            nome: "Soundbar",
            descricao: "Soundbar Samsung 2.1 canais com subwoofer",
            preco: 499.00,
            usuario_id: 6
        },
        {
            id: 18,
            nome: "Suporte TV",
            descricao: "Suporte parede para TV até 65\"",
            preco: 150.00,
            usuario_id: 6
        }
        ]
    },
    {
        id: 7,
        nome: "Fernanda Lima",
        genero: "F",
        idade: "29",
        email: "fernanda.lima@email.com",
        itens: [
        {
            id: 19,
            nome: "Geladeira",
            descricao: "Geladeira Frost Free Brastemp 375L",
            preco: 2800.00,
            usuario_id: 7
        },
        {
            id: 20,
            nome: "Fogão 4 Bocas",
            descricao: "Fogão 4 bocas Atlas com acendimento automático",
            preco: 899.00,
            usuario_id: 7
        },
        {
            id: 21,
            nome: "Micro-ondas",
            descricao: "Micro-ondas Electrolux 20L",
            preco: 450.00,
            usuario_id: 7
        }
        ]
    },
    {
        id: 8,
        nome: "Pedro Souza",
        genero: "M",
        idade: "27",
        email: "pedro.souza@email.com",
        itens: [
        {
            id: 22,
            nome: "Mountain Bike",
            descricao: "Bicicleta mountain bike Caloi aro 29",
            preco: 1200.00,
            usuario_id: 8
        },
        {
            id: 23,
            nome: "Capacete",
            descricao: "Capacete para ciclismo profissional",
            preco: 89.90,
            usuario_id: 8
        },
        {
            id: 24,
            nome: "Luva Ciclista",
            descricao: "Luva para ciclismo com proteção",
            preco: 35.00,
            usuario_id: 8
        }
        ]
    },
    {
        id: 9,
        nome: "Amanda Rocha",
        genero: "F",
        idade: "31",
        email: "amanda.rocha@email.com",
        itens: [
        {
            id: 25,
            nome: "Sofá 3 Lugares",
            descricao: "Sofá 3 lugares retrátil e reclinável",
            preco: 1500.00,
            usuario_id: 9
        },
        {
            id: 26,
            nome: "Mesa de Centro",
            descricao: "Mesa de centro em madeira maciça",
            preco: 320.00,
            usuario_id: 9
        },
        {
            id: 27,
            nome: "Tapete Persa",
            descricao: "Tapete persa 2x3m",
            preco: 280.00,
            usuario_id: 9
        }
        ]
    },
    {
        id: 10,
        nome: "Bruno Carvalho",
        genero: "M",
        idade: "26",
        email: "bruno.carvalho@email.com",
        itens: [
        {
            id: 28,
            nome: "Violão Acústico",
            descricao: "Violão acústico Giannini GD-10S",
            preco: 350.00,
            usuario_id: 10
        },
        {
            id: 29,
            nome: "Palhetas",
            descricao: "Kit com 10 palhetas variadas",
            preco: 15.90,
            usuario_id: 10
        },
        {
            id: 30,
            nome: "Afinador Digital",
            descricao: "Afinador digital cromático",
            preco: 49.90,
            usuario_id: 10
        }
        ]
    }
];

module.exports = dados;