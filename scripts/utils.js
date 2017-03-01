define([], function() {
    return {
        coinFlip: function () {
          return Boolean(Math.floor(Math.random() * 2));
        },
        loop: function (x, f) {
          for(var i=0;i<x;i++){
            f();
          }
        },
        pickFrom: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        pickFromArr: function (arr) {
            var max = arr.length - 1;
            var min = 0;
            min = Math.ceil(min);
            max = Math.floor(max);
            return arr[Math.floor(Math.random() * (max - min + 1)) + min];
        },
        spin_wheel: function (probability_true){
            var possibilities = [];
            for(var i = 0; possibilities.length < 10; i++) {
                if(i<probability_true*10){
                    possibilities[i] = true;
                } else {
                    possibilities[i] = false;
                }
            }
            var result = possibilities[Math.floor(Math.random() * possibilities.length)];
            return result;
        }
    }
});

