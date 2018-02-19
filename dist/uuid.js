'use strict';

var a, b;
var time = Math.round(new Date().getTime() / 1000);
var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var ID_LENGTH = 8;

a = time.toString(10).substring(0, 8);

var generate = function generate() {
	var rtn = '';
	for (var i = 0; i < ID_LENGTH; i++) {
		rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
	}
	return rtn;
};

protocolRequest = '' + new Date().getFullYear() + a + generate();

var rand = function rand(min, max) {

	if (min === null && max === null) return 0;

	if (max === null) {
		max = min;
		min = 0;
	}
	return min + Math.floor(Math.random() * (max - min + 1));
};

var createUUID = function createUUID() {

	var date = new Date().getTime();

	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
		var randomize = (date + Math.random() * 16) % 16 | 0;
		date = Math.floor(date / 16);
		return (char == 'x' ? random : random & 0x3 | 0x8).toString(16);
	});

	return uuid;
};

console.log('UUID GENERATED: ' + createUUID());

var count_numbers = function count_numbers(n) {

	if (!(typeof n !== 'number')) {
		var count = 0;
		if (n > 1) ++count;

		while (n / 10 >= 1) {
			n /= 10;
			++count;
		}
		return count;
	}

	return false;
};