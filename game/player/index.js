var THREE = require('three');
var CANNON = require('cannon');
var _ = require('lodash');

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

exports.getPlayerBase = function(hexEntities) {
	var filteredEntities = _.filter(hexEntities, function(hex) {
		return hex.r === 0;
	});

	var playerStartHex = _.max(filteredEntities, function(hex) {
		return hex.q;
	});

	return playerStartHex;
};

exports.getPlayerArmies = function(hexEntities, player) {
	var filteredEntities = _.filter(hexEntities, function(hex) {
		return ((
			hex.r === player.r + 1 &&
			(
				hex.q === player.q - 1 ||
				hex.q === player.q
			)) || (
			hex.r === player.r - 1 &&
			(
				hex.q === player.q + 1 ||
				hex.q === player.q
			)) || (
			hex.q === player.q - 1 &&
			hex.r === player.r
			) || (
			hex.q === player.q + 1 &&
			hex.r === player.r
		));
	});

	return filteredEntities;
};
