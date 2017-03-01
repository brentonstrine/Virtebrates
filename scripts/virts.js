define(["utils"],
function(utils) {
    var Grass = function(){
        return {
            energy: 100,
            growth_rate: 1,
            eat: function(eat_desire) {
                //calculate how much grass can be eaten
                var available_grass = eat_desire;
                if(this.energy <= eat_desire) {
                    available_grass = this.energy;
                }

                // grass loses energy
                this.energy -= available_grass;

                // kill grass if it's all gone
                if(this.energy == 0){
                    debugger;
                    this.remove()
                }

                //tell animal how much it ate
                return available_grass;
            },
        };
    };

    var Cow = function(){
        var eat = function (pixel, self) {
            // cow expends energy to eat
            console.log("[eat ] cow energy reduced from " + self.energy + " to " + (self.energy - self.eat_energy_use) + ".");
            self.energy -= self.eat_energy_use;

            // cow eats grass
            var ate = pixel.grass.eat(self.eat_energy_use);

            // cow gains energy from grass
            console.log("[eat ] cow energy incrsed from " + self.energy + " to " + (self.energy + ate) + ".");
            self.energy += ate;
        };
        var operate = function (pixel){
            console.log("cow in operation.")

            //burn base energy
            console.log("[base] cow energy reduced from " + this.energy + " to " + (this.energy - this.energy_base_use) + ".");
            this.energy -= this.energy_base_use;

            if(this.energy > 0) {
                    // determine eating
                    //if(utils.spin_wheel(this.eat_proclivity)) {
                        eat(pixel, this);
                    //}
//
//                 if(spin_wheel(cow.move_proclivity)) {
//                 console.log("move burn b", en.burn)
//                 en.burn += move(pixel, cow);
//                 console.log("move burn a", en.burn)
//                 }
            } else {
                alert ("cow ded");
            }
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

