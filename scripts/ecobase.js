define(["virts", "render", "utils"],
function(virts,   render,   utils) {
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

            for(var i = 0; i<ecobase.size; i++){
                // index each pixel
                ecobase.pixels[i] = { index: i };

                // plant grass
                ecobase.pixels[i].grass = virts.get_new_grass();
                if(i>7 && i<22){//no grass here
                    ecobase.pixels[i].grass.energy = 0;
                }

                // place cows
                if(i==Math.ceil(ecobase.size/2)){
                   ecobase.pixels[i].cows = [virts.get_new_cow()];
                } else {
                  ecobase.pixels[i].cows = [];
                }
            }

        console.log(ecobase);
        render.ecobase(ecobase);
        //   return "Setup complete.";
      },
      cycle: function(){
          console.group ("Cycle");
          for (id in ecobase.pixels) {
              var pixel = ecobase.pixels[id];
              var grass = pixel.grass;
              var cows = pixel.cows;

            //grow grass
            if(grass && grass.energy > 0){
                grass.energy += grass.growth_rate;
            }

            //operate cow
            for(cow in cows){
                console.group ("Operate Cow #" + cow);
                cows[cow].operate(pixel);
                console.groupEnd();
            }
        }
        render.ecobase(ecobase);
        console.groupEnd();
      },
    }
});

