<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Prensa - Carola Correa</title>
<script type="text/javascript" src="../js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="../js/jqueryui.js"></script>
<script type="text/javascript" src="../js/jquery.mousewheel.min.js"></script>
<script type="text/javascript" src="../js/jquery.iviewer.js"></script>
<script type="text/javascript">
<?php
$imagen = $_GET['img'];
if($imagen == "")
{
	$imagen = "001.jpg";
}
?>
var $ = jQuery;
$(document).ready(function(){
	   $("#in").click(function(){ iv1.iviewer('zoom_by', 1); }); 
	   $("#out").click(function(){ iv1.iviewer('zoom_by', -1); }); 
	   $("#fit").click(function(){ iv1.iviewer('fit'); }); 
	   $("#orig").click(function(){ iv1.iviewer('set_zoom', 100); }); 
	   $("#update").click(function(){ iv1.iviewer('update_container_info'); });

	  var iv2 = $("#viewer2").iviewer(
	  {
		  src: "../imagenes/prensa/<?php echo $imagen; ?>"
	  });
});
</script>
<link href="../css/jquery.iviewer.css" rel="stylesheet" type="text/css"  />
<style>
*{
	margin: 0px;
	padding: 0px;
}
#wan
{
	width: 600px; 
	height: 600px;
	margin: 0px auto; 
	overflow:hidden; 
	position:relative; 
	display:block; 
}
.viewer
{
	width: 598px;
	height: 590px;
	/* border: 1px solid black; */
	position: relative;
}
</style>
</head>
<body>
<div id="wan">
	<div id="viewer2" class="viewer"></div>
</div>
</body>
</html>