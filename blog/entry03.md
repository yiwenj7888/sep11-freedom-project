# Entry 3
##### 2/2/26

### Learning Phaser
Throughout the winter break, I decided to dive into [Phaser more](https://docs.phaser.io). My goal was to learn how to use Phaser’s features to be able to bring my imagination game concepts to life. The focus of my learning was to explore the [animation system](https://docs.phaser.io/phaser/concepts/animations), [actions](https://docs.phaser.io/phaser/concepts/actions), and [cameras](https://docs.phaser.io/phaser/concepts/cameras).
During the winter break, I started by learning Phaser's animation system. I had no prior experience with it, so it was a bit of a learning curve at first. To start off, I used Phaser's animation documentation to create a simple walking animation. This involved using a sprite sheet where each frame represented a step. The key function I used was `this.anims.create()`, which allowed me to set the frame rate and adjust the duration of the animation to control its speed.

Here's an example of the basic walking animation I created:

```java
this.anims.create({
    key: 'walk',
    frames: this.anims.generateFrameNumbers('player', { start: 1, end: 4 }),
    frameRate: 10,
    repeat: -1 // it loops infinitely
});
```

The result was a simple sprite moving across the screen, however it was an important reach for me. One of my biggest challenges was figuring out how to create multiple animations using the same sprite sheet frames. For instance, I created two animations, one for walking (frames 1-4) and another for running (frames 1-8). To control the speed, I played around with the frame rate.

```java
this.anims.create({
    key: 'run',
    frames: this.anims.generateFrameNumbers('player', { start: 1, end: 8 }),
    frameRate: 16, // Faster than walk
    repeat: -1
});
```

An interesting thing I learned was that local animations apply to specific sprites, and global animations can apply across multiple objects. This gave me a deeper understanding of how flexible animations could be.


---


### Engineering Design Process
Moving forward, I want to learn more challenging/complex animations, such as adding idle or attack animations. One thing I’m particularly excited about is experimenting with the `yoyo` property, which will allow me to create animations that reverse after completing. I also plan on learning how to control animations that repeat forever (using `repeat: -1`), but with specific delays and random frames for added variation or difference.

 In my last blog, I mentioned that I was on step 2, conducting research of the engineering design process. I’m still currently working through step 2, which focuses on researching the problem. Right now, I need to keep researching my Freedom Project tool so I can learn how to use it effectively. Since I’m almost done learning about the key concepts, I may have the chance to start learning about other miscellaneous lessons as well. I’ll continue exploring the rest of the main lessons before I begin brainstorming ways to use my phaser knowledge to potentially make a small project that focuses on cooking.

#### Planing: The Roadmap
As I continue to learn and experiment with Phaser, my next goals are:

* Refining animations: I want to improve how animations transition and add more smooth transition by using properties like `yoyo` and `repeatDelay`.
* Improving actions: I plan to work on combining different actions together, experimenting with effects like rotation and scaling.
* Exploring the camera effects: I want to add cinematic effects such as camera shakes and fading transitions to make the game feel more dynamic.

This learning experience is exciting, and by my next update, I hope to have a more polished version of the game where animations and actions work with the camera system. This will give me the foundation to start building more interactive elements, like character movement and interactions with the game.


---


### Skills Learned
Time Management: Since I took the time to plan out my learning schedule, I’ve been able to break down complex topics into manageable chunks, which helped me to stay focused and motivated during the winter break.

Organizing Code: Keeping my code organized and consistent, especially when working with animations and actions, has been key. It’s really easy to get lost in the complexity of multiple animations and game objects, so maintaining clean code has made the learning process much smoother.


[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
