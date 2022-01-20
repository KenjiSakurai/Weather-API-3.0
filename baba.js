



$(document).ready(function(){
    // Get value on button click and show alert
    $("#locbtn").click(function(){
        let setlocation = $("#locbox").val();
        let APIlink = "https://api.openweathermap.org/data/2.5/weather?q=" + setlocation + "&units=metric&appid=eb05bb1d4707c64657317872a9e34b52&units=metric";
        
        //Hämtar data från Weather API sidan med hjälp av min key
        $.get( APIlink, function( data ) {


            //Ett flertal "let" statements där jag hämtar datan och döper om den till enklare namn.
            let location = data.name
            let Temp = Math.floor(data.main.temp)
            let minTemp = Math.floor(data.main.temp_min)
            let maxTemp = Math.floor(data.main.temp_max)
            let humdity = Math.floor(data.main.humidity)
            let winSped = Math.floor(data.wind.speed)
            
            //Ett försök att få icon att komma upp på sidan men det fungerade inte.
            let imgsrc = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            
            //Ett flertal rader kod som ändrar texten på html objekten till datan från API sidan.
            $("#location").html(location)
            $("#icon").attr('src', imgsrc)
            $("#temp").html(Temp)
            $( "#min" ).html( minTemp )
            $( "#max" ).html( maxTemp )
            $( "#humidity" ).html( humdity )
            $( "#windspeed" ).html( winSped )
            
        });
    
    });

});



