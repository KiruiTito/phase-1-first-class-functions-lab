// returnFirstTwoDrivers function implementation
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers function implementation
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers array containing two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier higher-order function implementation
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // fareDoubler function implementation using createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function implementation using createFareMultiplier
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function implementation
  const selectDifferentDrivers = function(drivers, selectFn) {
    return selectFn(drivers);
  };
  