define([], function() {
    var Grass = function(){
        return {
            energy: 100,
            growth_rate: 1,
        };
    };

    var Cow = function(){
        return {
            energy: 100,
            energy_base_use: 6,
            eat_rate: 40,
            eat_proclivity: .8,
            eat_energy_use: 8,
            move_proclivity: .9,
            move_speed: 1,
            move_energy_use: 20,
        };
    };

    return {
        get_new_cow: new Cow(),
        get_new_grass: new Grass(),
    }
});

