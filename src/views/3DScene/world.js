import { 
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    // BoxGeometry,
    // Mesh,
    // MeshNormalMaterial,
    AmbientLight,
    // DirectionalLight
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function StartInstance(){
    const loader = new GLTFLoader();

    const scene = new Scene();
    const light = new AmbientLight( 0x404040, 10 ); // soft white light
    scene.add( light );

    // const directionalLight = new DirectionalLight(0xfff0dd, 1);
    // directionalLight.position.set(0, 5, 10);
    // scene.add(directionalLight);

    loader.load(
        'https://raw.githubusercontent.com/solocyberengineer/assets/main/DevRoom.glb',
        function( gltf ){
            scene.add( gltf.scene )
        },
        function( xhr ){
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        function( error ){
            console.log(error, 'custom')
        }
    );

    const camera = new PerspectiveCamera(
        65,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    const renderer = new WebGLRenderer({
        antialias: true
    });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0x000000, 1 );

    renderer.domElement.style['position'] = "absolute";
    renderer.domElement.style['top'] = "0";
    const controls = new OrbitControls( camera, renderer.domElement );
    document.body.appendChild(renderer.domElement);


    // const geometry = new BoxGeometry( 2, 2, 2 );
    // // const material = new MeshBasicMaterial( { color: 0x00ff00 } );
    // const material = new MeshNormalMaterial( { color: 0x00ff00 } );
    // const cube = new Mesh( geometry, material );

    // scene.add( cube );
    camera.position.z = 5;

    function animate() {
        requestAnimationFrame( animate );
        controls.update()

        // console.log(camera.position)
        
        renderer.render( scene, camera );
    }
    animate();
}

export { StartInstance }