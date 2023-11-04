import * as THREE from "three";

const geometry = new THREE.SphereGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({color: "#3877ec", wireframe: true})
export const nucleus = new THREE.Mesh(geometry, material);

