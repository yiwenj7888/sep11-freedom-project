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


<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->


