$(function(){
	$(document).ready(function(){
		var jsonLoc = [
		{
			address: 'Магазин, ул. Пушкина 21<br><a target="_blank" href="http://intor.profitserver.in.ua/">Перейти</a>',
			lat: {
				x: -33.890542,
				y: 151.274856
			},
			quest: 4,
			icon: 'store.png',
			type: 'store', 
			country: 'ukraine',
			oblast: 'kiev',
			city: 'kiev',
			UniqueNumber: '1'
		},
		{
			address: 'Мусорник, ул. Лермонтова 54а',
			lat: {
				x: -33.923036,
				y: 151.259052
			},
			quest: 5,
			icon: 'garbage.png',
			type: 'trash', 
			country: 'ukraine',
			oblast: 'kiev',
			city: 'kiev',
			UniqueNumber: '2'
		},
		{
			address: 'Мороженое, ул. Молодая 11, оф. 45',
			lat: {
				x: -33.908249,
				y: 151.157507
			},
			quest: 3,
			icon: 'ice-cream.png',
			type: 'iceCream', 
			country: 'russia',
			oblast: 'spb',
			city: 'spb',
			UniqueNumber: '3'
		},
		{
			address: 'Аптека,<br> ул. Наша 44',
			lat: {
				x: -33.90010128657071,
				y: 151.28747820854187
			},
			quest: 2,
			icon: 'placeholder.png',
			type: 'hospital', 
			country: 'ukraine',
			oblast: 'kharkiv',
			city: 'pershoe',
			UniqueNumber: '4'
		},
		{
			address: 'Экоцентр РИБР:<br> - Кривой рог, ул. Гагарина 71Д,<br> с 8:00 до 17:00, <br>перерыв с 13:00 до 14:00.',
			lat: {
				x: -33.870542,
				y: 151.234856
			},
			quest: 4,
			icon: 'store.png',
			type: 'store', 
			country: 'ukraine',
			oblast: 'rivne',
			city: 'petrovsk',
			UniqueNumber: '5'
		},
		{
			address: 'Мусорник, ул. Лермонтова 54а',
			lat: {
				x: -33.943036,
				y: 151.279052
			},
			quest: 5,
			icon: 'garbage.png',
			type: 'trash', 
			country: 'russia',
			oblast: 'moscow',
			city: 'moscow',
			UniqueNumber: '6'
		},
		{
			address: 'Мороженое, ул. Молодая 11, оф. 45',
			lat: {
				x: -33.928249,
				y: 151.177507
			},
			quest: 3,
			icon: 'ice-cream.png',
			type: 'iceCream', 
			country: 'ukraine',
			oblast: 'poltava',
			city: 'poltava',
			UniqueNumber: '7'
		},
		{
			address: 'Аптека,<br> ул. Наша 44',
			lat: {
				x: -33.91010128657071,
				y: 151.24747820854187
			},
			quest: 2,
			icon: 'placeholder.png',
			type: 'hospital', 
			country: 'ukraine',
			oblast: 'lviv',
			city: 'lviv',
			UniqueNumber: '8'
		}
		]
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 12,
			center: new google.maps.LatLng(-33.92, 151.23),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});

		var infowindow = new google.maps.InfoWindow();
		var iconBase = '../img/map/';
		var markers = [];
		var latlng ;
		var filterVal = "";
		var markerType;

		function addMarker(){
			for (i = 0; i < jsonLoc.length; i++) {  

				$(".t-geo-map-right-wrap").append("<div data-unique-number="+jsonLoc[i].UniqueNumber+" data-marker-type=" + jsonLoc[i].type + " class='t-geo-map-right-item'> " + jsonLoc[i].address + "</div>");
				latlng = new google.maps.LatLng(  jsonLoc[i].lat.x,  jsonLoc[i].lat.y );
				icon = iconBase + jsonLoc[i].icon;

				var marker = new google.maps.Marker({
					position: latlng,
					map: map,
					icon: icon
				})


				markers.push( marker );

				google.maps.event.addListener(marker, 'click', (function(marker, i) {
					return function() {
						infowindow.setContent(jsonLoc[i].address);
						infowindow.open(map, marker);	
						var center = new google.maps.LatLng(jsonLoc[i].lat.x,  jsonLoc[i].lat.y);
						map.panTo(center);
					}
				})(marker, i));

			}
		}
		addMarker();

		$(".filter-map").on("change", function () {			
			filterVal = $(this).val();
			console.log("Val = " + filterVal);
			map.setZoom(12);
			$(".t-geo-map-right-item").each(function(index){
				if($(this).attr("data-marker-type") == filterVal){
					$(this).removeClass("hidden");
				}
				 else {
					$(this).addClass("hidden");
				}
			})
			if(filterVal == "all"){
				$(".t-geo-map-right-item").removeClass("hidden");
			}
			for(i = 0; i < markers.length; i++){
				if(jsonLoc[i].type == filterVal) {
					markers[i].setVisible(true);
				} 
				else {
					markers[i].setVisible(false);
					infowindow.close();
				}
			}			
			if(filterVal == "all"){
				for(var i = 0; i < jsonLoc.length; i++){
					markers[i].setVisible(true);
				}
			}
		})

		$(".country-filter").on("change", function () {

			map.setZoom(11);
			if($(this).val() == "ukraine"){
				var center = new google.maps.LatLng(-33.95010128657071, 151.10747820854187);
			}
			if($(this).val() == "russia"){
				var center = new google.maps.LatLng(-33.88010128657071, 151.19747820854187);
			}
			
			map.panTo(center);
		});
		$(".oblast-filter").on("change", function () {
			map.setZoom(13);
			if($(this).val() == "kiev"){
				var center = new google.maps.LatLng(-33.85010128657071, 151.17747820854187);
			}
			if($(this).val() == "lviv"){
				var center = new google.maps.LatLng(-33.88010128657071, 151.14747820854187);
			}
			map.panTo(center);
		});
		$(".city-filter").on("change", function () {
			map.setZoom(13);
			if($(this).val() == "kiev"){
				var center = new google.maps.LatLng(-33.90010128657071, 151.13747820854187);
			}
			if($(this).val() == "lviv"){
				var center = new google.maps.LatLng(-33.94010128657071, 151.15747820854187);
			}
			map.panTo(center);
		});
		var uniqueNumberItem = "";
		$(".t-geo-map-right-item").click(function(){

			uniqueNumberItem = $(this).attr("data-unique-number")
			console.log(uniqueNumberItem);
			map.setZoom(13);

			for(var i = 0; i < jsonLoc.length; i++){


				if(jsonLoc[i].UniqueNumber == uniqueNumberItem){
					infowindow.close();
					var center = new google.maps.LatLng(jsonLoc[i].lat.x,  jsonLoc[i].lat.y);
					map.panTo(center);
					infowindow = new google.maps.InfoWindow({
						content: jsonLoc[i].address
					})
					infowindow.open(map,markers[i]);
				}
			}
		})
	});
});