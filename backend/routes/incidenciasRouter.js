const express = require('express');
const router = express.Router();
// configurar router
const {
    health,
} = require('../controllers/incidenciasController');

router.get('/health', health)


module.exports = router;