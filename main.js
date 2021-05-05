
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
                break;
        }
        
    }

});