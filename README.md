# Computational_Environments_Fortune
## fortune 2.0
## Fiona

Introduction
>Online fortune experience with RUNEs the ancient Germanic languages that represent the power from gods in Viking Age.
>Using WEBGL to build a 3D environment to present a mystical ancient language that allows user to play with and receive messages from it. 
>Press the 3D model in middle and receive answer. 
### Project log for unit final project

Project proposal: https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Web%20Fortune.pptx

Design Document: https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Design%20Document-Fiona.pdf

### Progress:

Github view site (will keep updating):
https://muzifiona.github.io/fortune2.0/

### Display operation

https://youtu.be/_EAPXlY35Pg 


### 11-17 May

Processing using WEBGL

concept structure:

![Concept Structure](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Media/2020-05-17%2019-41-47.gif)

WEBGL cheat sheet( simon tiger)By : https://gist.github.com/simon-tiger/06e865e3012e854e555c0c97757c74d5

Was thinking about using Easy Cam, however, most of the example can't run locally. Why not look into WebGL when this is the built in function. 

![Concept Structure](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Media/2020-05-18%2001-09-15_1.gif)

Lighting and material above won't appear in the end of project, this is for try out and obvious to see. The final view will be black and white.

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

![answer with image](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Media/fortune-function2.png)

* 25 images have been added to match the specific rune to give visions to the users. (using if function, there should be a better way to do so instead of typing 25 times of if and else if function, this should be considered when basic features are done.
* Next is to fix the animation problem. 
* Aim:
* on = !on every time the user press the middle, animation start fading in and show the answer, and you press again to fade out
* consider the look of blocks that are rotating. My friend has suggest me that it might look better to be a 3D model with stars at the back to build up the mysterious features. Which should be consider after the first aim is achieved. 

#### 3D model for Mark's project visuals

![runes 3D model](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Media/2020-06-06%20222029.jpg)

#### Bottom image
![image pattern](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Media/bottom_BG.png)
* instead of using plain white circle as a base for the environment, I have changed to an image I drawn emphasise the mystery feeling and make the page more like the wheel of destiny.

### Update for final function

![final visual presentation](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Media/2020-06-14%20193227.jpg)

* Fading in and fading out function solved by rearranging part of codes to reconstruct the code order 
* Using if() to create the animation transformation
* As previous conversation with tutor, the need of action for users might not be that obvious as I have set the function would only be responsive when the mouse is right at the center of the page. Which is hard for player to find out the actual middle point of the page to play with the fortune telling. 
* Hence I have load a 3D model of rune to place at the center that should be more obvious for people to click on it and receive response. 

### Further Development
* So far the boxes array response together when mouse is at a specific position, which can be improved by being responsive to every single spinning box and only the selected one will change the size. 
* improving the background or adding background music. 
* In my initial design, there should be opening animation and 2 mode for user to choose. I was not able to add in these features as I spent most of the time to figure out positioning the array model, working with boolean and placing my broken code in the right position to make it works. With the base structure built this time, my design could be achieved in future. 


ref links:

https://codepen.io/enginarslan/pen/aJJmZP

https://processing.org/tutorials/text/

https://p5js.org/examples/objects-array-of-objects.html

http://learningprocessing.com/exercises/chp13/exercise-13-05-spiral


[Reference links](https://github.com/muziFiona/Computational_Environments_Fortune/blob/master/Ref_List.md) References and tutorial that I have looked at during project. 
