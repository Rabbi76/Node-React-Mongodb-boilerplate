var canvasModel = require('../models/canvasModel');

/**
 * canvasController.js
 *
 * @description :: Server-side logic for managing canvass.
 */
module.exports = {

    /**
     * canvasController.list()
     */
    list: function (req, res) {
        canvasModel.find(function (err, canvass) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting canvas.',
                    error: err
                });
            }
            return res.json(canvass);
        });
    },

    /**
     * canvasController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        canvasModel.findOne({ _id: id }, function (err, canvas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting canvas.',
                    error: err
                });
            }
            if (!canvas) {
                return res.status(404).json({
                    message: 'No such canvas'
                });
            }
            return res.json(canvas);
        });
    },

    /**
     * canvasController.create()
     */
    create: function (req, res) {
        var canvas = new canvasModel({
            canvas_name: req.body.canvas_name,
            canvas_type: req.body.canvas_type,
            canvas_height: req.body.canvas_height,
            canvas_width: req.body.canvas_width,
            layers: req.body.layers

        });

        canvas.save(function (err, canvas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating canvas',
                    error: err
                });
            }
            return res.status(201).json(canvas);
        });
    },

    /**
     * canvasController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        canvasModel.findOne({ _id: id }, function (err, canvas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting canvas',
                    error: err
                });
            }
            if (!canvas) {
                return res.status(404).json({
                    message: 'No such canvas'
                });
            }

            canvas.canvas_name = req.body.canvas_name ? req.body.canvas_name : canvas.canvas_name;
            canvas.canvas_type = req.body.canvas_type ? req.body.canvas_type : canvas.canvas_type;
            canvas.canvas_height = req.body.canvas_height ? req.body.canvas_height : canvas.canvas_height;
            canvas.canvas_width = req.body.canvas_width ? req.body.canvas_width : canvas.canvas_width;
            canvas.layers = req.body.layers ? req.body.layers : canvas.layers;

            canvas.save(function (err, canvas) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating canvas.',
                        error: err
                    });
                }

                return res.json(canvas);
            });
        });
    },

    /**
     * canvasController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        canvasModel.findByIdAndRemove(id, function (err, canvas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the canvas.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
