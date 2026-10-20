const express = require('express')
const cors = require('cors')
const incidenciasRoutes = require('./routes/incidenciasRouter')


const app = express()
const port = 3000
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use('/api/', incidenciasRoutes)


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
})
