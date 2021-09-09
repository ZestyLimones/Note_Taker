const router = require('express').Router();
const noteRoutes = require('./notesRouter');

router.use('/notes', noteRoutes);

module.exports = router;
