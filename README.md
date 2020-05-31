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

* need to get atart with interaction (result, the answer for the mouse response)

ref links:
https://codepen.io/enginarslan/pen/aJJmZP

https://processing.org/tutorials/text/

https://p5js.org/examples/objects-array-of-objects.html

http://learningprocessing.com/exercises/chp13/exercise-13-05-spiral



[Useful links](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Ref_List.md)
