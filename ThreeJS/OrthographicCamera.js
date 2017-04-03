function init() {
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setClearColor(0x000000); // black

    // scene
    var scene = new THREE.Scene();

    // 与canvas比例相同 OrthographicCamera(left, right, top, bottom, near, far)
    // var camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10);
    var camera = new THREE.OrthographicCamera(-1, 3, 1.5, -1.5, 1, 10);

    // 修改比例
    // var camera = new THREE.OrthographicCamera(-1, 1, 1.5, -1.5, 1, 10);

    // 位置设置
    // camera.position.set(0, 0, 5);
    // camera.position.set(1, 0, 5);
    camera.position.set(4, -3, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    scene.add(camera);

    var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({
                color: 0xff0000,
                wireframe: true
            })
    );
    scene.add(cube);

    // render
    renderer.render(scene, camera);
}
