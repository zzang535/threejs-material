import { Mesh, BoxGeometry, MeshBasicMaterial } from "three";
import { Body, Box, Vec3 } from "cannon-es";
import dominoGlb from "../models/domino.glb";

export class Domino {
  constructor(info) {
    this.scene = info.scene;
    this.cannonWorld = info.cannonWorld;

    this.width = info.width || 0.6;
    this.height = info.width || 1;
    this.depth = info.width || 0.2;

    this.x = info.x || 0;
    this.y = info.y || 0.5;
    this.z = info.z || 0;

    this.rotationY = info.rotationY || 0;

    info.gltfLoader.load(dominoGlb, (glb) => {
      this.modelMesh = glb.scene.children[0];
      this.modelMesh.castShadow = true;
      this.modelMesh.position.set(this.x, this.y, this.z);
      this.scene.add(this.modelMesh);
    });
  }
}