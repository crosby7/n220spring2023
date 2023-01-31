/* In this example, I'll create a function polarPoint(r) in addition to setup() and draw(). 

I'll declare a local variable in polarPoint(r) called x. x will be defined as r * Math.sin(mouseX). a variable y will be defined as r * Math.cos(mouseX). Then, the function will return a new Vector(x,y). 

In draw(), I'll define a variable res as the result of polarPoint(r). Before drawing anything, I'll set a translate(100, 100) line. 

Then, draw a circle(res.x, res.y, radius = 10);


*/