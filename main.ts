/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Giordan Zeina
 * Created on: Oct 2023
 * This program is a version of cookie clicker on microbit
*/

// Variables
let number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// input
input.onButtonPressed(Button.A, function() {
  number = number + 1
  basic.showNumber(number)
})

input.onButtonPressed(Button.B, function() {
  number = number - 1
  basic.showNumber(number)
})
