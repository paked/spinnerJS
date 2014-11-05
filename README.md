#SpinnerJS
SpinnerJS is a spinner simulation library designed to make probability easier in your JavaScript. Originally meant for use in procedural generation, it has potentials in other areas.

##Create a Spinner
`var spinner = new Spinner()`

##Create Values
`first = {value: spinner.QUARTER, callback: function(){console.log("Landed on Quarter One");}}`

`second = {value: .75, callback:function(){console.log("Fail");}}`

##Spin the Spinner
`spinner.spin(first, second)`
