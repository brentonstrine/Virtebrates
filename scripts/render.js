define(["ecobase"], function(ecobase) {
    var init = function(size){
        // initialize environment
        $env = $(".environment");
        for(var i = 0; i < size; i++){
            $env.append('<div id="pixel"' + i + ' class="pixel"></div>');
            console.log("created pixel.")
        }

        // initialize conntrols (ecobase will listen)
        $c = $(".controls");
        $c.append('<button id="setup">Set up landscape</button>');
        $c.append('<button id="cycle">Cycle</button>')

    };

    var ecobase = function(){
        if(!$env){
            init();
        }
        for(var i = 0; i < ecobase.size; i++){
          // draw pixel

              // plant grass
              if(i<10 || i>22){
                ecobase[i].grass = virts.get_new_grass;
              } else {//no grass here
                ecobase[i].grass = false;
              }

              // place cows
              if(i==Math.ceil(size/2)){
                 ecobase[i].cows = [virts.get_new_cow];
              } else {
                ecobase[i].cows = [];
              }
          }

        // render grass

        // render cows

        var cow = grid[i].cow;
        var cowPixel = "#p" + i;

        var e = (grid[i].grass.energy);
        $l.find("#p" + i).css("background-color", "rgb(0," + e + ",0)");

        // Redraw cows
        if(cow){
            //place cow if missing
            if(!$(cowPixel + " .cow")[0]){
                $(cowPixel).append("<div class='cow'></div>");
            }
            var size = 2 + (cow.energy / 100) ;
            $(cowPixel).find(".cow").css({"width": size + "px","height": size + "px"});
        }
    };

    var render_cow_move = function(i, move, cow) {
      // remove current cow
      $("#p" + i + " .cow").remove();

      // place cow in new pixel
      $("#p" + (i + move) + " .cow").append("<div class='cow'></div>");
    };


    return {
        init: init,
        ecobase: ecobase,
    }
});

