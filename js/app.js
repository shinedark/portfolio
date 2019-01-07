var camera, scene, renderer;
var  video, geometry, geometry2, material,  material2, mesh, texture, mergedGeometry;
var controls;
var snow, flakeCount, flakeArray, flakeMesh, flakeGeometry;


function init() {

  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
  controls = new THREE.OrbitControls( camera );
  camera.position.z = (Math.random() + 1) * 50;
  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 5;
  controls.panSpeed = 2;
  controls.enableZoom = true;
  
  
  scene = new THREE.Scene();

    video = document.getElementById( 'video' );
    video.autoplay  = true;
    video.loop  = true;
    video.muted= true;
    video.load();
    video.play();
    texture = new THREE.VideoTexture( video );
    texture.needsupdate = true;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    geometry2 = new THREE.BoxGeometry( 23, 23, 23 );
    material2 = new THREE.MeshBasicMaterial({map:texture});
    flakeCount = 9000;
    flakeGeometry = new THREE.BoxGeometry( 0.3, 0.3, 0.3 );
    flakeMaterial = new THREE.MeshBasicMaterial({map:texture});
    snow = new THREE.Group();
    mesh = new THREE.Mesh( geometry2, material2 );
    mesh.position.y = 10.8;
    mesh.position.x =  60;

    for (let i = 0; i < flakeCount; i++) {
      var flakeMesh = new THREE.Mesh(flakeGeometry, flakeMaterial);
      flakeMesh.position.set(
        (Math.random() + 0.9) * 10,
        (Math.random() - 0.6) * 100,
        (Math.random() - 0.9) * 10
      );
      snow.add(flakeMesh);
    }
    scene.add(snow, mesh);

    flakeArray = snow.children;

  renderer = new THREE.WebGLRenderer( { antialias: true} );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
    

}

function animate() {

  requestAnimationFrame( animate );
  
  for (i = 0; i < flakeArray.length / 2; i++) {
     flakeArray[i].rotation.y += 0.01;
     flakeArray[i].rotation.x += 0.02;
     flakeArray[i].rotation.z += 0.03;
     flakeArray[i].position.y -= 1;
     if (flakeArray[i].position.y < -6) {
       flakeArray[i].position.y += 100;
     }
   }
   for (i = flakeArray.length / 2; i < flakeArray.length; i++) {
     flakeArray[i].rotation.y -= 0.02;
     flakeArray[i].rotation.x -= 0.03;
     flakeArray[i].rotation.z -= 0.02;
     flakeArray[i].position.y -= 0.1;
     if (flakeArray[i].position.y < -6) {
       flakeArray[i].position.y += 35;
     }

     snow.rotation.y -= 0.0000009;
   }


 
  controls.update();

  renderer.render( scene, camera );

}

var video = document.getElementById('video');

document.getElementById('mute').addEventListener('click', function(e) {
  e = e || window.event;
  video.muted = !video.muted;
  e.preventDefault();
}, false);



$(document).ready(function() {

      $('.h1').addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
          function(){
            $(this).removeClass('animated bounce');
          });
      $('.hi').addClass('animated rotateIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
          function(){
            $(this).removeClass('animated rotateIn');
          });
      $('.ho').addClass('animated rotateOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
          function(){
            $(this).removeClass('animated rotateOut');
          });


      $('.start').click(function(){
        init();
        animate();
        $( ".start" ).hide( "slow", function() {
          $(".apps").show();

        });
      });


      $('.apps').click(function(){
        $('canvas').remove();
        $(".work").css("display", "block");
        
        console.log(controls);
        controls.enable = false;
        controls.enableZoom = false;
      });
});


