import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    // BoxGeometry,
    // Mesh,
    // MeshNormalMaterial,
    MeshPhysicalMaterial,
    AmbientLight,
    // DirectionalLight,
    // SpotLight,
    // SpotLightHelper,
    VSMShadowMap,
    PointLight,
    PointLightHelper,
    // RectAreaLight,
    
} from 'three';
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';


function StartInstance() {
    const loader = new GLTFLoader();

    const scene = new Scene();
    const light = new AmbientLight( 0xffffff, 0 ); // soft white light
    console.log(light)
    scene.add( light );

    const directionalLight = new PointLight(0xfbfcae, 1, 100);
    directionalLight.shadow.mapSize.width = 512
    directionalLight.shadow.mapSize.height = 512
    directionalLight.shadow.camera.near = 0.5
    directionalLight.shadow.camera.far = 25
    directionalLight.shadow.blurSamples = 7
    directionalLight.shadow.radius = 5
    directionalLight.castShadow = true;
    console.log(directionalLight)
    directionalLight.color.set(0, 0, 0);
    directionalLight.angle = 1
    directionalLight.decay = 2
    scene.add(directionalLight);

    const lightHelper = new PointLightHelper( directionalLight );
    scene.add( lightHelper )

    loader.load(
        'http://localhost:5500/src/assets/DevRoom.glb',
        function (gltf) {
            gltf.castShadow = true
            console.log(gltf)

            for( let obj of gltf.scene.children ){
                obj.castShadow = true;
                obj.receiveShadow = true;
                if(obj.name == 'Plane003'){
                    console.log(obj)
                    obj.material = new MeshPhysicalMaterial({
                        roughness: 0,
                        transmission: 1, // Add transparency
                        thickness: 0.1
                      });
                }
                if(obj.name == 'LightBulb'){
                    directionalLight.position.set(obj.position.x, obj.position.y, obj.position.z);
                    obj.material = new MeshPhysicalMaterial({
                        roughness: 0,
                        transmission: 1, // Add transparency
                        thickness: 0.1
                      });
                }
            }

            scene.add(gltf.scene)
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.log(error, 'custom')
        }
    );

    const camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.001,
        1000
    );

    const renderer = new WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x303030, 1);
    renderer.shadowMap.type = VSMShadowMap

    renderer.domElement.style['position'] = "absolute";
    renderer.domElement.style['top'] = "0";
    renderer.domElement.style['z-index'] = "-1";
    renderer.shadowMap.enabled = true;
    const controls = new OrbitControls(camera, renderer.domElement);
    document.body.appendChild(renderer.domElement);


    // const geometry = new BoxGeometry( 2, 2, 2 );
    // // const material = new MeshBasicMaterial( { color: 0x00ff00 } );
    // const material = new MeshNormalMaterial( { color: 0x00ff00 } );
    // const cube = new Mesh( geometry, material );

    // scene.add( cube );
    camera.position.X = 0.75;
    camera.position.Y = 0.83;
    camera.position.z = 0.12;

    // let r = 0;
    // let g = 0;
    // let b = 0;
    let LightData = {
        set1: {
            r: 0,
            g: 0,
            b: 0,
            step: 1
        }
    }

    function sinWave(x, offset=0){
        // x is the degrees
        return Math.sin( ( x * Math.PI / 180) + offset )
    }
    
    function animate() {
        requestAnimationFrame(animate);
        controls.update()
        
        // console.log(camera.position)
        // r += 1
        // console.log(sinWave(directionalLight.color.r))
        directionalLight.color.r = sinWave( LightData.set1.r )
        LightData.set1.r += LightData.set1.step
        directionalLight.color.g = sinWave( LightData.set1.g, 2 )
        LightData.set1.g += LightData.set1.step
        directionalLight.color.b = sinWave( LightData.set1.b, -2 )
        LightData.set1.b += LightData.set1.step
        // directionalLight.color.g = 0


        renderer.render(scene, camera);
    }
    animate();
}

export {
    StartInstance
}