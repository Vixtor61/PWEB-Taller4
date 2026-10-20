const express = require('express');
const router = express.Router();
// configurar router
const {
    health,info
} = require('../controllers/incidenciasController');

router.get('/health', health)
router.get('/info', info)


module.exports = router;