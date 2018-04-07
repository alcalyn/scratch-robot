var Environment = {
    //restApiUrl: '//'+window.location.hostname+':8480/index-dev.php/api',
    websocketServer: 'ws://'+window.location.hostname+':8482'
};

var websocketSession = null;

function onSessionOpen(session) {
    websocketSession = session;

    session.subscribe('robot', function (topic, event) {
        console.log(event);
    });

    // Publish a message to 'chat/general' topic
    session.publish('robot', 'Hello friend !');
}

ab.connect(Environment.websocketServer, onSessionOpen, console.warn);

var Robot = {
    forward: function (done) {
        console.log('J\'avance !');
        setTimeout(done, 500);
    },

    backward: function (done) {
        console.log('Je recule !');
        setTimeout(done, 500);
    },

    turnLeft: function (done) {
        console.log('Je tourne à gauche !');
        setTimeout(done, 500);
    },

    turnRight: function (done) {
        console.log('Je tourne à droite !');
        setTimeout(done, 500);
    }
};
