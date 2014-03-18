// JavaScript Document // Escrito por German Romero C

jQuery(document).ready(function(e) {
	jQuery('#slider').nivoSlider();
	
	jQuery("#btnbus").click(function(){
		jQuery("#busqueda").submit();
	});
	
	var vsec = jQuery("#vsec").html();
	var vcon = jQuery("#vcon").html();
	var vpag = jQuery("#vpag").html();
	
	jQuery('.menu_g a').each(function(){
		var atr = jQuery(this).attr('href');

		if(atr == "index.php?sec="+vsec+"&con="+vcon)
		{
			jQuery(this).css('color','#017601');
		}
		else if(atr == "index.php?sec="+vsec+"&p="+vpag+"&con="+vcon)
		{
			jQuery(this).css('color','#017601');
		}
	});
	
	if(vsec == "")
	{
		jQuery("#mnu03").css("background-image","url(theme/home_on.jpg)");
	}
	else if(vsec == 1)
	{
		jQuery("#mnu04").css("background-image","url(theme/caro_on.jpg)");
	}
	else if(vsec == 2 || vsec == 21 || vsec == 22 || vsec == 23 || vsec == 24 || vsec == 25 || vsec == 26 || vsec == 27)
	{
		jQuery("#mnu05").css("background-image","url(theme/recetas_on.jpg)");
	}
	else if(vsec == 3 || vsec == 31 || vsec == 32)
	{
		jQuery("#mnu06").css("background-image","url(theme/datos_on.jpg)");
	}
	else if(vsec == 4)
	{
		jQuery("#mnu07").css("background-image","url(theme/videos_on.jpg)");
	}
	else if(vsec == 5)
	{
		jQuery("#mnu08").css("background-image","url(theme/talleres_on.jpg)");
	}
	else if(vsec == 6)
	{
		jQuery("#mnu09").css("background-image","url(theme/contacto_on.jpg)");
	}
	
	
	jQuery('#num01').click(function(){
		hidemenu();
		jQuery('.smenu01').show();
		jQuery('#num01').css('color','#017601');
	});
	
	jQuery('#num02').click(function(){
		hidemenu();
		jQuery('.smenu02').show();
		jQuery('#num02').css('color','#017601');
	});
	
	jQuery('#num03').click(function(){
		hidemenu();
		jQuery('.smenu03').show();
		jQuery('#num03').css('color','#017601');
	});
	jQuery('#num04').click(function(){
		hidemenu();
		jQuery('.smenu04').show();
		jQuery('#num04').css('color','#017601');
	});
	
	if(vpag == 0)
	{
		vpag = 1;
	}
	
	jQuery('.smenu0'+vpag).show();
	jQuery('#num0'+vpag).css('color','#017601');
});

function hidemenu()
{
	for(x=1;x<5;x  )
	{
		jQuery('.smenu0'+x).hide();
		jQuery('#num0'+x).css('color','#96336F');
	}
}

