const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/coursesController');
router.get('/create', coursesController.create)
router.post('/store', coursesController.store)
router.patch('/:id/restore', coursesController.restore)
router.post('/handleform', coursesController.handleForm)
router.get('/:id/edit', coursesController.edit)
router.put('/:id', coursesController.update)
router.delete('/:id', coursesController.destroy)
router.delete('/:id/force', coursesController.forced)
router.get('/:slug', coursesController.show)
module.exports = router