/* Create  the spinner */
var spinner = new Spinner() 

/* Create values, note this CAN be done inline */
first = {value: spinner.QUARTER, callback: function(){console.log("Landed on Quater One");}}

/* Chances at the lowest level are shown as a value between 0 and 1 */
second = {value: .75, callback: function(){console.log("Fail");}}

/* Spiin the spinner with the values we have created */
spinner.spin(first, second)