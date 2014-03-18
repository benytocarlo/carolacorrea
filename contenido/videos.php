<!--<script type="text/javascript" src="js/jcarousellite_1.0.1.min.js"></script>-->
<script type="text/javascript" src="js/jwplayer.js"></script>
<script type="text/javascript">
/*
jQuery(document).ready(function(e) {
    jQuery(".cajitas-videos").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
		visible: 4
    });
});
*/
function video(ur, vid)
{
	console.log(ur);
	var opcion = 'video';
	jQuery.post("ajax.php",{opcion: opcion, ur: ur, vid: vid},
		function(data)
		{
			jQuery('.video-play').html(data);
		}
	);
}
</script>

<div class="info-cen">
     <h2> Programa Sabor TV</h2>
     <div class="video-play">
		<div id="box_consola"></div>
		<script type="text/javascript">
            jwplayer("box_consola").setup({
                file: "multimedia/videos/video01.flv",
                flashplayer: "includes/reproductor/player.swf",
                skin: "includes/reproductor/glow.zip",
                controlbar: "over",
                'controlbar.idlehide': "true",
                allowscriptaccess: "always",
                image: 'imagenes/video/pantallaso-seccion-video.png',
                height: 360, //406
                width: 640  //720
            });	
        </script>
    </div>
    
    <!--<div id="carrusel">
        <a href="javascript:;" class="prev"></a>
        <div class="cajitas-videos">
            <ul>
                <li><img src="imagenes/video01.jpg" onclick="video('multimedia/videos/video01.flv','pantallaso-seccion-video.png')" alt="Video" width="66" height="45" /></li>
                <li><img src="imagenes/video02.jpg" onclick="video('multimedia/videos/video02.flv','pantallaso-seccion-video-02.png')" alt="Video" width="66" height="45" /></li>
                <li><img src="imagenes/video03.jpg" onclick="video('multimedia/videos/video03.flv','pantallaso-seccion-video-03.png')" alt="Video" width="66" height="45" /></li>
                <li><img src="imagenes/video04.jpg" onclick="video('multimedia/videos/video04.flv','pantallaso-seccion-video-04.png')" alt="Video" width="66" height="45" /></li>
                <li><img src="imagenes/video05.jpg" onclick="video('multimedia/videos/video05.flv','pantallaso-seccion-video-05.png')" alt="Video" width="66" height="45" /></li>
                <li><img src="imagenes/video06.jpg" onclick="video('multimedia/videos/video06.flv','pantallaso-seccion-video-06.png')" alt="Video" width="66" height="45" /></li>
                <li><img src="imagenes/video07.jpg" onclick="video('multimedia/videos/video07.flv','pantallaso-seccion-video-07.png')" alt="Video" width="66" height="45" /></li>
            </ul>
        </div>
        <a href="javascript:;" class="next"></a>
	</div>        -->
</div>


<!--<div class="info-der">
	<img src="imagenes/detalles-deco.jpg" alt="Carolina Correa" width="324" height="448" />
</div>-->