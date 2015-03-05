var THREE = require('three');
var CANNON = require('cannon');

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

exports.loadGeometry = function(callback) {
	var loader = new THREE.JSONLoader();
	loader.load(
		'assets/hex.json',
		function ( geometry ) {
			return callback(geometry);
		}
	);
};

exports.hex = function(geometry) {

	var hex = {};

	var material = new THREE.MeshPhongMaterial({
		color: 0xFFFFFF
	});
	var mesh = new THREE.Mesh( geometry, material );

	mesh.receiveShadow = true;
	mesh.castShadow = true;

	hex.mesh = mesh;

	return hex;
};
