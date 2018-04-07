/**
 * Highlight blocks
 */
Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
Blockly.JavaScript.addReservedWords('highlightBlock');

function highlightBlock(id) {
    workspace.highlightBlock(id);
}

/**
 * Loop trap
 */
window.LoopTrap = 1000;
Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap < 0) { window.LoopTrap = 1000; throw "Infinite loop."; };\n';

/**
 * Run
 */
var interpreter;

/**
 * Fix createAsyncFunction functions.
 * Make it call interpreter.run(); after callback is called.
 */
function fix(func) {
    return function () {
        let args = Array.from(arguments);
        const callback = args.pop();
        args.push((done) => {
            callback();
            interpreter.run();
        });
        func.apply(this, args);
    };
}

function initApiRobot(interpreter, scope) {
    interpreter.setProperty(scope, 'Robot_forward', interpreter.createAsyncFunction(fix(Robot.forward)));
    interpreter.setProperty(scope, 'Robot_backward', interpreter.createAsyncFunction(fix(Robot.backward)));
    interpreter.setProperty(scope, 'Robot_turnLeft', interpreter.createAsyncFunction(fix(Robot.turnLeft)));
    interpreter.setProperty(scope, 'Robot_turnRight', interpreter.createAsyncFunction(fix(Robot.turnRight)));
}

function initApiWait(interpreter, scope) {
    Blockly.JavaScript.addReservedWords('waitForSeconds');

    const wait = (timeInSeconds, done) => {        
        setTimeout(done, timeInSeconds * 1000);
    };

    interpreter.setProperty(scope, 'waitForSeconds', interpreter.createAsyncFunction(fix(wait)));
}

function initApi(interpreter, scope) {
    interpreter.setProperty(scope, 'alert', interpreter.createNativeFunction(function (text) {
        return alert(arguments.length ? text : '');
    }));

    interpreter.setProperty(scope, 'prompt', interpreter.createNativeFunction(function (text) {
        return prompt(text);
    }));

    interpreter.setProperty(scope, 'highlightBlock', interpreter.createNativeFunction(highlightBlock));

    initApiRobot(interpreter, scope);
    initApiWait(interpreter, scope);
}

var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox')
});

function run() {
    console.log('Run');

    var code = Blockly.JavaScript.workspaceToCode(workspace);

    console.log('generated code:\n', code);

    interpreter = new Interpreter(code, initApi);
    interpreter.run();
}
