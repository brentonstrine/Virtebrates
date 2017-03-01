define([], function() {
    var Grass = function(){
        return {
            energy: 100,
            growth_rate: 1,
        };
    };

    var Cow = function(){
        var eat = function (pixel) {
            // console.log("cow eats! weighs: ", pixel.cow.energy)
            // var cow = pixel.cow;
            // var grass = pixel.grass;
            // var size_factor = 0;
            // var burn = 0;
            // var gain = 0;
            //
            // // cow expends energy to eat
            // cow.energy -= cow.eat_energy_use;
            // burn += cow.eat_energy_use;
            //
            // if(grass) {
            // // grass loses energy
            // grass.energy -= cow.eat_rate;
            // grass.energy -= size_factor;
            // // cow gains energy from grass
            // cow.energy += cow.eat_rate + size_factor;
            // gain += cow.eat_rate + size_factor;
            //
            // // if cow eats all the grass, grass dies and cow only gets as much as was left
            // if(grass.energy<=0){
            // cow.energy += grass.energy;
            // gain += grass.energy;
            // grid[pixel.index].grass = false;
            // console.log("GRASS KILLED-----------------------------");
            // //delete pixel.grass;//wait, is this deleting the top level grass or what?
            // }
            // console.log("ate: ", cow.eat_rate + size_factor);
            // } else {
            // console.log("no grass here.")
            // }
            // console.log( "cow ate. now weighs: ", cow.energy);
            // return {
            // burn: burn,
            // gain: gain,
            // }
        };
        var operate = function (pixel){
            console.log("cow in operation.")
            //var cow = cows[id];

            //burn base energy
            console.log("[base] cow energy reduced from " + this.energy + " to " + (this.energy - this.energy_base_use) + ".");
            this.energy -= this.energy_base_use;
//
//                 if(cow.energy > 0) {
//                     // determine eating
//                     if(utilities.spin_wheel(cow.eat_proclivity)) {
//                         eat(pixel, cow);
//                     }
//
//                 if(spin_wheel(cow.move_proclivity)) {
//                 console.log("move burn b", en.burn)
//                 en.burn += move(pixel, cow);
//                 console.log("move burn a", en.burn)
//                 }
//                 } else {
//                     alert ("cow ded");
//                 }
//
// console.log("cow burned", en.burn);
// console.log("cow gained", en.gain);
// console.log("cow ended at   --------------------", cow.energy);
// //console.log(cow)
        };

        return {
            energy: 100,
            energy_base_use: 6,
            eat_rate: 40,
            eat_proclivity: .8,
            eat_energy_use: 8,
            move_proclivity: .9,
            move_speed: 1,
            move_energy_use: 20,
            operate: operate,
        };
    };

    return {
        get_new_cow: new Cow(),
        get_new_grass: new Grass(),
    }
});

