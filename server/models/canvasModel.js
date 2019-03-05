var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseHistory = require('mongoose-history');

var schemaOptions = {
	timestamps: true,
	toJSON: {
		virtuals: true
	}
};

var allLayers = new Schema({
	layer_color: String,
	layer_gradient: Number,
	layer_gradient_color: String,
	layer_gradient_style: String,
	layer_gradient_direction: String,
	layer_editable: String,
	layer_font: String,
	layer_font_size: String,
	layer_font_family: String,
	layer_font_stretch: String,
	layer_font_variant: String,
	layer_font_weight: String,
	layer_font_style: String,
	layer_text_align: String,
	layer_height: Number,
	layer_id: Number,
	layer_image: String,
	layer_image_blur: Number,
	layer_image_opacity: Number,
	layer_image_contrast: Number,
	layer_image_brightness: Number,
	layer_image_grayscale: Number,
	layer_image_invert: Number,
	layer_image_hue_rotate: Number,
	layer_image_sepia: Number,
	layer_image_saturate: Number,
	layer_image_transZoom: Number,
	layer_name: String,
	layer_orientation: String,
	layer_position_x: String,
	layer_position_y: String,
	layer_object_fit: String,
	layer_rotated: Number,
	layer_type: String,
	layer_value: String,
	layer_width: Number,
	isDragging: false,
	isResizing: false
})

var canvasSchema = new Schema({
	canvas_name: String,
	canvas_type: String,
	canvas_height: Number,
	canvas_width: Number,
	layers: [allLayers]
}, schemaOptions);

module.exports = mongoose.model('Canvas', canvasSchema.plugin(mongooseHistory));
//module.exports = mongoose.model('canvas', canvasSchema);
