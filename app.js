const io    = require('socket.io')()
    , yaml  = require('yamljs')
    ;

let config  = yaml.load('app.yml');

