












function greeting(name){
    
    var greet ="Good morning, " + fname + "!";
    return greet;
}

function startTime() {
            var today = new Date();
            var month = today.getMonth();
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            month = months[month];
            var day = today.getDate();
            var hours = today.getHours();
            var minutes = today.getMinutes();
            var seconds = today.getSeconds();
            var weekday = today.getDay();
            var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            weekday = weekdays[weekday];
            var year = today.getFullYear();
            document.getElementById("date").innerHTML = weekday + ", " + month + " " + day + ", " + year;
            document.getElementById("time").innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
            var t = setTimeout(startTime, 1000);//update the time every second

}
function formatTime(i) {
    if (i < 10) {i = "0" + i}; // add leading zero to minutes and seconds if they are less than 10
    return i;
}
    