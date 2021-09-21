import {GLTFLoader} from "./GLTFLoader.js";
import { Loader } from "./three.module.js";
import {OrbitControls} from "./OrbitControls.js";


let scene, camera, renderer, cube, light, mx, my, controls;


     scene = new THREE.Scene();

 camera = new THREE.PerspectiveCamera(75, 
    window.innerWidth/window.innerHeight,
    0.1,
    1000
    );

     renderer = new THREE.WebGLRenderer({ antialias:true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    let loader = new GLTFLoader();

    let obj;
    loader.load("scene.gltf", function(gltf){
        obj = gltf.scene;
        scene.add(gltf.scene);
        obj.scale.set(2,2,2);
    });

    scene.background = new THREE.Color(0xffffff);

    light = new THREE.HemisphereLight(0XFFFFFF, 0X000000, 2);

    // const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    // // const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
    // const texture = new THREE.TextureLoader().load('textures/Badge_baseColor.png');
    //  const material = new THREE.MeshBasicMaterial( {map:texture} );
    // cube = new THREE.Mesh( geometry, material );
    // light = new THREE.HemisphereLight(0XFFFFFF, 0X000000, 1);
    
    scene.add(light);

    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false;
    camera.position.set(-100, 100, 800);
    

    


    // mx = 0;
    //      my = 0;

    //     function saveMouse(event) {
    //         mx = event.clientX;
    //         my = event.clientY;
    //     }

    //     document.onmousemove = saveMouse;



         


    function animate() {
        requestAnimationFrame(animate);
        // obj.rotation.y += 0.02;
        // cube.rotation.y = mx/500 ;
        // cube.rotation.x = my/500;

        renderer.render(scene, camera);
    }

    // function onWindowResize() {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight);

    // }

    // window.addEventListener('resize', onWindowResize, false);

    animate();
    