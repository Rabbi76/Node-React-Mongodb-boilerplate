var express = require('express');
var router = express.Router();
var canvasController = require('./canvasController.js');

/*
 * GET
 */
router.get('/', canvasController.list);

/*
 * GET
 */
router.get('/:id', canvasController.show);

/*
 * POST
 */
router.post('/', canvasController.create);

/*
 * PUT
 */
router.put('/:id', canvasController.update);

/*
 * DELETE
 */
router.delete('/:id', canvasController.remove);

module.exports = router;
