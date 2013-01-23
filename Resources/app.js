// All source code Copyright 2013 Cope Consultancy Services. All rights reserved


// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create base root window
//
var win1 = Titanium.UI.createWindow({  
    backgroundColor:'#fff'
});

// draw the gridlines first so your other elements stack on top of them
// without requiring you to set the z-index property of each
var grid = require('gridlines');
grid.drawgrid(10,win1);

var theLabel = Ti.UI.createLabel({text: 'Important', top: 20, left: 20, font: {fontSize: 40}});
win1.add(theLabel);

win1.open();
