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
    MeshStandardMaterial,
    VSMShadowMap,
    PointLight,
    // PointLightHelper,
    // RectAreaLight,
} from 'three';
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

function createPointLight(){
    let light = new PointLight(0xffffff, 1, 100);
    light.shadow.mapSize.width = 1024
    light.shadow.mapSize.height = 1024
    light.shadow.camera.near = 0.5
    light.shadow.camera.far = 25
    light.shadow.blurSamples = 7
    light.shadow.radius = 5
    light.castShadow = true;
    light.angle = 1

    return light
}

function StartInstance() {
    let resolution = 1;
    let WIDTH = window.innerWidth * resolution;
    let HEIGHT = window.innerHeight * resolution;

    const loader = new GLTFLoader();

    const scene = new Scene();
    const light = new AmbientLight( 0xffffff, 0 ); // soft white light
    console.log(light)
    scene.add( light );

    const light1 = createPointLight();
    scene.add(light1);

    // const lightHelper = new PointLightHelper( light1 );
    // scene.add( lightHelper )

    let light2 = createPointLight();
    scene.add(light2)

    let LightData = {
        set1: {
            r: 0,
            g: 0,
            b: 0,
            step: 0.5
        }
    }
    
    let rgbLights = null;
    loader.load(
        'http://localhost:5500//src/assets/DevRoom.glb',
        function (gltf) {
            gltf.castShadow = true
            console.log(gltf)
            
            
            for( let obj of gltf.scene.children ){
                obj.castShadow = true;
                obj.receiveShadow = true;
                if(obj.name == 'Plane003'){
                    // console.log(obj)
                    obj.material = new MeshPhysicalMaterial({
                        roughness: 0,
                        transmission: 1, // Add transparency
                        thickness: 0.1
                      });
                }
                if( obj.name == 'RGBLights' ){
                    rgbLights = obj
                }
            }
            light1.position.set(
                rgbLights.position.x + rgbLights.children[11].position.x,
                rgbLights.position.y + rgbLights.children[11].position.y,
                rgbLights.position.z + rgbLights.children[11].position.z
            )
            light2.position.set(
                rgbLights.position.x + rgbLights.children[22].position.x,
                rgbLights.position.y + rgbLights.children[22].position.y,
                rgbLights.position.z + rgbLights.children[22].position.z
            )
            console.log(rgbLights.children[0])
            for( let light of rgbLights.children ){
                light.material = new MeshStandardMaterial();
                light.material.emissive.r = sinWave( LightData.set1.r )
                light.material.emissive.g = sinWave( LightData.set1.g )
                light.material.emissive.b = sinWave( LightData.set1.b )
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

    let camera = new PerspectiveCamera(
        75,
        WIDTH / HEIGHT,
        0.001,
        1000
    );

    const renderer = new WebGLRenderer({
        antialias: true
    });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0x303030, 1);
    renderer.shadowMap.type = VSMShadowMap

    renderer.domElement.style['position'] = "fixed";
    renderer.domElement.style['top'] = "0";
    renderer.domElement.style['z-index'] = "-1";
    renderer.domElement.style['width'] = '100%';
    renderer.domElement.style['height'] = '100%';
    renderer.shadowMap.enabled = true;
    let controls = new OrbitControls(camera, renderer.domElement);
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
    

    function sinWave(x, offset=0){
        // x is the degrees
        return Math.sin( ( x * Math.PI / 180) + offset )
    }

    let intensity = 2

    function animateRGBLights(){
        light1.color.r = sinWave( LightData.set1.r ) * intensity
        light1.color.g = sinWave( LightData.set1.g, 2 ) * intensity
        light1.color.b = sinWave( LightData.set1.b, -2 ) * intensity
        light2.color.r = sinWave( LightData.set1.r ) * intensity
        light2.color.g = sinWave( LightData.set1.g, 2 ) * intensity
        light2.color.b = sinWave( LightData.set1.b, -2 ) * intensity

        if( rgbLights ){
            for( let light of rgbLights.children ){
                light.material = new MeshStandardMaterial();
                light.material.emissive.r = sinWave( LightData.set1.r ) * 200
                light.material.emissive.g = sinWave( LightData.set1.g, 2 ) * 200
                light.material.emissive.b = sinWave( LightData.set1.b, -2 ) * 200
            }
        }

        LightData.set1.r += LightData.set1.step
        LightData.set1.g += LightData.set1.step
        LightData.set1.b += LightData.set1.step
    }

    camera.position.X = 0.75
    camera.position.Y = 0.83
    camera.position.x = 1.0520640006212119
    camera.position.y = 0.9493811008397122
    camera.position.z = 0.2253970049032800

    camera.rotation._x = -0.43239701439446665
    camera.rotation._y = 1.1125775092421613
    camera.rotation._z = 0.3924444641399651
    console.log(camera)

    window.addEventListener('resize', function(){
        camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.001,
            1000
        );
        // controls = new OrbitControls(camera, renderer.domElement);
        // document.body.appendChild(renderer.domElement);
        camera.position.x = 1.0520640006212119
        camera.position.y = 0.9493811008397122
        camera.position.z = 0.2253970049032800
        camera.rotation.y += Math.PI/2
        // camera.lookAt(0,5,0)
        // renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.style['width'] = '100%';
        renderer.domElement.style['height'] = '100%';
    })

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        animateRGBLights();
        renderer.render(scene, camera);
    }
    animate();
}

export {
    StartInstance
}