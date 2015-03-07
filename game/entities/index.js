var THREE = require('three');
var CANNON = require('cannon');

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

exports.loadHexGeometry = function(callback) {
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
		color: 0x9EC66E,
		transparent: true,
		opacity: 0.5
	});
	var mesh = new THREE.Mesh( geometry, material );

	mesh.receiveShadow = true;
	mesh.castShadow = true;

	hex.mesh = mesh;

	return hex;
};

exports.base = function() {
	var base = {};

	var geometry = new THREE.CylinderGeometry( 50, 50, 50, 6, 32 );
	var material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		transparent: true,
		opacity: 0.8
	});
	var mesh = new THREE.Mesh( geometry, material );
	mesh.castShadow = true;
	mesh.receiveShadow = true;

	base.mesh = mesh;

	return base;
};

exports.army = function() {
	var army = {};

	var geometry = new THREE.SphereGeometry( 25, 32, 32 );
	var material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		transparent: true,
		opacity: 0.8
	});
	var mesh = new THREE.Mesh( geometry, material );

	mesh.castShadow = true;
	mesh.receiveShadow = true;

	army.mesh = mesh;

	return army;
};
