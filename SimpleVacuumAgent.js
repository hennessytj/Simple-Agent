// Program will take any legal state and take
// the necessary actions to arrive at a goal
// state.

"use strict";

// represents total states in environment
var state = {
  currentLoc : "",  
  statusA : false,	// false = dirty, true = clean
  statusB : false,
  getStatusA : function() { return this.statusA; },
  getStatusB : function() { return this.statusB; },
  updateLocation : function(loc) { 
    if (loc === "A") {
      this.currentLoc = "A";
    } else {
      this.currentLoc = "B";
    }
  },
  updateStatus : function(loc) {
    if (this.currentLoc === "A") {
      this.statusA = true; 
    } else {
      this.statusB = true;
    }
  }   
};

var simpleAgent = function(location) {
  // Tell agent where it is 
  state.updateLocation(location);  
  // Agent gets to work
  action();
  // Checks to ensure agent was deterministic!
  if (state.getStatusA() !== "clean" || 
      state.getStatusB() !== "clean") {
    console.log("Error: simpleAgent not working");
  }
  else {
    console.log("simpleAgent cleaned state space");
  }
};

var action = function() {
  // Work until both locations A and B are clean
  while (!state.getStatusA() || !state.getStatusB()) {
    if (state.getStatusA()) {
      // move vacuum to B
      state.updateLocation("B");
      suck("B");
    } else {
      state.updateLocation("A");
      suck("A");
    }
  }
};

var suck = function(loc) {
  state.updateStatus(loc);
};  
  
  
  
// Start
simpleAgent("A");
  
  