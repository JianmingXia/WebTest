// THREE.PerspectiveCamera(fov, aspect, near, far)
/**
透视图中，灰色的部分是视景体，是可能被渲染的物体所在的区域。fov是视景体竖直方向上的张角（是角度制而非弧度制），如侧视图所示。

aspect等于width / height，是照相机水平方向和竖直方向长度的比值，通常设为Canvas的横纵比例。

near和far分别是照相机到视景体最近、最远的距离，均为正值，且far应大于near。
*/
function init() {
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setClearColor(0x000000); // black

    // scene
    var scene = new THREE.Scene();

    // var camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 10);
    var camera = new THREE.PerspectiveCamera(60, 400 / 300, 1, 10);

    camera.position.set(0, 0, 5);
    scene.add(camera);

    // a cube in the scene
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
