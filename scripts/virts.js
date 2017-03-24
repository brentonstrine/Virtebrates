define(["utils"],
function(utils) {
    var Grass = function(){
        return {
            energy: 150,
            growth_rate: 1,
            eat: function(eat_desire) {
                //calculate how much grass can be eaten
                var available_grass = eat_desire;
                console.log("[grass] had " + this.energy + ".");

                if(this.energy <= eat_desire) {
                    available_grass = this.energy;
                }

                // grass loses energy
                this.energy -= available_grass;

                console.log("[grass] has " + this.energy + ".");

                //tell animal how much it ate
                return available_grass;
            },
        };
    };
    //virt abilities
    var see = function(position, distance_can_see) {
        var ecobase = ecobase.get();
        var current_pixel = ecobase.pixels[position];
        var visible_pixels = [];


    };
    var Cow = function(){
        var eat = function (pixel, self) {
            // cow expends energy to eat
            console.log("[eat ] cow energy reduced from " + self.energy + " to " + (self.energy - self.eat_energy_use) + ".");
            self.energy -= self.eat_energy_use;

            // cow eats grass
            var ate = pixel.grass.eat(self.eat_rate);

            // cow gains energy from grass
            console.log("[eat ] cow energy incrsed from " + self.energy + " to " + (self.energy + ate) + ".");
            self.energy += ate;
        };
        var move = function (ecobase, pixel_id, cow_id) {
            var self = ecobase.pixels[pixel_id].cows[cow_id];
            // cow expends energy to move
            console.log("[move] cow energy reduced from " + self.energy + " to " + (self.energy - self.move_energy_use) + ".");
            self.energy -= self.move_energy_use;

            // cow decides which direction to go
            var move = utils.pickFrom(1,self.move_speed);
            if(utils.coinFlip()){
                move = move * -1;
            }
            console.log("[move] cow will move " + move)

            // remove cow from this pixel
            ecobase.pixels[pixel_id].cows.splice(cow_id, 1);
            console.log("[move] cow is currently in pixel " + pixel_id)

            // add cow to transit pixel
            ecobase.transit.push({
                destination_pixel: Number(pixel_id) + Number(move),
                cow: self,
            });
            console.log("[move] cow  will  move to  pixel " + (Number(pixel_id) + Number(move)) );
        };
        var operate = function (ecobase, pixel_id, cow_id){
            var pixel = ecobase.pixels[id];
            console.log("cow in operation.")

            //burn base energy
            console.log("[base] cow energy reduced from " + this.energy + " to " + (this.energy - this.energy_base_use) + ".");
            this.energy -= this.energy_base_use;

            if(this.energy > 0) {
                // determine eating
                if(utils.spin_wheel(this.eat_proclivity)) {
                    eat(pixel, this);
                }

                // determine moving
                if(utils.spin_wheel(this.move_proclivity)) {
                    move(ecobase, pixel_id, cow_id);
                }
            } else {
                alert ("cow ded");
            }
        };

        return {
            energy: 1000,
            energy_base_use: 10,
            eat_rate: 40,
            eat_proclivity: .8,
            eat_energy_use: 8,
            move_proclivity: .9,
            move_speed: 4,
            move_energy_use: 16,
            operate: operate,
            locked: false,
        };
    };

    return {
        get_new_cow: function(){return new Cow()},
        get_new_grass: function(){return new Grass()},
    }
});

