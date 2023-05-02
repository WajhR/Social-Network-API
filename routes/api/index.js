const router = require('express').Router();
const userRoutes = require('./user_routes');
const thoughtRoutes = require('./thought_routes');

router.use('/users', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;