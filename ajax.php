<?
$op = $_POST['opcion'];
$ur = $_POST['ur'];

if($op == "video")
{
	$vid = $_POST['vid'];
	?>
	<div id="box_consola"></div>
	<script type="text/javascript">
		jwplayer("box_consola").setup({
			file: "<? echo $ur; ?>",
			flashplayer: "includes/reproductor/player.swf",
			skin: "includes/reproductor/glow.zip",
			controlbar: "over",
			'controlbar.idlehide': "true",
			image: 'imagenes/video/<?php echo $vid; ?>',
			allowscriptaccess: "always",
			height: 360, //406
			width: 640  //720
		});	
	</script>
	<?
}
elseif($op == "audio")
{
	?>
	<div id="box_consola"></div>
	<script type="text/javascript">
		jwplayer("box_consola").setup({
			file: "<? echo $ur; ?>",
			flashplayer: "includes/reproductor/player.swf",
			//skin: "includes/reproductor/glow.zip",
			controlbar: "bottom",
			'controlbar.idlehide': "true",
			allowscriptaccess: "always",
			icons: false,
			height: 24,
			width: 209 
		});	
	</script>
	<?
}
elseif($op == "contacto")
{
	require_once('includes/class/class.phpmailer.php');

	$nombre = $_POST['f_nombre'];
	$telefono = $_POST['f_telefono'];
	$mail = $_POST['f_mail'];
	$mensaje = $_POST['f_mensaje'];
	
	$objMail = new PHPMailer(true);
	
	$objMail = new phpmailer();
	
	try { 
		$objMail->IsHTML(true);
		
		$objMail->AddAddress("carolacorrea@mi.cl","Contacto");
		$objMail->SetFrom($mail, "Contacto via Web");
		$objMail->Subject = 'Contacto via Web';
		
		$objMail->MsgHTML("Nombre: ".$nombre." <br>Telefono: ".$telefono." <br>Mail: ".$mail."<br> Mensaje: ".$mensaje);
		
		$objMail->Send();
		
		echo ' Mensaje Enviado';
		
	}
	catch (phpmailerException $e)
	{
		echo  date('Y-m-d H:i:s'). $e->errorMessage(); //Pretty error messages from PHPMailer
	}
	catch (Exception $e)
	{
		echo  date('Y-m-d H:i:s'). $e->getMessage(); //Boring error messages from anything else!
	}
}
?>