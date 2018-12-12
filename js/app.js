var camera, scene, renderer;
var  video, geometry, material, mesh, texture, mergedGeometry;


function init() {

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  camera.position.z = 1;

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
    geometry = new THREE.BoxGeometry( 0.6, 0.6, 0.6 );
    mergedGeometry = new THREE.Geometry();
    material = new THREE.MeshBasicMaterial({map:texture});


    for (var i = 0; i < 5000; i++) {

        var x = Math.random() * 50 - 25;
        var y = Math.random() * 50 - 25;
        var z = Math.random() * 50 - 25;

        geometry.translate(x, y, z);

        mergedGeometry.merge(geometry);

        geometry.translate(-x, -y, -z);
    }


  mesh = new THREE.Mesh( mergedGeometry, material );
  scene.add( mesh);

  renderer = new THREE.WebGLRenderer( { antialias: true} );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
    

}

function animate() {

  requestAnimationFrame( animate );

  mesh.rotation.x += 0.001;
  mesh.rotation.y += 0.002;

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
      });
});


