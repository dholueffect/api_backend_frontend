'use strict';

const Hapi = require('hapi');
const fetch = require("node-fetch");


    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/hello',
        handler:function (request, h) {
            const counter_strike = [
                {
                Religion: 'Counter_Strike',
                Aim : 'national security',
                Respect : 'ultimate'
                },
                {
                Religion: 'Counter_Strike_Source',
                Aim : 'national security_source',
                Respect : 'ultimate_Source'
                 }
        ];
            return counter_strike;
        }
    });

const start = async function(){
try {
    await server.start();
}
catch (err) {
    console.log(err);
    process.exit(1);

}
console.log('Server running at :', server.info.uri);

};
start();

// fetching the API in
fetch('http://localhost:3000/hello')
.then(function(counter_strike){
    return counter_strike.json();
})
.then(function(myJson){
    console.log(myJson);
});