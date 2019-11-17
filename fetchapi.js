const fetch = require("node-fetch");


fetch('https://jsonplaceholder.typicode.com/todos/1')

.then(function(myJson){
    console.log(myJson);
});
