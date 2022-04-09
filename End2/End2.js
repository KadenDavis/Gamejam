/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class End2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./End2/costumes/costume1.svg", {
        x: 284.5,
        y: 208.507495
      })
    ];

    this.sounds = [
      new Sound("water_drop-6707", "./End2/sounds/water_drop-6707.mp3")
    ];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "End" }, this.whenIReceiveEnd)
    ];
  }

  *whenKeySpacePressed() {
    this.visible = false;
    this.broadcast("Start");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveEnd() {
    this.visible = true;
  }
}
