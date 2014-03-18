<script type="text/javascript" src="js/jwplayer.js"></script>
<script type="text/javascript">
function audio(ur)
{
	//console.log(ur);
	var opcion = 'audio';
	jQuery.post("ajax.php",{opcion: opcion, ur: ur},
		function(data)
		{
			jQuery('#reproductor_rad').html(data);
		}
	);
}
</script>                       
<div class="info-izq">
   <h2>Programas de Radio</h2>
   <p class="p_first">Nuevos consejos para seguir una alimentación sana y sin hacer mayores sacrificios son los que podrás escuchar. <br />
	<br />
	<p>Seleccione aquí el Podcast a  escuchar</p>
	<select name="radio" id="radio" onchange="audio(this.value)">
        <option value="multimedia/mp3/Sobrepeso-en-Chile.mp3">Sobre peso en Chile</option>
        <option value="multimedia/mp3/Sandia.mp3">Sandia</option>
        <option value="multimedia/mp3/Nepal.mp3">Nepal</option>
        <option value="multimedia/mp3/GastronomiaPeruana.mp3">Gastronomía Peran</option>
        <option value="multimedia/mp3/CocinaMediterranea.mp3">Cocina Mediterranea</option>
        <option value="multimedia/mp3/CafeTerroir.mp3">Cafe Terroir</option>
        <option value="multimedia/mp3/AndreaVichuquen.mp3">Andrea Vichuquen</option>
    </select>
    <div id="reproductor_rad">
        <div id="box_consola"></div>
        <script type="text/javascript">
            jwplayer("box_consola").setup({
                file: "multimedia/mp3/Sobrepeso-en-Chile.mp3",
                flashplayer: "includes/reproductor/player.swf",
                //skin: "pluggins/reproductor/glow.zip",
                controlbar: "bottom",
                'controlbar.idlehide': "true",
                allowscriptaccess: "always",
                icons: false,
                height: 24,
                width: 209 
            });	
        </script>
    </div>
</div>

<div class="info-der">
  <img src="imagenes/fotopararadio.jpg" alt="Carolina Correa" width="324" height="448" />
</div>
