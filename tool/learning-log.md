# Tool Learning Log

## Tool: **Phaser**

## Project: **Cooking level game**

---

### 10/3/2025:
* I started learning about [Phaser's animation system](https://docs.phaser.io/phaser/concepts/animations) today. I explored how animations are created using frame based sequences, where each frame is part of a sprite sheet or texture atlas.
* I created a simple walking animation using `this.anims.create()` with a sprite sheet. I learned how to set the frame rate and the duration of the animation to control its speed.
* My first challenge was figuring out how to handle multiple animations using the same frames. I successfully created a walk animation (frames 1–4) and a run animation (frames 1–8) by adjusting the frame rate.
* A-ha moment: I realized that the Animation Manager can create both global and local animations. Local animations only apply to the specific sprite, which gave me more control over individual animations.
* I still have questions about how to properly use the `yoyo` property to make animations reverse and how to manage animations that repeat forever (`repeat: -1`).
* Next, I want to try adding more complex animations, like an idle animation or an attack animation, and experiment with the `repeatDelay` and `randomFrame` properties to see how they affect animation flow.

### 10/30/2025:
* I started learning about [Phaser's Actions](https://docs.phaser.io/phaser/concepts/actions) today. I explored how actions can manipulate groups of game objects like sprites by applying effects such as setting their alpha, changing their position, or rotating them.
* I experimented with the `Phaser.Actions.SetAlpha()` method to fade a group of sprites. I did it by passing the group and a value of `0.5`, which I was able to set all the sprites to a bit transparent state.
* I also used `Phaser.Actions.SetX()` and applied a step parameter to move each sprite along the x-axis with an increasing offset. The sprites moved 100px apart from each other as I adjusted the step value.
* My first challenge was figuring out how to arrange sprites in a grid. I used `Phaser.Actions.GridAlign()` and learned how to line them up in rows and columns, based on cell size. This was really helpful for organizing a lot of objects at once.
* A-ha moment: I realized that the `direction` parameter in `Phaser.Actions.SetScale()` could reverse the way actions are applied. For example, if I wanted to scale my sprites from the end to the start, I could then set `direction` to `-1`.
* I want to experiment more with using actions repeatedly, so i can explore how to apply the same action to a group multiple times without calling it over again and again.
* Next, I want to try using multiple actions at once. For example, I’d like to make sprites rotate with `Angle()` while also fading them with `SetAlpha()` to see how they interact.

### 11/17/2025:
* Today I took my [Phaser Actions](https://docs.phaser.io/phaser/concepts/actions) knowledge a bit further by experimenting with combining multiple actions at once. For example, I used `Phaser.Actions.Rotate()` alongside `Phaser.Actions.SetAlpha()`. I saw how each sprite could rotate while at the same time, fading in and out. This opened up a lot of creative possibilities for animating multiple properties of an object at once.
* I also played around with the SmoothStep() action. This action allows you to interpolate properties better, useful when you want an effect that gradually transitions rather than snapping into place. I applied this to my sprites x position and scaleX values. By gradually moving sprites across the screen while also scaling them.
* A-Ha Moment: I had a realization when I used `Phaser.Actions.SetScale()` with the direction property. It allowed me to reverse the iteration of the scaling effect on a sprite group. I realized how much control I could get by adjusting the direction parameter, allowing for effects like scaling up in reverse order or making sprites shrink in reverse without having to reorder them manually.
* Grid Alignment: I worked on was using `Phaser.Actions.GridAlign()` to organize a group of sprites into a grid layout.
* Scaling Challenge: I also encountered a bit of a challenge when trying to change the scale of my sprites using `Phaser.Actions.SetScale()`. While I understood how it worked for individual objects, it took some trial and error to get it working across a group. I had to make sure that I was applying the right scale to the right elements, but once I got the hang of it, I realized how useful it is for changing the size of all objects in an array without having to loop through each one manually.
* Next, I'm curious to experiment with [Phaser's Camera](https://docs.phaser.io/phaser/concepts/cameras).

### 12/1/2025:
* Today I started exploring [Phaser’s Camera](https://docs.phaser.io/phaser/concepts/cameras), which really opened up a  new way of thinking about how the player views the game world. I learned that every scene automatically includes a main camera and without at least one camera, nothing in the scene would actually render. It was interesting seeing how the camera controls what part of the world is visible.
* I experimented with accessing the main camera using `this.cameras.main` and then moved on to adding additional cameras using `this.cameras.add()`. It gave me a better sense of how you can adjust the rendering system to be.
* A-Ha Moment: One realization came when I started adjusting the camera viewport. I didn’t fully understand the difference between the viewport and the world view until I manually set the camera viewport to a smaller rectangle as the camera wasn’t just changing what it saw but where on the canvas it rendered that view. That helped me understand why Phaser separates what the camera sees from where the camera displays it.
* Camera Bounds: I also played around with camera bounds. By giving the camera a rectangular limit, I could stop it from scrolling outside the actual game world. Before setting bounds, the camera could scroll into empty space, so seeing how bounds keep everything contained made a lot of sense.
* Zoom and Scroll Challenge: I ran into a bit of a challenge when working with scrolling and zooming. Adjusting the camera’s `scrollX`, `scrollY`, and zoom values felt straightforward until I started converting between screen coordinates and world coordinates. Using `camera.getWorldPoint()` helped clear this up, but it took some experimenting to understand how zooming affects the worldView rectangle. 
* Next, I want to learn more about the camera like using `camera.startFollow()`, and experiment with Effects and Rotation part.

<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->


