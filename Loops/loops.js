// LOOPS

// ALL LOOPS NEED:
// 1) A starting point
// 2) An ending point
// 3) An increment amount

// WHILE LOOP

// Start
var count = 1;

// Ending condition
while(count < 5) { // once we hit 5 the loop stops
    // If I am above the count++, you get 1
    console.log(count);
    // if this is above count++ we don't see it
    // if(count === 5){
    //     console.log("We hit 5!");
    // }
    // Increment 
    count++;
    // Multiple ways to iterate by one
    // count = count + 1
    // count += 1
    // if console.log(count) is below the count++ you start on 2
    // if this is below count++ we see it, because we hit 5
    if(count === 5){
        console.log("We hit 5!");
    }
}

console.log(count);

// write a while loop that counts DOWN from 10
var count2 = 10;
while(count2 > 0){
    console.log(count2);
    count2--;
}

// FOR LOOP
for(var count3 = 1; count3 <= 5; count3++){
    console.log(count3);
}

console.log(count3);

// WHILE LOOP VS FOR LOOP
var dice = 1;
while(dice != 3){
    dice = Math.ceil(Math.random() * 6);
    console.log(dice);
}

// Basic structure of any loop
// START
// END
// INCREMENT