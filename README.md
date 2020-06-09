# Computational_Environments_Fortune
## Fiona
Project log for unit final project

Project proposal: https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Web%20Fortune.pptx

Design Document: https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Design%20Document-Fiona.pdf

### Progress:
processing Github view site (will keep updating):

https://muzifiona.github.io/Computational_Environments_Fortune/fortune/ 

### 11-17 May

Processing using WEBGL

concept structure:

![Concept Structure](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Media/2020-05-17%2019-41-47.gif)

WEBGL cheat sheet( simon tiger)By : https://gist.github.com/simon-tiger/06e865e3012e854e555c0c97757c74d5

Was thinking about using Easy Cam, however, most of the example can't run locally. Why not look into WebGL when this is the built in function. 

![Concept Structure](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Media/2020-05-18%2001-09-15_1.gif)

### AIM

-create array of boxes to interact with mouse (3D boxes, could rotate through camera space)

-when one of the boxes is pressed, disappear and show next step

Blocks rotating concept:

moving x and z at the same time with 25 blocks. 

x move: 0 -> width -> 0

z move: -width ->width -> -width

x,z, xspeed, zspeed

x = x + xspeed

z = z + zspeed

if > / < width, *-1

There should be 25 blocks distribute all around x and z axis in a circle formate. And should use array[] to create the boxes

### 18-31 May
Finding the best way for distributing array objects. 

https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Media/2020-05-30%2020-27-28.gif

main changes:

![rotation animation](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Media/2020-05-30%2020-27-28.gif)

* Y rotation
* using array on x and z axis for positioning
* next: only the middle box would interact with mouse, and enlarge its size and clickable
* next: with text appeal when mouseclick

* need to get start with interaction (result, the answer for the mouse response)

### June til submission

![answer responsive](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Media/fortune-function.png)

* I have added the responsive function to make it answer response when mouse is pressed, however, it should be a little animation to pop up when user click once instead of keep pressing the mouse to see the answer. 
* Problem with the mouse press function. Even the animation loop is added, when mouse is pressed, the function won't continuously show until you click again. In fact, the loop would just pop for the moment you click it. 
* Also, I need to map the images that refer to the specific runes for show features. 

![answer with image](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Media/fortune-function.png)

* 25 images have been added to match the specific rune to give visions to the users. (using if function, there should be a better way to do so instead of typing 25 times of if and else if function, this should be considered when basic features are done.
* Next is to fix the animation problem. 
*Aim:
* on = !on every time the user press the middle, animation start fading in and show the answer, and you press again to fade out
* consider the look of blocks that are rotating. My friend has suggest me that it might look better to be a 3D model with stars at the back to build up the mysterious features. Which should be consider after the first aim is achieved. 

ref links:
https://codepen.io/enginarslan/pen/aJJmZP

https://processing.org/tutorials/text/

https://p5js.org/examples/objects-array-of-objects.html

http://learningprocessing.com/exercises/chp13/exercise-13-05-spiral



[Useful links](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Ref_List.md)
