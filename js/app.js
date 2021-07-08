$(document).ready(function(){
    
    FastClick.attach(document.body);
    getStations();          
});

var station;
var	ticSound = new Audio('../snd/tic.mp3');
var radioSound = new Audio('../snd/radio-2.mp3');


function getStations(){
    $.getJSON("js/app.json",function(mjson){
        station = mjson;
        genList(station);
    });
}
function playStation(id){
    console.log(id);
    $('#img-station').attr('src',station.stations[id].image);
    $('#name-station').text(station.stations[id].name);
    $('#player').attr('src',station.stations[id].stream);

}

function genList(station){
    $.each(station.stations,function(i,radio){
        $('#stations').append('<img id="'+i+'" class= "m-2 border border-info rounded-lg" src="'+radio.image+'" width="80" alt="">')
    });
    $('#stations img').click(function(){
        var selectedStation = $(this).attr('id');
        playStation(selectedStation);
		ticSound.play();
		radioSound.play();
    });
}