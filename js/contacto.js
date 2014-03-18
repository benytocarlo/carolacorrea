// JavaScript Document
// Escrito por German Romero C

jQuery(document).ready(function(){
	jQuery('#enviar').click(function(){
		var f_nombre = jQuery("#Nombre").val();
		var f_telefono = jQuery("#telefono").val();
		var f_mail = jQuery("#email").val();
		var f_mensaje = jQuery("#comentarios").val();
		
		var x = 0;
		var men = " * Verifique los siguientes campos: <br /><br />";
		
		if(f_nombre == "")
		{
			men = men "- Nombre <br />";
			x  ;
		}
		
		
		if(f_mail == "")
		{
			men = men "- E-Mail <br />";
			x  ;
		}
		else
		{
			var filter=/^[a-zA-Z]([\w\.-]*)@[a-z]([\w-][^\._@]*)\.([a-z]{2,4}([\.][a-z]{2})*)$/;
			if (!filter.test(f_mail))
			{
				//jQuery("#lb2_contenido5").append('<div id="falta2">* Correo Invalido</div>');
				men = men "- Mail Invalido <br />";
				x  ;
			}
		}
		
		if(f_mensaje == "")
		{
			men = men "- Mensaje <br />";
			x  ;
		}
		
		
		if(x == 0)
		{
			jQuery.post("ajax.php",{opcion: 'contacto',f_mensaje: f_mensaje, f_telefono: f_telefono, f_mail: f_mail,f_mensaje: f_mensaje},
				function(data)
				{	
					jQuery(".txt_bajada_contacto").hide();
					jQuery("#cont_formulario_contacto").html('<div class="txt_bajada_contacto">' data '</div>');				
				}
			);
		}
		else{
			//alert(men);	
			jQuery("#alerta").html(men);
		}
	});
	
	jQuery('#borrar').click(function(){
		jQuery("#Nombre").val('');
		jQuery("#telefono").val('');
		jQuery("#email").val('');
		jQuery("#comentarios").val('');
	});
});