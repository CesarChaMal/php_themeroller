$(document).ready(function(){
	
	var switcher = $('#switcher');
	//alert(switcher)
	
	//switcher.html("");
	
	var panel = [
		{
			css: "css/theme/UI_lightness/theme.css",
			preview: "css/theme/UI_lightness/images/preview.png",
			name: "UI Lightness"
		},
		{
			css: "css/theme/UI_darkness/theme.css",
			preview: "css/theme/UI_darkness/images/preview.png",
			name: "UI Darkness"
		},
		{
			css: "css/theme/Smoothness/theme.css",
			preview: "css/theme/Smoothness/images/preview.png",
			name: "Smoothness"
		},
		{
			css: "css/theme/Start/theme.css",
			preview: "css/theme/Start/images/preview.png",
			name: "Start"
		},
		{
			css: "css/theme/Redmond/theme.css",
			preview: "css/theme/Redmond/images/preview.png",
			name: "Redmond"
		},
		{
			css: "css/theme/Sunny/theme.css",
			preview: "css/theme/Sunny/images/preview.png",
			name: "Sunny"
		},
		{
			css: "css/theme/Overcast/theme.css",
			preview: "css/theme/Overcast/images/preview.png",
			name: "Overcast"
		},
		{
			css: "css/theme/Le_Frog/theme.css",
			preview: "css/theme/Le_Frog/images/preview.png",
			name: "Le Frog"
		},
		{
			css: "css/theme/Flick/theme.css",
			preview: "css/theme/Flick/images/preview.png",
			name: "Flick"
		},
		{
			css: "css/theme/Pepper_Grinder/theme.css",
			preview: "css/theme/Pepper_Grinder/images/preview.png",
			name: "Pepper Grinder"
		},
		{
			css: "css/theme/Eggplant/theme.css",
			preview: "css/theme/Eggplant/images/preview.png",
			name: "Eggplant"
		},
		{
			css: "css/theme/Dark_Hive/theme.css",
			preview: "css/theme/Dark_Hive/images/preview.png",
			name: "Dark Hive"
		},
		{
			css: "css/theme/Cupertino/theme.css",
			preview: "css/theme/Cupertino/images/preview.png",
			name: "Cupertino"
		},
		{
			css: "css/theme/South_Street/theme.css",
			preview: "css/theme/South_Street/images/preview.png",
			name: "South St"
		},
		{
			css: "css/theme/Blitzer/theme.css",
			preview: "css/theme/Blitzer/images/preview.png",
			name: "Blitzer"
		},
		{
			css: "css/theme/Humanity/theme.css",
			preview: "css/theme/Humanity/images/preview.png",
			name: "Humanity"
		},
		{
			css: "css/theme/Hot_Sneaks/theme.css",
			preview: "css/theme/Hot_Sneaks/images/preview.png",
			name: "Hot Sneaks"
		},
		{
			css: "css/theme/Excite_Bike/theme.css",
			preview: "css/theme/Excite_Bike/images/preview.png",
			name: "Excite Bike"
		},
		{
			css: "css/theme/Vader/theme.css",
			preview: "css/theme/Vader/images/preview.png",
			name: "Vader"
		},
		{
			css: "css/theme/Dot_Luv/theme.css",
			preview: "css/theme/Dot_Luv/images/preview.png",
			name: "Dot Luv"
		},
		{
			css: "css/theme/Mint_Choc/theme.css",
			preview: "css/theme/Mint_Choc/images/preview.png",
			name: "Mint Choc"
		},
		{
			css: "css/theme/Black_Tie/theme.css",
			preview: "css/theme/Black_Tie/images/preview.png",
			name: "Black Tie"
		},
		{
			css: "css/theme/Troncastic/theme.css",
			preview: "css/theme/Troncastic/images/preview.png",
			name: "Trontastic"
		},
		{
			css: "css/theme/Swanky_Purse/theme.css",
			preview: "css/theme/Swanky_Purse/images/preview.png",
			name: "Swanky Purse"
		},
		{
			css: "css/theme/mitema/theme.css",
			preview: "css/theme/mitema/images/preview.jpg",
			name: "Mi Tema Personalizado"
		}
	];
	
	var opciones = 
	{
		loadTheme: null,
		initialText: 'Cambia El Tema',
		width: 300,
		height: 200,
		buttonPreText: 'Tema: ',
		closeOnSelect: true,
		buttonHeight: 14,
		themes: panel
		//cookieName: 'jquery-ui-theme',
		//onOpen: function(){},
		//onClose: function(){},
		//onSelect: function(){}
	}
	
	switcher.themeswitcher(opciones);

	$("#dialog").dialog();

});
