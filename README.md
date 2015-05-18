frontend-nanodegree-arcade-game
===============================

Students should use this rubric: https://www.udacity.com/course/viewer#!/c-ud015/l-3072058665/m-3072588797

for self-checking their submission.

#Project Name : Classic Arcade Game Clone
-------------------------------------------

**Project details
The Project contains three main files**

**Engine.js File
This file provides the game loop functionality (update entities and render),
draws the initial game board on the screen, and then calls the update and
render methods on your player and enemy objects (defined in your app.js).
 
A game engine works by drawing the entire game screen over and over, kind of
like a flipbook you may have created as a kid. When your player moves across
the screen, it may look like just that image/character is moving or being
drawn but that is not the case. What's really happening is the entire "scene"
is being drawn over and over, presenting the illusion of animation.

**App.js file 
This file contains the Enemy and Player classes and it's functions

Enemy class contains :
	1.Update to update the enemy's position.
	2.Render to draw the enemy on the screen.
	3.GetSpeed to get Speed Fucntion by generate binary numbers and use it
	 to generate random speed.

Player Class contains : 
	1.Update to update the player's position.
	2.Render to draw the player on the screen.
	3.Collision to make player reset when collision happened.
	4.Reset Function to reset the player position. 


**Resources.js file
 This is simple an image loading utility. It eases the process of loading
 image files so that they can be used within your game. It also includes
 a simple "caching" layer so it will reuse cached images if you attempt
 to load the same image multiple times.

#Game installation
--------------------
**Open The Index.html file using web browser to run the game

#Play the game as follow
------------------------
	1.Use arrows buttons to move the player up and down or right and left.
	2.The player wins when reach the water area and will reset to the frist position.
	3.If the player and Enemies collide the player will reset to the frist postion.

