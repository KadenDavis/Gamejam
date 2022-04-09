/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class End extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./End/costumes/costume1.svg", {
        x: 339.2500000000001,
        y: -2.757064590542143
      })
    ];

    this.sounds = [new Sound("pop", "./End/sounds/pop.wav")];

    this.triggers = [];
  }
}
