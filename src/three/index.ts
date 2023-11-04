import * as THREE from "three";
import randomColor from "randomcolor";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gradientImage from "../assets/black_bg.png";
import { nucleus } from "./nucleus";
import { electrons } from "./electrons";
import { createEffect, onMount } from "solid-js";
import { AtomicNumber } from "./signals";

export const ambientlight = new THREE.AmbientLight(0xffffff, 3);

export const scene = new THREE.Scene();
//Protfolio starts with the Sphere first.
scene.add(nucleus);
scene.add(electrons);

const test = () => {
    const updatedGeometry = new THREE.SphereGeometry(1, 2, 2);
    nucleus.geometry = updatedGeometry;
}

scene.add(ambientlight);

const gradient = new THREE.TextureLoader().load(gradientImage);
scene.background = gradient;
scene.backgroundBlurriness = 10
scene.backgroundIntensity = .4

export const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, .1, 1000);
camera.position.setZ(20);
camera.rotation.x = 0
camera.rotation.y = 6.2


const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);

controls.update();
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    nucleus.rotation.y += .005;
    electrons.rotation.y += .010;
    renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", onWindowResize, false)

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

onMount(() => {
    if(document) {
        document.body.appendChild(renderer.domElement);
    }
})

createEffect(() => {
    const updatedNucleusGeometry = new THREE.SphereGeometry(1, AtomicNumber()/4, AtomicNumber()/4)
    const updatedElectronGeometry = new THREE.SphereGeometry(2 + (AtomicNumber() * .05), AtomicNumber()/4, AtomicNumber()/4)

    nucleus.geometry = updatedNucleusGeometry;
    nucleus.material.color = new THREE.Color(randomColor());

    electrons.geometry = updatedElectronGeometry;
    electrons.material.color = new THREE.Color(randomColor());

}, [AtomicNumber()])
export default renderer;
