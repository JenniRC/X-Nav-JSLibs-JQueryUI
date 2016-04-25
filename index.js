jQuery(document).ready(function() {
    $("#revertible").hide();
    $( document ).tooltip();
    $( ".datepicker" ).datepicker();
    $( "#number" ).selectmenu().selectmenu( "menuWidget" );
    $( ".menu" ).menu();
    $( "#tabs" ).tabs();

    var Autocomplete;
    var pelisRisa = ["Muérete de risa Digital", "Entre Jijis y jajas anda el juego, Digital", "A real one joke, Digital", "xD first part, Digital", "xD 2, Digital"];
    var pelisRisa1 = ["Muérete de risa 3D", "Entre Jijis y jajas anda el juego, 3D", "A real one joke, 3D", "xD first part, 3D", "xD 2, 3D"];
    var pelisRisa2 = ["Muérete de risa VO", "Entre Jijis y jajas anda el juego, VO", "A real one joke, VO", "xD first part, VO", "xD 2, VO"];
    var pelisTerror = ["La manzana de Texas, Digital", "Vuelo infernal 2,Digital", "RIP Y RAP, Digital", "Death Note, Digital", "Miedo y más, Digital"];
    var pelisTerror1 = ["La manzana de Texas, 3D", "Vuelo infernal 2,3D", "RIP Y RAP, 3D", "Death Note, 3D", "Miedo y más, 3D"];
    var pelisTerror2 = ["La manzana de Texas, VO", "Vuelo infernal 2,VO", "RIP Y RAP, VO", "Death Note, VO", "Miedo y más, VO"];
    var pelisCF = ["Alien VS Predator, Digital", "Matriz, Digital", "The red martian, Digital", "Avatar, Digital", "El Hobbit, Digital",];
    var pelisCF1 = ["Alien VS Predator, 3D", "Matriz, 3D", "The red martian, 3D", "Avatar, 3D", "El Hobbit, 3D",];
    var pelisCF2 = ["Alien VS Predator, VO", "Matriz, VO", "The red martian, VO", "Avatar, VO", "El Hobbit, VO",];
    var horariom =["12:00","13:00","14:00"];
    var horariot =["16:00","17:00","18:00"];
    var horarion =["20:00","21:00","23:00"];
    $(".Risa1").click({films: pelisRisa},autocompletar);
    $(".Risa2").click({films: pelisRisa1},autocompletar);
    $(".Risa3").click({films: pelisRisa2},autocompletar);
    $(".Terror1").click({films: pelisTerror},autocompletar);
    $(".Terror2").click({films: pelisTerror1},autocompletar);
    $(".Terror3").click({films: pelisTerror2},autocompletar);
    $(".CF1").click({films: pelisCF},autocompletar);
    $(".CF2").click({films: pelisCF1},autocompletar);
    $(".CF3").click({films: pelisCF2},autocompletar);
    $(".Doce").click({sesion: horariom},autocompl);
    $(".Una").click({sesion: horariom},autocompl);
    $(".Dos").click({sesion: horariom},autocompl);
    $(".Cuatro").click({sesion: horariot},autocompl);
    $(".Cinco").click({sesion: horariot},autocompl);
    $(".Seis").click({sesion: horariot},autocompl);
    $(".Ocho").click({sesion: horarion},autocompl);
    $(".Nueve").click({sesion: horarion},autocompl);
    $(".Once").click({sesion: horarion},autocompl);

    $( "#BTNelegir").button().click(mostrarDrag);
    $( "#dialog" ).dialog();
    $( ".draggable" ).draggable();
    $("#revertible").draggable({
        revert: true
    });
    $( "#droppable" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                .html( "Sesion escogida!" );
            $("#dialog").html($("#revertible").html());
            $( "#dialog" ).dialog();
        }
    });
    $( "#BTNelegido" ).click(function(){
        $( "#dialog" ).dialog();
    });
});

function autocompletar(event){
    $( ".tags" ).autocomplete({
        source: event.data.films
    });
}
function autocompl(event){
    $( ".tags2" ).autocomplete({
        source: event.data.sesion
    });
}
function mostrarDrag(){
    var options = { percent: 100 };
    $( "#revertible" ).show( "scale", options, 500, llenarDrag );
}

function llenarDrag(){
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $( "#numPersonas" ).effect( "transfer", options, 500, callback0 );
}

function callback0(){
    $( "#revertible" ).html("<p><strong>Sesion escogida:</strong> para " + $("#number").val() + " personas");
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $( "#fecha" ).effect( "transfer", options, 500, callback1 );
}

function callback1() {
    $( "#revertible" ).append("<p>Fecha de la pelicula: " + $( "#fecha" ).val() + "<p>");
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $( "#fecha" ).effect( "transfer", options, 500, callback2 );
};

function callback2() {
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    if($( "#fecha" ).val()){
        $( "#revertible" ).append("<p>Fecha de la pelicula: " + $( "#fecha" ).val() + "<p>");
    }else{
        $( "#revertible" ).append("<p>Sin hora de sesión.<p>");
    }
    $( "#Pelicula" ).effect( "transfer", options, 500, callback3 );
};

function callback3() {
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $( "#revertible" ).append("<p>Película: " + $( "#Pelicula" ).val() + "<p>");
    $( "#HoraSesion" ).effect( "transfer", options, 500, callback4 );
};

function callback4() {
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $( "#revertible" ).append("<p>Sesion: " + $( "#HoraSesion" ).val() + "<p>");
};
