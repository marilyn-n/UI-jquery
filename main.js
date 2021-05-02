
$(document).ready(function() {

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


});