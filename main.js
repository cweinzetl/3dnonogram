import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
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
function createPuzzleFromData(puzzleDataPath) {
    // Fetch and parse the JSON data
    async function fetchAndParseJson() {
        // Try to getch JSON from given path
        try {
            const res = await fetch(puzzleDataPath);
            if (!res.ok) {
                throw new Error('Response status: $(response.status');
            }
            const json = res.json();
            console.log(json);
        } catch (error) {
            console.error(error.message);
        }

        // TODO: Instantiate data from JSON
        
    }

        /* //Convert rle to bitmap
        function rleToBitmap(rle, width, height) {
            // Initialize an empty array to hold the bitmap
            const bitmap = new Array(width * height).fill(0);
            let index = 0;
        
            // Loop through the rle data
            for (let i = 0; i < rle.length; i += 2) {
                const value = rle[i];
                const count = rle[i + 1];
                // Fill the bitmap with the current value for the specified count
                for (let j = 0; j < count; j++) {
                    if (index < bitmap.length) {
                        bitmap[index] = value;
                        index++;
                    }
                }
            }
        } 
        */
}

  createPuzzleFromData();