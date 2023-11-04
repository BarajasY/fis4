import * as THREE from "three";

const geometry = new THREE.SphereGeometry(2, 32, 16);
const material = new THREE.MeshStandardMaterial({color: "#f44336", wireframe: true, wireframeLinewidth: .5})
export const electrons = new THREE.Mesh(geometry, material);

