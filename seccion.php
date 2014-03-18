<div id="sub_wrapper">
	<?php 
	$con = $_GET['con']; // Contenido
	
	switch($sec)
	{
		case 1: 
			$menu = "carola.html";
			$carpeta = "contenido/carola/";
			break;
			
		case 2:
			$carpeta = "contenido/";
			break;
			
		case 3:
			$menu = "datos.html";
			$carpeta = "contenido/datos/";
			break;
				
		case 4:
			$menu = "video.php";
			$carpeta = "contenido/";
			break;
		
		case 5:
			$menu = "talleres.html";
			$carpeta = "contenido/";
			break;
		
		case 6:
			$carpeta = "contenido/";
			break;
		
		case 21:
			$menu = "recetas-navidad.html";
			$carpeta = "contenido/recetas/1_navidad/";
			$com = 1;
			break;	
		
		case 22:
			$menu = "carnes-y-pescados.html";
			$carpeta = "contenido/recetas/2_carnes/";
			$com = 1;
			break;	
			
		case 23:
			$menu = "verduras-y-pastas.html";
			$carpeta = "contenido/recetas/3_verduras/";
			$com = 1;
			break;	
		
		case 24:
			$menu = "ninos.html";
			$carpeta = "contenido/recetas/4_ninos/";
			$com = 1;
			break;	
		
		case 25:
			$menu = "dulces.html";
			$carpeta = "contenido/recetas/5_dulces/";
			$com = 1;
			break;
		
		case 26:
			$menu = "sopas_y_cremas.html";
			$carpeta = "contenido/recetas/6_sopas/";
			$com = 1;
			break;	
		
		case 27:
			$menu = "gui.html";
			$carpeta = "contenido/recetas/7_guisos/";
			$com = 1;
			break;						
			
		case 31:
			$menu = "datos-practicos-decoracion.html";
			$carpeta = "contenido/datos/";
			$com = 1;
			break;
			
		case 32:
			$menu = "datos-practicos-cocina.html";
			$carpeta = "contenido/datos/";
			$com = 1;
			break;
						
	}
	if($menu != "")
	{	
		
		include("menu/".$menu);
	}
	
	include($carpeta.$con);
	
	if($com == 1)
	{
		include('comentario.php');
	}
	?>
</div>