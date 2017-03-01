define(["virts", "render"], function(virts, render) {
    var ecobase = {
        size: 10,
        pixels: [],
    };
    return {
        size: ecobase.size,
        get: function () {
          return ecobase;
        },
        get_pixel: function (id) {
          return ecobase.pixels[id];
        },
        get_cows: function (pixel_id) {
          return ecobase.pixels[pixel_id].cows;
        },
        set: function (id, payload) {
          return !!(ecobase.pixels[id] = payload);
        },
        init: function(){
            var self = this;

            // initialize conntrol handlers
            $c = $(".controls");
            $c.on("click", "#setup", function(){
                self.setup();
            });
            $c.on("click", "#cycle", function(){
                self.cycle();
            });
        },
        setup: function(){
            console.log("setup");

            // render: remove contents
            //$l.find("div").remove();

            for(var i = 0; i<ecobase.size; i++){
                //
                //$l.append("<div id='p" + i + "'></div>");

                // index each pixel
                ecobase.pixels[i] = { index: i };

                // plant grass
                if(i<10 || i>22){
                  ecobase.pixels[i].grass = virts.get_new_grass;
                } else {//no grass here
                  ecobase.pixels[i].grass = false;
                }

                // place cows
                if(i==Math.ceil(ecobase.size/2)){
                   ecobase.pixels[i].cows = [virts.get_new_cow];
                } else {
                  ecobase.pixels[i].cows = [];
                }
            }

        console.log(ecobase);
        render.ecobase(ecobase);
        //   return "Setup complete.";
      },
    }
});

