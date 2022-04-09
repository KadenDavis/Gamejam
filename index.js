import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import ShoppingCart from "./ShoppingCart/ShoppingCart.js";
import Berries from "./Berries/Berries.js";
import End from "./End/End.js";
import Start from "./Start/Start.js";
import End2 from "./End2/End2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  ShoppingCart: new ShoppingCart({
    x: 65,
    y: -70,
    direction: 90,
    costumeNumber: 2,
    size: 75,
    visible: true
  }),
  Berries: new Berries({
    x: -36,
    y: 177,
    direction: 90,
    costumeNumber: 5,
    size: 100,
    visible: false
  }),
  End: new End({
    x: 36,
    y: -175,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Start: new Start({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  End2: new End2({
    x: -15.277552395264093,
    y: 48.257616938906125,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
