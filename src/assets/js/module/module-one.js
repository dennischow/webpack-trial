console.log("--- module one");

const module = {};

/**
 * Module initialize
 */
const init = function () {
    module.root = document.getElementById("heading");
    console.log(module.root.innerHTML);

    methodOne();
    methodTwo();
}

const methodOne = function () {
    console.log("methodOne");
    module.message = "This is a message inside module one";
}

const methodTwo = function () {
    console.log("methodTwo");
    console.log( module );
}

export {init};





