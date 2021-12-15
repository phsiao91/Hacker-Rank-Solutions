// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in 12 hour format '12:10:10PM'   '12:10:10AM
// Returns
// string: the time in 24 hour format '12:10:10'     '00:10:10'



function timeConversion(s) {
    // check if it's AM or PM
    // if AM more than 12 set to 00
    // if PM add 12 if time < 12
    
    //AM or PM checker
    let checker = s.substring(8)
    // dont include checker
    let actualTime = s.substring(0, 8)
    //array to test values
    let time = actualTime.split(":")
    
    if (checker === "PM") {
        if( time[0] !== "12"){
            time[0] = parseInt(time[0]) + 12
        }
    // AM case
        }else {
            if(time[0] === "12") {
            time[0] = "00";
        }
    }
    return time.join(":")
}