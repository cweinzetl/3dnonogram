import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Camera and lighting setup
camera.position.z = 20;
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
renderer.setAnimationLoop( animate );

// Set puzzle data path
var puzzleDataPath = 'public/puzzles/test.json'; // placeholder

// Function to decode RLE and create voxels
function createVoxelsFromPuzzleData(puzzleDataPath) {
    // Fetch and parse the JSON data
    fetch(puzzleDataPath)
        .then(response => response.json())
        .then(data => {
        console.log('Puzzle data loaded: ${name}', data);
            
        /* TODO
            - Convert RLE to bitmap
            - Use puzzleData and bitmap to create puzzle 
        */

        })
        .catch(error => console.error('Error loading puzzle:', error));
}

  createVoxelsFromPuzzleData();