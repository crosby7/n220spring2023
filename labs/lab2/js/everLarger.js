/* In this exercise, I will draw a circle at the center of the screen with diameter 1. 
With a global variable, I'll increase the diameter by 1 every frame. At diameter 200,
the diameter will be reset to 1.

To do this, I'll use mostly draw(). I'll first create a global diamater variable,
but in draw, I'll test this variable with an if statement to make sure it is not greater 
than 200. As long as that is true, I'll draw the circle and increment diameter. 

If the test ever returns false, then I'll make a new background to erase the old circles,
and I'll reduce diameter to 1 before drawing a circle and incrementing again. This way, 
a circle is still drawn every frame (as the prompt asks), even on reset frames. 

*/