#!/usr/bin/env node
var CLI = require('clui')
var clc = require('cli-color');
 
var Line          = CLI.Line,
    LineBuffer    = CLI.LineBuffer;
 
var outputBuffer = new LineBuffer({
  x: 0,
  y: 0,
  width: 'console',
  height: 'console'
});


var message = new Line(outputBuffer)
  .column('Title Placehole', 20, [clc.green])
  .fill()
  .store();
 
var blankLine = new Line(outputBuffer)
  .fill()
  .store();
 
var header = new Line(outputBuffer)
  .column('Suscipit', 20, [clc.cyan])
  .column('Voluptatem', 20, [clc.cyan])
  .column('Nesciunt', 20, [clc.cyan])
  .column('Laudantium', 11, [clc.cyan])
  .fill()
  .store();

var line;
for(var l = 0; l < 20; l++)
{
  line = new Line(outputBuffer)
    .column((Math.random()*100).toFixed(3), 20)
    .column((Math.random()*100).toFixed(3), 20)
    .column((Math.random()*100).toFixed(3), 20)
    .column((Math.random()*100).toFixed(3), 11)
    .fill()
    .store();
}
 
var os   = require('os')
 
var Gauge = CLI.Gauge;
 
var total = os.totalmem();
var free = os.freemem();
var used = total - free;
var human = Math.ceil(used / 1000000) + ' MB'

console.log(Gauge(used, total, 25, total * 0.8, human));

outputBuffer.output();

