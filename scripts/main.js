$(function(){
    requirejs(
    ["utils", "ecobase", "virts", "cycle"],
    function(utils, ecobase, virts, cycle) {
        ecobase.setup();
    });
});