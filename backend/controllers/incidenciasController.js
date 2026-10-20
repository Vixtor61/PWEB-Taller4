const incidencias = require('../data/incidencias');

//test
const health = (req, res) => {
    try {
       
    

        return res.status(200).json({ "health": "OK"});

    }

    catch (error) {
        console.error('Error al registrar la incidencia:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }

        

}


const info = (req, res) => {
    try {
       
    

        return res.status(200).json({ "integrantes": [
            {catnet: "00025024",
            ciudad_origen: "santa tecla",
            carrera: "ing informatica",
            num_proyecto: 10
            },
            {catnet: "00198117",
            ciudad_origen: "zcatecoluca",
            carrera: "ing informatica",
            num_proyecto: 20
            }
        ]});

    }

    catch (error) {
        console.error('Error al registrar la incidencia:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }

        

}

module.exports = {health,info}