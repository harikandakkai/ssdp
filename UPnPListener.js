/*
* Author: Hari Manikkothu
*
*/

var PORT = 1900;
var HOST = '192.168.1.2'; //This is your local IP
var dgram = require('dgram');
var client = dgram.createSocket('udp4');

client.on('listening', function () {
    var address = client.address();
    console.log('UDP Client listening on ' + address.address + ":" + address.port);
    client.setMulticastTTL(128); 
    client.addMembership('239.255.255.250', HOST);
});

client.on('message', function (msg, remote) {   
    console.log('UPnP Broadcast recieved.');
    console.log('From: ' + remote.address + ':' + remote.port +' \n\n' + msg);
});

client.bind(PORT);
