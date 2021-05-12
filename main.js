
$(document).ready(function() {
    //$(document).ready(function() {} <----- line 3 This works same as line 4
    //$(function() {} <---- Shorter way to call document ready event

    $('#square').text('hi');
    $('#square').click(randomBackground);
    $('#square').click(randomBorderThickness);


    function randomBackground() {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
    
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        $('#square').css('background-color', rgbColor)
    }

    function randomBorderThickness() {
        const randomNumer = Math.floor(Math.random() * 10);
        $('#square').css('border-width', randomNumer);
    }

    $('.btn-effect').click(fadeToggling);
    let divVisible = true;

    function fadeToggling() {
        if(divVisible) {
            $('#rectangle').fadeOut(1000);
            //fadeOut(1000) it will fadeOut in 1 second
            divVisible = !divVisible; // changes divVisible to false after div fades out
        } else {
            $('#rectangle').fadeIn(1000);
            //fadeIn(1000) it will fadeIn in 1 second
            divVisible = !divVisible; // !divVisible reverses the value of divVisible to true
        }
    }

    $('.container button').click(blockEffects);
    function blockEffects(e) {
        const target = e.target.className;

        switch(target) { // if target matches with any of the cases that specific block of code will be executed.
            case 'btnEffectBlue':
                $('.effectsTargetA').hide();
                break;
            case 'btnEffectOrange':
                $('.effectsTargetB').hide();
                break;
            case 'btnEffectRed':
                $('.effectsTargetC').hide();
                break;
            case 'btnEffectShowAll':
                $('.block').show();
        }
        
    }

    let p1, p2, p3 = false;

    $('.paragraph').hide();
    $('.panel').click(togglePanel);

    function togglePanel(e) {
        const target = e.target.className;

        switch(target) {
            case 'panel-title-1':
                if(!p1) {
                    $('.paragraph-1').slideDown();
                    p1 = !p1;
                } else {
                    $('.paragraph-1').slideUp();
                    p1 = !p1;
                }
                break;
            case 'panel-title-2':
                if(!p2) {
                    $('.paragraph-2').slideDown();
                    p2 = !p2;
                } else {
                    $('.paragraph-2').slideUp();
                    p2 = !p2;
                }
                break;
            case 'panel-title-3':
                if (!p3) {
                    $('.paragraph-3').slideDown();
                    p3 = !p3;
                } else {
                    $('.paragraph-3').slideUp();
                    p3 = !p3;
                }
        }
       
    }

    // Adding and removing classes

    //on mouseover add orange background color
    $('#table-effects tr').mouseover(function() {
        $(this).addClass('over');
    })

    //on mouseleave remove orange background color
    $('#table-effects tr').mouseleave(function() {
        $(this).removeClass('over');
    })

    //on click add active class
    // if tr has active class, remove it otherwise add it
    $('#table-effects tr').click(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        
    })

    // append(), prepend(), before(), after()

    $('.divCard-1 .divCard__thumbnail').one('click', function() {
        $(this).after(
        `<a class='link' href='http://https://bit.ly/3vGYd6i'>
            https://bit.ly/3vGYd6i</a>
        `)
    });

    $('.divCard-2 .divCard__thumbnail').one('click', function() {
        $(this).before(
        `<a class='link' href='http://https://bit.ly/3vGYd6i'>
            https://bit.ly/3vGYd6i</a>
        `)
    });

    $('.divCard-3 .divCard__head').one('click', function() {
        $(this).prepend(
        `<div style="width:100%;height:0;padding-bottom:64%;position:relative;">
            <iframe src="https://giphy.com/embed/6TtiOUb2NC22AP4P7a" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
            
        `)
    });

    $('.divCard-4 .divCard__head').one('click', function() {
        $(this).append(
        `<div style="width:100%;height:0;padding-bottom:64%;position:relative;">
            <iframe src="https://giphy.com/embed/6TtiOUb2NC22AP4P7a" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        `)
    });



    // jquery UI draggable square
    
    $('#moveMe').draggable();
    $('#moveMe').mousemove(getPosition);

    $('#controls button').click(function(e) {
        const target = e.target.childNodes[0].nodeValue;
        console.log(target);

        switch(target){
            case 'Up':
                $('#moveMe').css('top', '-=10px');
            break;
            case 'Down':
                $('#moveMe').css('top', '+=10px');
            break;
            case 'Left':
                $('#moveMe').css('left', '-=10px');
            break;
            case 'Right':
                $('#moveMe').css('left', '+=10px');
            break;
        }

        getPosition();
    })

    function getPosition() {
        const position = $('#moveMe').position();
        const posX = Math.round(position.top);
        const posY = Math.round(position.left);
        const out = `Position X: ${posX} Position Y: ${posY}`;
        $('#posOut').text(out);
    }
    
    
    $('.container-6 button').click(textStyling);
    let index = 0;

    function textStyling(e) {
        const fonts = ["Arial" ,"cursive", "fantasy", "monoscope", "georgia"];
        const target = e.target.className;
        const paragraph = $('.container-6 p.altered-text');
        
        switch(target) {
            case 'font-larger-bnt':
                paragraph.css('font-size', '+=.10rem');
                break;
            case 'font-smaller-btn':
                paragraph.css('font-size', '-=.10rem');
                break;
            case 'font-change-btn':
                // both ways interate over the array adding 1
                // index = (index +1) % fonts.length;
                // index < fonts.length? index++ : index = 0;
                index < fonts.length? index++ : index = 0;
                paragraph.css('font-family', fonts[index]);
                break;
            case 'font-weight-btn':
                paragraph.toggleClass('bold');
                break;
        }

        const output = `Font size is: ${paragraph.css('font-size')}, Font family is: ${paragraph.css('font-family')}`;
        $('.container-6 span').text(output);
    }


    // table data


    function tableData() {
        $.getJSON("./data/capitals.json", function(data) {
            $.each(data, function(key, val) {
                const state = val.name;
                const capital = val.capital;
                $('#jquery-data').append(`
                    <tr>
                        <td>${state}</td>
                        <td>${capital}</td>
                    </tr>
                `);
            })
        })
    }

    tableData();


    

});


// get weather mini app

$('#btnGetWeather').click(function(e) {
    e.preventDefault();
    let inputValue = $('input#city').val(); // get input value
    let api = `cf703cde5684f6fd594aaece7c6cc8de` // api key
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${api}`;

    // other way to make a get call with jquery
    //   $.getJSON(url, function( json ) {
    //     console.log(json);
    //    }).done(function( data ) {
    //     console.log(data);
    //   });
      
    // other way to make a get call with ajax
      $.ajax(url).done(function(response){
          console.log(response);
          const res = response;

          let output =` 
            Temperature: ${res.main.temp} <br/>
            Feels like ${res.main.feels_like} <br/>
            High today: ${res.main.temp_max} <br/>
            Low today: ${res.main.temp_min} <br/>
            ${res.weather[0].description}
          `

          $('div#output').html(output);
      })
})

  //   Adding JSON data / Music form

  //songs variable is out otherwise everytime we click on .btnAdd the function will fire and songs will reset
  const songs = []; 

$('.btnAdd').click(function(e) {
    e.preventDefault();
    
    // we get the input values
    let song = $('#song').val();
    let artist = $('#artist').val();

    if ($('#song').val() && $('#artist').val()) { //if song and artist inputs have value do this
        // we store data in an obj inside array
        let data = [{ songName: song, artistName: artist }];
        songs.push(data);

        // we empty inputs
        $('#song').val('');
        $('#artist').val('');

        // we recreate our table to fill it out
        $('table').html(`
            <tr>
                <th>Song</th>
                <th>Artist</th>
            </tr>`
        );

        // we iterate over songs array
        $.each(songs, function(key, val) {
            $('#music-table tr:last').after(
                `<tr>
                    <td>${val[0].songName}</td>
                    <td>${val[0].artistName}</td>
                </tr>`
            )
        })

    } else {
        console.log('nothing was added here');
    }

});



