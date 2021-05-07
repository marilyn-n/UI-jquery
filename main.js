
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

    $('button').click(blockEffects);
    function blockEffects(e) {
        const target = e.target.className;
        console.log(target);

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
    $('tr').mouseover(function() {
        $(this).addClass('over');
    })

    //on mouseleave remove orange background color
    $('tr').mouseleave(function() {
        $(this).removeClass('over');
    })

    //on click add active class
    // if tr has active class, remove it otherwise add it
    $('tr').click(function() {
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

});