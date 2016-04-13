// Simple & Clean
for (let i = 1; i < 6; i += 1) {
    setTimeout(function() {
        console.log("I've waited " + i + " seconds!");
    }, 1000 * i);
}

//result: 1 second has passed, 2 seconds have passed etc

//Using var to declare the counter in a for loop doesn't actually keep the counter local to the loop. Using let instead does.

//Compared to the usual way or ES5 way using var which prints out the final iteration of i each time rather than couting 1 by 1

for (var i = 1; i < 6; i += 1) {
    setTimeout(function() {
        console.log("I've waited " + i + " seconds!");
    }, 1000 * i);
}

//result: 10 seconds have passed (10xtimes)
