import * as THREE from 'three';
1
function animate() {
	requestAnimationFrame( animate );
	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;
	renderer.render( scene, camera );
}


function createEarthTextture (imagePath) {

	const worldTexttureLoad = new THREE.TextureLoader().load(imagePath);

	return worldTexttureLoad;
}

const scene = new THREE.Scene();


const aspectRatio = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
const material = new THREE.MeshBasicMaterial( { map: createEarthTextture('./assets/earth.jpeg') } );


// Instantiate ovjects into the scence
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 50;

animate();