define(["virts"], function(virts) {
    var ecobase = [];
    var size = 10;
    return {
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

