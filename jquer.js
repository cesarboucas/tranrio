
//var patt = /( centro| perimetral|praia de botafogo| Freguesia|sernambetiba|praia da barra|niemeyer|Jardim Botanico|tijuca|copacabana|leme|gávea|gavea|ipanema|leblon|madureira|rocinha| zuzu angel|Av. Brasil|Av Brasil|Pres Vargas|Pres. Vargas| Ponte|Ilha|Barra|MHS|Mario Henrique Simonsen|francisco bicalho|via parque|Américas|americas|Barra Garden)/i;
//var geocoder = new google.maps.Geocoder();

var patt;
var locals = [];
var coords = [];

function load() {

            var map = new google.maps.Map(document.getElementById("map"), {
                center: new google.maps.LatLng(-22.9, -43.29),
                zoom: 12,
                mapTypeId: 'roadmap'
            });

            var trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);

            var infoWindow = new google.maps.InfoWindow({ maxWidth: 200 });

			  /*$.ajax({
					type: "GET",
					url: "Locshh.txt",
					dataType: "text",
					success: function(allText) {
						var allTextLines = allText.split(/\r\n|\n/);
						for (var i=0; i<allTextLines.length; i++) {

							var data = allTextLines[i].split(';');
							locals[i] = data[0];
							coords[i] = data.length > 0 ? data[1] : null;
						}

						patt = new RegExp("(" + locals.join("|") + ")", "i");
						//alert("(" + coords.join("|") + ")");
					}
        });*/

        var allText = `av. brasil;-22.864155,-43.431413
av brasil;-22.864155,-43.431413
pres vargas;-22.902981,-43.185024
pres. vargas;-22.902981,-43.185024
persvargas;-22.902981,-43.185024
 ponte;-22.870027,-43.16533
 ilha;-22.803402,-43.200989
 andarai;
 andaraí;
 tijuca;-22.937843,-43.243932
vila isabel;
vilaisabel;-22.914682,-43.249926
 arpoador;
 copacabana;-22.963609,-43.181275
 leme;-22.961871,-43.17149
 ipanema;-22.982891,-43.204729
 madureira;-22.8723,-43.336787
 leblon;-22.982417,-43.223652
 gavea;-22.979256,-43.230092
 gávea;-22.979256,-43.230092
sao conrado;-22.998457,-43.267472
 rocinha;-22.9902,-43.245585
 niemeyer;-22.999029,-43.249873
abelardo;-22.972934,-43.384522
riocentro;-22.979335,-43.410086
 americas ;-22.999839,-43.357722
 iraja;
 irajá;
guadalupe;-22.841929,-43.372406
coelho neto;-22.830855,-43.350348
vista alegre;
vistaalegre;
bairro peixoto;
bairropeixoto;
boca do mato;
engenho de dentro;
eng de dentro;
eng. de dentro;
lins de vasconcelos;
méier;-22.899027,-43.283436
meier;-22.899027,-43.283436
maracana;-22.910492,-43.227181
maracanã;-22.910492,-43.227181
linha vermelha;-22.820175,-43.250482
linha amarela;-22.898316,-43.306787
barra music;-22.959322,-43.356453
engenho novo;
campo dos afonsos;
vila militar;
castelo;
centro;-22.908594,-43.17664
colônia;
taquara;
consolação;
grajaú;
engenho novo;
eng. novo;
eng novo;
água santa;
pavuna;-22.807517,-43.363236
curicica;-22.960448,-43.391579
freguesia;-22.939978,-43.343775
taquara;-22.92235,-43.386067
cidade de deus;-22.947961,-43.362206
cdd;-22.947961,-43.362206
fátima;
centro;-22.90891,-43.177155
botafogo;-22.953177,-43.18797
costa barros;
cascadura;
quintino;
lagoa;-22.976411,-43.219027
horto;
jardim botânico;-22.966415,-43.219639
jardim botanico;-22.966415,-43.219639
jabour;
bangu;-22.858065,-43.466648
campo grande;-22.879655,-43.564279
senador camará;
jardim boiúna;
jardim oceânico;-23.007029,-43.308713
 barra ;-22.992847,-43.364465
ayrton senna;-22.983365,-43.365811
citta;-23.003493,-43.322486
santa cruz;-22.89452,-43.681064
santacruz;-22.89452,-43.681064
aterro;-22.926856,-43.171935
largo do machado;
catete;-22.92488,-43.179152
gloria;-22.920868,-43.173741
glória;-22.920868,-43.173741
flamengo;-22.932508,-43.174388
paciência;
mallet;
realengo;
mariópolis;
anchieta;
mato alto;
praça seca;-22.897841,-43.350005
praca seca;-22.897841,-43.350005
tanque;
alto da boa vista;
praça do carmo;
vila da penha;-22.842483,-43.312582
rio bonito;
recreio;-23.019708,-43.459222
rio das pedras;
anil;
itanhangá;-22.986684,-43.3047
itanhanga;-22.986684,-43.3047
rio grande;
cosme velho;
santa teresa;-22.916974,-43.188485
triagem;
usina;
vila aliança;
vila kennedy;
jardim carioca;
dutra;-22.746185,-43.446307
nova iguaçu;-22.746185,-43.446307
nova iguaçu\\W+(?:\\w+\\W+)*Carrefour;-22.759047,-43.427717
meriti;-22.793907,-43.363147
caxias;-22.802136,-43.293796
niteroi;-22.868583,-43.106342
niterói;-22.868583,-43.106342
icaraí;-22.90721,-43.112504
icarai;-22.90721,-43.112504
manilha;-22.881394,-43.081269
fonseca;-22.881394,-43.081269
via parque;-22.982822,-43.36556
francisco bicalho;-22.906222,-43.209493
mario henrique simonsen;-22.999859,-43.347312
 mhs;-22.999859,-43.347312
barra garden;-22.999859,-43.347312
 américas;-22.999918,-43.355748
 americas;-22.999918,-43.355748
 niemeyer;-22.999029,-43.249873
praia de botafogo;-22.944048,-43.181169
praia da barra|sernambetiba;-23.010781,-43.331115
freguesia;-22.939385,-43.344118
jardim botanico;-22.966415,-43.219639
via light;-22.77712,-43.423408`;
         //$.get("Locshh.txt").done(function(allText) {
 						var allTextLines = allText.split(/\r\n|\n/);
 						for (var i=0; i<allTextLines.length; i++) {

 							var data = allTextLines[i].split(';');
 							locals[i] = data[0];
 							coords[i] = data.length > 0 ? data[1] : null;
 						}
 						patt = new RegExp("(" + locals.join("|") + ")", "i");
 				 //});


			var leisecaLastTweet = 0;

			setInterval(function(){

				//alert(leisecaLastTweet);

				$.getJSON("twitterTimeline.php?twitter=leisecarj&count=20&since_id=" + leisecaLastTweet,
					function(twits) {

						//alert(twits.length);

						for (i = 0; i < twits.length; i++) {
							var text = twits[i].text;
							var anime = (text.indexOf("#RESUMOBOLS") >= 0 || text.indexOf("#BOLS") >= 0) ? google.maps.Animation.BOUNCE : google.maps.Animation.DROP;
							mark(twits[i], anime, map, infoWindow, "leisecarj");
						}
            if (i > 0)
						      leisecaLastTweet = twits[0].id;
				});

				// $.getJSON("twitterTimeline.php?twitter=CETRIO_ONLINE&count=10",
					// function(twits) {
						// for (i = 0; i < twits.length; i++) {
							// mark(twits[i], google.maps.Animation.DROP, map, infoWindow, "cetrio_online");
						// }
				// });
			},1000);
  }

		function mark(twit, anime, map, infoWindow, username)
		{
			var text = twit.text;
			var address = twit.location;
			var coordinates = twit.coordinates;
			var time = new Date(twit.created_at).toLocaleString();

			if(coordinates == null)
			{
				var mats = text.match(patt);

				if (mats != null && mats.length > 0)
				{
					mark2(time, text, getPos(mats[0].toLowerCase(), text), anime, map, infoWindow, username);
				}
			}
			else
			{
				mark2(time, text, new google.maps.LatLng(parseFloat(coordinates[0]), parseFloat(coordinates[1])), anime, map, infoWindow, username);
			}
		}

		function mark2(time, text, pos, anime, map, infoWin, username)
		{
			var marker = new google.maps.Marker({
											map: map,
											position: pos,
											//position: results[0].geometry.location//,
											//icon: 'http://labs.google.com/ridefinder/images/mm_20_blue.png',
											animation:anime
										});

			var html = "<b style='color:#000000'>" + time + "</b> <hr/><p><b style='color:blue'>@" + username + ": </b>" + text + "</p>";
			bindInfoWindow(marker, map, infoWin, html);
		}

		function getPos(local, text)
		{
			var i = locals.indexOf(local);

			if ((i < 0) || coords == null)
			{
				alert(local + (i < 0) ? " i<0" : "coords null");
				return null;
			}

			var latlon = coords[i].split(",");
			return new google.maps.LatLng(parseFloat(latlon[0]), parseFloat(latlon[1]))

			// var geoc;
			// geocoder.geocode({ 'address': local }, function (results, status) {
			   // if (status == google.maps.GeocoderStatus.OK) {
					// geoc = results[0].geometry.location;
					// alert(geoc.latLng);
				// } else {
					// alert('Geocode was not successful for the following reason: ' + status);
				// }
			// });
			// return geoc;
		}

        function downloadUrl(url, callback) {
            var request = window.ActiveXObject ?
                new ActiveXObject('Microsoft.XMLHTTP') :
                new XMLHttpRequest;

            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    request.onreadystatechange = doNothing;
                    callback(request, request.status);
                }
            };

            request.open('GET', url, true);
            request.send(null);
        }

        function bindInfoWindow(marker, map, infoWindow, html) {
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent(html);
                infoWindow.open(map, marker);
            });
        }

        function doNothing() { }
