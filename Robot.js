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
