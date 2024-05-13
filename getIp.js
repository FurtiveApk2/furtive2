function getVisitorIP(req) {
    console.log('hola');
    return req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
}


module.exports = getVisitorIP;
