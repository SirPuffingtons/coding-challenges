// Write a function that takes a number representing the position of the minute hand on a clock, and return the angle that is formed by the minute hand relative to the 12 o'clock position.

// A clock is 360 degrees total, and 60 minutes duration, so 360/60 = 6
const clockAngle = minuteHand => 6 * minuteHand

console.log(clockAngle(20))