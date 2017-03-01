define(["ecobase"], function(ecobase) {
    var init = function(size){
        // initialize environment
        $env = $(".environment");
        for(var i = 0; i < size; i++){
            $env.append('<div id="pixel' + i + '" class="pixel"></div>');
            console.log("created pixel.")
        }

        // initialize conntrols (ecobase will listen)
        $c = $(".controls");
        $c.append('<button id="setup">Set up landscape</button>');
        $c.append('<button id="cycle">Cycle</button>')

    };

    var ecobase = function(ecobase){
        if(!$env){
            init();
        }
        for(var i = 0; i < ecobase.size; i++){
            var $pixel = $env.find("#pixel" + i);

            // render grass
            var grass = ecobase.pixels[i].grass;
            $pixel.css("background-color", "rgb(0," + (grass.energy | 0) + ",0)");
            if(!grass){
                $pixel.css("box-shadow", "inset 0 0 10px 1px #f00");
            }

            // render cows
            var cows = ecobase.pixels[i].cows;
            $pixel.find(".cow").remove();
            for(cow in cows){
                var size = 2 + (Math.sqrt(cow.energy));
             $pixel
                .append("<div class='cow'></div>")
                .css({
                    "width" : size + "px",
                    "height": size + "px",
                });
            }
        }
    };

    // var render_cow_move = function(i, move, cow) {
    //   // remove current cow
    //   $("#p" + i + " .cow").remove();
    //
    //   // place cow in new pixel
    //   $("#p" + (i + move) + " .cow").append("<div class='cow'></div>");
    // };


    return {
        init: init,
        ecobase: ecobase,
    }
});

