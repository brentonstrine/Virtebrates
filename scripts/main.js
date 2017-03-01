$(function(){
    requirejs(["utils", "ecobase", "virts", "cycle", "render"],
    function(   utils,   ecobase,   virts,   cycle,   render) {
        $(document).ready(function(){
            render.init(ecobase.size);
            ecobase.init();
        });
    });
});