import * as THREE from 'three';


alarm('hi')

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

const scene = new THREE.Scene();


const aspectRatio = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();