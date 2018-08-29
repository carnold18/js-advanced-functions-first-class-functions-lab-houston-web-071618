// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
	return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
	return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (num) {
	return function(newNum) {
		return newNum*num;
	}
}

const fareDoubler = function (num) {
	return 2*num;
}

const fareTripler = function (num) {
	return 3*num;
}

const selectDifferentDrivers = function (drivers, selectingDrivers) {
	return selectingDrivers(drivers);
}
