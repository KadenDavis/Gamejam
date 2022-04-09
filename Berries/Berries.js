/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Berries extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume3", "./Berries/costumes/costume3.svg", {
        x: 12.699737020439926,
        y: 17.064881051271385
      }),
      new Costume("costume2", "./Berries/costumes/costume2.svg", {
        x: 12.699737020439926,
        y: 17.064881051271385
      }),
      new Costume("costume4", "./Berries/costumes/costume4.svg", {
        x: 12.699737020439926,
        y: 17.064881051271385
      }),
      new Costume("costume5", "./Berries/costumes/costume5.svg", {
        x: 12.699737020439926,
        y: 17.064881051271385
      }),
      new Costume("costume6", "./Berries/costumes/costume6.svg", {
        x: 12.699737020439926,
        y: 17.064881051271385
      })
    ];

    this.sounds = [
      new Sound("pop", "./Berries/sounds/pop.wav"),
      new Sound("water_drop-6707", "./Berries/sounds/water_drop-6707.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "Catch" }, this.whenIReceiveCatch)
    ];
  }

  *startAsClone() {
    this.goto(this.random(240, -240), 177);
    this.visible = true;
    this.costume = this.random(1, 6);
    while (true) {
      this.y += -3;
      if (this.touching(this.sprites["ShoppingCart"].andClones())) {
        yield* this.startSound("water_drop-6707");
        this.stage.vars.points += 1;
        this.broadcast("Catch");
        this.deleteThisClone();
      }
      if (this.touching(this.sprites["End"].andClones())) {
        this.broadcast("End");
      }
      yield;
    }
  }

  *whenIReceiveCatch() {
    this.visible = false;
    this.createClone();
  }
}
