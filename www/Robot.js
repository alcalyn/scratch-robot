var Environment = {
    //restApiUrl: '//'+window.location.hostname+':8480/index-dev.php/api',
    websocketServer: 'ws://'+window.location.hostname+':8482'
};

var websocketSession = null;
var nextDoneCallback = null;

function doneReceived() {
    if (nextDoneCallback) {
        var lastCallback = nextDoneCallback;
        nextDoneCallback = null;
        lastCallback();
    }
}

function onSessionOpen(session) {
    websocketSession = session;

    websocketSession.subscribe('robot', function (topic, event) {
        if ('done' === event.message) {
            doneReceived();
        }
    });
}

ab.connect(Environment.websocketServer, onSessionOpen, console.warn);

var Robot = {
    forward: function (done) {
        console.log('J\'avance !');

        nextDoneCallback = done;
        websocketSession.publish('robot', 'forward');
    },

    backward: function (done) {
        console.log('Je recule !');

        nextDoneCallback = done;
        websocketSession.publish('robot', 'backward');
    },

    turnLeft: function (done) {
        console.log('Je tourne à gauche !');

        nextDoneCallback = done;
        websocketSession.publish('robot', 'left');
    },

    turnRight: function (done) {
        console.log('Je tourne à droite !');

        nextDoneCallback = done;
        websocketSession.publish('robot', 'right');
    }
};
