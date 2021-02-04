

const startTest = (time) => {
    console.log('click')

$('.test-questions').show()
$('#start-test').hide()


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    
   let interval = setInterval(function () {
      
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            //alert("times up")
            clearInterval(interval)
            $('.test-questions').hide()
            //window.location.replace("http://localhost:3000")
        }
    }, 1000);
}

jQuery(function ($) {
    var testTime = 60 * parseInt(time),
        display = $('#timer');
    startTimer(testTime, display);
});
}