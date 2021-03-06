const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all(function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
.get(function(req,res,next) {
    res.end('Will send all the promotion dishes to you!');
})
.post(function(req,res,next) {
    res.end('Will add the promotion dish: ' + req.body.name + ' with details: ' + req.body.description);    
})
.delete(function(req,res,next) {
    res.end('Deleting all promotion dishes');
});


promoRouter.route('/:promoId')
.all(function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
.get(function(req,res,next) {
    res.end('Will send details of the promotion dish: ' + req.params.promoId +' to you!');
})
.put(function(req,res,next) {
    res.write('Updating the promotion dish: ' + req.params.promoId + '\n');
    res.end('Will update the promotion dish: ' + req.body.name +
            ' with details: ' + req.body.description);
})
.delete(function(req,res,next) {
    res.end('Deleting promotion dish: ' + req.params.promoId);
});


module.exports = promoRouter;