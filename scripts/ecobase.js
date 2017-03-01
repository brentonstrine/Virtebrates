define(["virts", "render"], function(virts, render) {
    var ecobase = [];
    var size = 10;
    return {
        size: size,
        get: function () {
          return ecobase;
        },
        get_pixel: function (id) {
          return ecobase[id];
        },
        get_cows: function (pixel_id) {
          return ecobase[pixel_id].cows;
        },
        set: function (id, payload) {
          return !!(ecobase[id] = payload);
        },
        init: function(){
            var self = this;

            // initialize conntrol handlers
            $c = $(".controls");
            $c.on("click", "#setup", function(){
                self.setup();
                render.ecobase();
            });
            $c.on("click", "#cycle", function(){
                self.cycle();
            });
        },
        setup: function(){
            console.log("setup");

            // render: remove contents
            //$l.find("div").remove();

            for(var i = 0; i<size; i++){
                //
                //$l.append("<div id='p" + i + "'></div>");

                // index each pixel
                ecobase[i] = { index: i };

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

            console.log(ecobase);
        //   render();
        //   return "Setup complete.";
      },
    }
});

