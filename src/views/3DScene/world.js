import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    // BoxGeometry,
    // Mesh,
    // MeshNormalMaterial,
    AmbientLight,
    // DirectionalLight,
    SpotLight,
    SpotLightHelper,
    VSMShadowMap
} from 'three';
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

class sceneInstance {
    constructor() {
        this.loader = new GLTFLoader();
        this.scene = new Scene();
        this.sceneObjects = []
        this.renderer = new WebGLRenderer({
            antialias: true
        });
    }
    addObject(sceneObject) {
        if (typeof sceneObject == 'string') {
            // this means its a url
            try {
                // checks the extension
                let ext = sceneObject.split('/').at(-1).split('.')[1]
                if (ext == 'glb' || ext == 'gltf') {
                    sceneObject = this.loader.load(sceneObject, function (gltf) {
                        gltf.recieveShadow = true;
                        gltf.castShadow = true;
                        this.scene.add(gltf);
                        this.sceneObjects.push(gltf);
                    }, function (error) {
                        console.log(error);
                    });
                    return this.sceneObjects.at(-1);
                } else {
                    throw new Error("This is not a 'glb' or 'gltf' file");
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                this.scene.add(sceneObject);
                this.sceneObjects.push(sceneObject);
                return sceneObject
            } catch (e) {
                console.log(e);
            }
        }
    }
    addCamera(cam){
        if( cam instanceof PerspectiveCamera ){
            this.camera = cam
        } else {
            throw new Error("This is not a camera");
        }
    }
    useOrbitControls(){
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }
    setRenderer(){
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 1);
        this.renderer.domElement.style['position'] = "absolute";
        this.renderer.domElement.style['top'] = "0";
        this.renderer.domElement.style['z-index'] = "-1";
    }
    start() {
        this.setRenderer()
        document.body.appendChild(this.renderer.domElement);

        let extras = [];

        if(this.controls){
            extras.push(this.controls.update)
        }

        function render() {
            requestAnimationFrame(render);
            // console.log(camera.position)
            for( let func in extras ){
                extras[func]()
            }
            this.renderer.render(this.scene, this.camera);
        }
        render();
    }
}

function StartInstance() {
    const loader = new GLTFLoader();

    const scene = new Scene();
    const light = new AmbientLight( 0x404040, 0.3 ); // soft white light
    scene.add( light );

    const directionalLight = new SpotLight(0xffffff, 0.3);
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    directionalLight.shadow.camera.near = 0.5
    directionalLight.shadow.camera.far = 25
    directionalLight.shadow.blurSamples = 7
    directionalLight.shadow.radius = 5
    directionalLight.castShadow = true;
    console.log(directionalLight)
    directionalLight.position.set(0, 1.28, 0.3);
    directionalLight.angle = 1
    scene.add(directionalLight);

    const lightHelper = new SpotLightHelper( directionalLight );
    scene.add( lightHelper )

    loader.load(
        'https://raw.githubusercontent.com/solocyberengineer/assets/main/DevRoom.glb',
        function (gltf) {
            gltf.castShadow = true
            console.log(gltf)

            for( let obj of gltf.scene.children ){
                obj.castShadow = true;
                obj.receiveShadow = true;
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
        0.1,
        1000
    );

    const renderer = new WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
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
    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        controls.update()

        // console.log(camera.position)

        renderer.render(scene, camera);
    }
    animate();
}

export {
    StartInstance,
    sceneInstance
}