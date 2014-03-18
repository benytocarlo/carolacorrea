<?php include('header.php'); ?>
<script>
jQuery(document).ready(function(){
	jQuery('.pg1').css('color','#017601');	
});

function next(x,t)
{
	for(y=1; y <= t; y++)
	{
		jQuery('.pg'+y).css('color','#96336F');
		jQuery('#item'+y).hide();
	}
	jQuery('.pg'+x).css('color','#017601');
	jQuery('#item'+x).show();
}
</script>      
  <div class="contenedor-busqueda">
  	 <div class="Titulo-busqueda">Resultado de la Búsqueda</div>

<?php
$texto = $_POST['texto'];

if($texto != "")
{
	$dir1 = "./contenido/recetas/1_navidad/";
	$dir2 = "./contenido/recetas/2_carnes/";
	$dir3 = "./contenido/recetas/3_verduras/";
	$dir4 = "./contenido/recetas/4_ninos/";
	$dir5 = "./contenido/recetas/5_dulces/";
	$dir6 = "./contenido/recetas/6_sopas/";
	$dir7 = "./contenido/recetas/7_guisos/";
	
	$directorio = opendir($dir1);

	$x = 1;
	$g = 1;
	$y = 0;


	while (false !== ($archivo = readdir($directorio)))
	{

		if ($archivo != '.' && $archivo != '..' && ereg('.php',strtolower($archivo))) 
		{
			$res[] = buscar($dir1, $archivo, $texto);			
		}
	}
	
	$directorio = opendir($dir2);
	while (false !== ($archivo = readdir($directorio)))
	{

		if ($archivo != '.' && $archivo != '..' && ereg('.php',strtolower($archivo))) 
		{
			$res[] = buscar($dir2, $archivo, $texto);	
		}
	}
	
	$directorio = opendir($dir3);
	while (false !== ($archivo = readdir($directorio)))
	{

		if ($archivo != '.' && $archivo != '..' && ereg('.php',strtolower($archivo))) 
		{
			$res[] = buscar($dir3, $archivo, $texto);	
		}
	}
	
	$directorio = opendir($dir4);
	while (false !== ($archivo = readdir($directorio)))
	{

		if ($archivo != '.' && $archivo != '..' && ereg('.php',strtolower($archivo))) 
		{
			$res[] = buscar($dir4, $archivo, $texto);	
		}
	}

	$directorio = opendir($dir5);
	while (false !== ($archivo = readdir($directorio)))
	{

		if ($archivo != '.' && $archivo != '..' && ereg('.php',strtolower($archivo))) 
		{
			$res[] = buscar($dir5, $archivo, $texto);	
		}
	}
	
	$directorio = opendir($dir6);
	while (false !== ($archivo = readdir($directorio)))
	{

		if ($archivo != '.' && $archivo != '..' && ereg('.php',strtolower($archivo))) 
		{
			$res[] = buscar($dir6, $archivo, $texto);	
		}
	}
	
	$directorio = opendir($dir7);
	while (false !== ($archivo = readdir($directorio)))
	{

		if ($archivo != '.' && $archivo != '..' && ereg('.php',strtolower($archivo))) 
		{
			$res[] = buscar($dir7, $archivo, $texto);	
		}
	}
	

	foreach($res as $r)
	{
		if($r != "")
		{
			if($x == 1)
			{
				$y++;
				if($g >= 7)
				{
					echo  '
					<div id="item'.$y.'" class="ttt" style="display: none;">
					';
				}
				else
				{
					echo  '
					<div id="item'.$y.'" class="ttt">
					';
				}
			}
			echo $r;			
			$x++;
			$g++;
			if($x == 7)
			{
				echo '</div>';
				$x = 1;
			}
			
		}
	}
	
	
	if($x != 1 && $x != 7)
	{
		echo '</div>';
	}

}

$t = ceil($g / 6);
?>
          
        <div class="indice"> 
        <?
            if($t != 0)
            {
                echo '<div id="tpag">Pagina</div>';
            }
            for($x=1;$x <= $t; $x++)
            {
    
                echo '<div onclick="javascript: next(\''.$x.'\',\''.$t.'\')" class="tpnum pg'.$x.'">'.$x.'</div>';
            }
        ?>
		</div>
	</div>

<?
include('footer.php');


/*********************************************************************************************/
//                        Realiza la Busqueda
/*********************************************************************************************/

function buscar($dir, $archivo, $texto)
{
	//$archivo = './contenido/recetas/2_carnes/'.$archivo;
	//echo $dir.$archivo.'<br>';
	$nomarchivo = $archivo;
	$archivo = $dir.$archivo;
	$doc = new DOMDocument();
	@$doc->loadHTMLFile($archivo);
	
	//$elements = $doc->getElementsByTagName('div');
	$elements = $doc->getElementsByTagName('p');
		
	if (!is_null($elements)) 
	{
  		foreach ($elements as $element) 
		{
			$element->nodeName;
		    $nodes = $element->childNodes;
    		
			foreach ($nodes as $node) 
			{
	  			$cadena .= $node->nodeValue;	  
    		}
		}
	}
	
	$elements2 = $doc->getElementsByTagName('h2');
	if (!is_null($elements2)) 
	{
		foreach ($elements2 as $element2) 
		{
			$element2->nodeName;
		    $nodes2 = $element2->childNodes;
			
			foreach ($nodes2 as $node2) 
			{
				$titulo = $node2->nodeValue; //Tomara el ultimo	
    		}
			
		}
	}
	
	
	if (preg_match("/".$texto."/i", $cadena)) 
	{
		if($dir == "./contenido/recetas/1_navidad/")
		{
			$z = 21;
		}
		elseif($dir == "./contenido/recetas/2_carnes/")
		{
			$z = 22;
		}
		elseif($dir == "./contenido/recetas/3_verduras/")
		{
			$z = 23;
		}
		elseif($dir == "./contenido/recetas/4_ninos/")
		{
			$z = 24;
		}
		elseif($dir == "./contenido/recetas/5_dulces/")
		{
			$z = 25;
		}
		elseif($dir == "./contenido/recetas/6_sopas/")
		{
			$z = 26;
		}
		elseif($dir == "./contenido/recetas/7_guisos/")
		{
			$z = 27;
		}
		$uri = "index.php?sec=".$z."&con=".$nomarchivo;
		
		/**********************  Trae Imagen  ************************/
		
		require_once("includes/class/snoopy.class.php");
		require_once("includes/class/htmlsql.class.php");
		
		$wsql = new htmlsql();
		
		// connect to a file
		if (!$wsql->connect('file', $archivo)){
			print 'Error while connecting: ' . $wsql->error;
			exit;
		}
		
		if (!$wsql->query('SELECT * FROM img')){
			print "Query error: " . $wsql->error; 
			exit;
		}
	
		foreach($wsql->fetch_array() as $row){
		
			//print_r($row);
			//echo $row['src'].'<br>';
			$urimg = $row['src'];
		}
		/*************************************************************/
		
		$htm = '
				<div class="listado1">
					<div class="foto">
						<img src="'.$urimg.'" width="80" height="80" />
					</div>
				
					<div class="titulo">
						<h2><a class="linkbusqueda" href="'.$uri.'">'.utf8_decode($titulo).'</a></h2>
					</div>
				</div>
			';
	} 
	else 
	{
		$htm = '';//'<a href="'.$archivo.'">'.$titulo."</a> - No Encontrado<br />";
	}
	
	return $htm;
}
?>