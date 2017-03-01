define([], function() {
    return {
        cycle: function(){
            for (id in grid) {
                var pixel = grid[id];
                var grass = pixel.grass;
                var cow = pixel.cow;

                // console.log(grass);
                //grow grass
                if(grass){
                    grass.energy += grass.growth_rate;
                } else {

                }

                //operate cow
                if(cow){

                    console.log("cow started at --------------------", cow.energy);
                    if(cow.energy >0) {
                        var en = { burn: 0, gain: 0};
                        cow.energy -= cow.energy_base_use;
                        en.burn += cow.energy_base_use;
                        // eat before moving. if move happens first, eating is confusing.
                        if(spin_wheel(cow.eat_proclivity)) {
                            var result = eat(pixel, cow);
                            en.burn += result.burn;
                            en.gain = result.gain;
                        }

                        if(spin_wheel(cow.move_proclivity)) {
                            console.log("move burn b", en.burn)
                            en.burn += move(pixel, cow);
                            console.log("move burn a", en.burn)
                        }
                    } else {
                        alert ("cow ded");
                    }
                    console.log("cow burned", en.burn);
                    console.log("cow gained", en.gain);
                    console.log("cow ended at   --------------------", cow.energy);
                    //console.log(cow)
                }
            }

            render();
            return "cycle complete"
        },
    }
});

