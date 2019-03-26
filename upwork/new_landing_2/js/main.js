$(function() {
    
    function startCounter() {
        setTimeout(function() {
            odometer.innerHTML = 33;
        }, 1000);
        odometer.innerHTML = 1;

        setTimeout(startCounter, 10000);
    };
    
    startCounter();
});