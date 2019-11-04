const { setWorldConstructor } = require('cucumber');

function CustomWorld() {
    this.result = 0;
}

setWorldConstructor(CustomWorld);