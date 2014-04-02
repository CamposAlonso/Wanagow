//Esta es la variable que es resivida por la ventana index
var args = arguments[0] || {};
$.txtnombrew.value =args.nombre;
$.txtPasswordw.value = args.password;
$.txtconfirmew.value = args.password;
$.txtapellidow.value = args.apellidos;
$.txtEmailw.value = args.email;

var IMG_BASE = 'http://alonsocampos.net46.net/';

 //Array to store the data from the todo list 
       var dataArray = [];        
       //We execute the function to show the data for the first view         
       function getTodoList () { 
       //function to use HTTP to connect to a web server and transfer the data. 
              var sendit = Ti.Network.createHTTPClient({ 
                     onerror: function(e){ 
                           Ti.API.debug(e.error); 
                           alert('There was an error during the connection'); 
                     }, 
                  timeout:1000, 
              });
              var preferencias = 
    			{
    				email: args.email, 
    				cultural:args.cultural,
    				ballet:args.ballet,
    				
    				teatro:args.teatro,
    				comedia:args.comedia,
    				drama:args.drama,
    				infantilC:args.infantilC,
    				musical:args.musical,
    				otrosT:args.otrosT,
    				
    				circo:args.circo,
    				
    				exposicion:args.exposicion,
    				fotografia:args.fotografia,
    				escultura:args.escultura,
    				pintura:args.pintura,
    				libros:args.libros,
    				otrosE:args.otrosE,
    				
    				cinearte:args.cinearte,
    				
    				musica:args.musica,
    				clasica:args.clasica,
    				instrumental:args.instrumental,
    				folklorepopular:args.folklorepopular,
    				
    				turistico:args.turistico,
    				ferias:args.ferias,
    				carnavales:args.carnavales,
    				peregrinaciones:args.peregrinaciones,
    				fiestasReligiosasIndigenas:args.fiestasReligiosasIndigenas,
    				otrosTuristica:args.otrosTuristica,
    				
    				entretenimiento:args.entretenimiento,
    				conciertos:args.conciertos,
    				electronica:args.electronica,
    				jazzblues:args.jazzblues,
    				trova:args.trova,
    				rock:args.rock,
    				alternativa:args.alternativa,
    				gruperanortena:args.gruperanortena,
    				infantilE:args.infantilE,
    				hiphop:args.hiphop,
    				rancheras:args.rancheras,
    				pop:args.pop,
    				metal:args.metal,
    				reague:args.reague,
    				reggeatton:args.reggeatton,
    				baladasboleros:args.baladasboleros,
    				salsacumbia:args.salsacumbia,
    				cristiana:args.cristiana,
    				
    				deportes:args.deportes,
    				futbol:args.futbol,
    				basquetball:args.basquetball,
    				tenis:args.tenis,
    				beisball:args.beisball,
    				volleyball:args.volleyball,
    				torneos:args.torneos,
    				maratones:args.maratones,
    				futbolAmericano:args.futbolAmericano,
    				artesMarciales:args.artesMarciales,
    				box:args.box,
    				luchaLibre:args.luchaLibre,
    				atletismo:args.atletismo,
    				toros:args.toros,
    				autosmotos:args.autosmotos,
    				
    				baresantros:args.baresantros,
    				inaguracion:args.inaguracion,
    				promocion:args.promocion,
    				show:args.show,
    				fiestasTematicas:args.fiestasTematicas,
    				bienvenida:args.bienvenida,
    				
    				academica:args.academica,
    				areaestudio:args.areaestudio,
    				congresos:args.congresos,
    				convenciones:args.convenciones,
    				seminarios:args.seminarios,
    				talleres:args.talleres,
    				diplomados:args.diplomados,
    				cursos:args.cursos,
    				conferencias:args.conferencias,
    				expos:args.expos
    				
    			};
                                    
              //Here you have to change it for your local ip 
              sendit.open('GET', 'http://alonsocampos.net46.net/segundaversion/preferencias_.php');  
              sendit.send(preferencias); 
              //Function to be called upon a successful response 
              sendit.onload = function(){ 
                     var json = JSON.parse(this.responseText); 
                     //json.nombre viene de un array de php en el servidor
                     var json = json.nombre; 
                     //if the database is empty show an alert 
                     if(json.length == 0){ 
                            $.tableView.headerTitle = "The database row is empty"; 
                     }                      
                     //Emptying the data to refresh the view 
                     dataArray = [];                      
                     //Insert the JSON data to the table view 
                     for( var i=0; i<json.length; i++){ 
                     		//alert(json[i].idEvento);
	                     	var row = Ti.UI.createTableViewRow({    					
	    					selectedBackgroundColor:'white',
	    					id:json[i].idEvento,
	    					//rowIndex:i, // custom property, useful for determining the row during events
							height:110
							});
							
							row.titulo = json[i].titulo;
							row.imagen = json[i].image;
							row.detalles = json[i].descripcion;
							row.fecha =json[i].fecha;
							row.hora = json[i].hora;
							row.costo = json[i].costo;
							row.lugar = json[i].lugar;
							
					  		var imageAvatar = Ti.UI.createImageView({
					    	image:IMG_BASE + json[i].image,
					    	left:20, top:2,
					    	width:190, height:90
							});
							row.add(imageAvatar);
							
							var labelUserName = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'' + json[i].titulo,
						    left:240, top: 6,
						    width:360, height: 30
						  	});
						  	row.add(labelUserName);
	                     	
	                     	if(json[i].costo!=0)
	                     	{
		                     	var labelDetails = Ti.UI.createLabel({
							    color:'#222',
							    font:{fontFamily:'Arial', fontSize:14, fontWeight:'normal'},
							    text:'' + json[i].fecha+'               '+json[i].costo,
							    left:240, top:44,
							    width:"100%"
							  	});
		  						row.add(labelDetails);
	  						}else{
	  							var labelDetails = Ti.UI.createLabel({
							    color:'#222',
							    font:{fontFamily:'Arial', fontSize:14, fontWeight:'normal'},
							    text:'' + json[i].fecha+'               '+'Gratuito',
							    left:240, top:44,
							    width:"100%"
							  	});
		  						row.add(labelDetails);
	  						}
	  						
	  						if (json[i].tipo=="Academica" || json[i].tipo =="Area de Estudio") {
								var view = Titanium.UI.createView({
										   borderRadius:10,
										   backgroundColor:'yellow',
										   width:10,
										   height:150,
										   right:0
										});
									row.add(view);
							};

							if (json[i].tipo=="Cultural" || json[i].tipo =="Teatro" || json[i].tipo =="Exposicion"
								|| json[i].tipo =="Musica" || json[i].tipo =="Turistico") {
								var view = Titanium.UI.createView({
										   borderRadius:10,
										   backgroundColor:'green',
										   width:10,
										   height:150,
										   right:0
										});
									row.add(view);
							};
							
							if (json[i].tipo=="Entretenimiento" || json[i].tipo =="Conciertos" 
								|| json[i].tipo =="Deportes" || json[i].tipo =="Bares Antros") {
								var view = Titanium.UI.createView({
										   borderRadius:10,
										   backgroundColor:'orange',
										   width:10,
										   height:150,
										   right:0
										});
									row.add(view);
							};
	  						
	  						
	  						
						  	
	  						
						  	var labelDate = Ti.UI.createLabel({
						    color:'#999',
						    font:{fontFamily:'Arial', fontSize:12, fontWeight:'normal'},
						    text:''+json[i].lugar ,
						    left:240, bottom:10,
						    width:"100%", height:20
						  	});
						  	row.add(labelDate);
						
                     	//Aqui es donde se agrega todo a la tabla   
                        dataArray.push(row);
                                      
                     };
                                           
                     $.tableView.setData(dataArray);                            
               };       
    };
       $.tableView.addEventListener('click', function(e)
       {
					var win = Alloy.createController("singleEvento").getView();
					win.id =e.rowData.id;
					win.title = e.row.titulo;
					win.backgroundColor="white";
					
					var imageAvatar = Ti.UI.createImageView({
					    	image:"http://alonsocampos.net46.net/"+e.row.imagen,
					    	left:35, top:25, right:35,
					    	width:700, height:250
					});

					var Titulo = Titanium.UI.createLabel({
						text:e.row.titulo,
						width:"auto",
						height:"auto",
						top:280,
						textAlign:"center"
					});
					
					var Descripcion = Titanium.UI.createLabel({
						text:e.row.detalles,
						width:"auto",
						height:"auto",
						top:310,
						textAlign:"center"
					});
					
					var Fecha = Titanium.UI.createLabel({
						text:"Fecha: "+e.row.fecha,
						width:"auto",
						height:"auto",
						top:450,
						textAlign:"center"
					});
					
					var Hora = Titanium.UI.createLabel({
						text:"Hora: "+e.row.hora,
						width:"auto",
						height:"auto",
						top:480,
						textAlign:"center"
					});
					if(e.row.costo==0){
						var Costo = Titanium.UI.createLabel({
							text:"Costo: "+"Gratuito",
							width:"auto",
							height:"auto",
							top:510,
							textAlign:"center"
						});
					}else{
						var Costo = Titanium.UI.createLabel({
							text:"Costo: "+"$ "+e.row.costo,
							width:"auto",
							height:"auto",
							top:510,
							textAlign:"center"
						});
					}
										
					var Lugar = Titanium.UI.createLabel({
						text:"Lugar: "+e.row.lugar,
						width:"auto",
						height:"auto",
						top:540,
						textAlign:"center"
					});
					
					var buttonRuta = Titanium.UI.createButton({
					    title: 'Ruta hasta aqui',
					    top: 600,
					    left:130,
					    width: 150,
					    height: 50
					});
					
					var buttonOrganizador = Titanium.UI.createButton({
					    title: 'Organizador',
					    top: 600,
					    right:130,
					    width: 170,
					    height: 50
					});
					
					var buttonAgregarEvento = Titanium.UI.createButton({
					    title: 'Agregar este evento a mi agenda',
					    top: 640,
					    width: 400,
					    height: 50
					});
					buttonOrganizador.addEventListener('click', function(e) {
    					var botonCancelar = Ti.UI.createButton({
					        backgroundColor:"#FFCC00",
					        borderRadius:10,
					        left:70,
					        top:180,
					        width: 120,
					        height: 25,
					        title: "Cancelar",       
						});

						botonCancelar.addEventListener('click', function(e) {
						    ventanaTransparente.close();
						});
						//La magia la hace la propiedad opacidad que va de 0 a 1
						var ventanaTransparente = Ti.UI.createWindow({
						    opacity : 0.8,
						    backgroundColor : "black",
						    borderColor:"black",
						    left:30,
						    top:400,
						    width:700,
						    height:250,
						    borderRadius:8,
						  
						});
						ventanaTransparente.add(
						    Ti.UI.createLabel({
						        opacity : 3.5,
						        left:15,
						        top: 70,
						        width:  'auto',
						        height:  'auto',        
						        text : 'Facebook',
						        font : {
						            fontSize : '12dp',
						            fontWeight : 'bold'
						        },
						        textAlign:'center',
						        color:'green'
						}));
						
						ventanaTransparente.add(
						    Ti.UI.createLabel({
						        left:115,
						        top: 70,
						        width:  "auto",
						        height:  "auto",
						        text : 'Mail',           
						        font : {
						            fontSize : '12dp',
						            fontWeight : 'bold'
						        },
						        textAlign:'center',
						        color:'green'
						}));
						
						ventanaTransparente.add(
						    Ti.UI.createLabel({
						        left:165,
						        top: 70,
						        width:  "auto",
						        height:  "auto",
						        text: "Message" ,          
						        font : {
						            fontSize : '12dp',
						            fontWeight : 'bold'
						        },
						        textAlign:'center',
						        color:'green'
						}));
						
						ventanaTransparente.add(
						    Ti.UI.createLabel({
						        left:25,
						        top: 160,
						        width:  "auto",
						        height:  "auto",
						        text: "Twitter" ,          
						        font : {
						            fontSize : '12dp',
						            fontWeight : 'bold'
						        },
						        textAlign:'center',
						        color:'green'
						}));
						
						ventanaTransparente.add(
						    Ti.UI.createImageView({
						        opacity : 4.5,
						    width:"60px",
						    height:"60px",
						    image:"img/face.png",
						    top:10,
						    left:25,
						    borderRadius:10
						   }));
						ventanaTransparente.add(
						    Ti.UI.createImageView({
						    width:"60px",
						    height:"60px",
						    image:"img/mail.png",
						    top:10,
						    left:100,
						    borderRadius:10          
						        
						}));
						ventanaTransparente.add(
						    Ti.UI.createImageView({
						    width:"60px",
						    height:"60px",
						    image:"img/message.png",
						    top:10,
						    left:170,
						    borderRadius:10
						}));
						
						ventanaTransparente.add(
						    Ti.UI.createImageView({
						    width:"60px",
						    height:"60px",
						    image:"img/twitter.png",
						    top:100,
						    left:20,
						    borderRadius:10
						}));
						
						ventanaTransparente.add(botonCancelar);
						ventanaTransparente.open();
					});
					win.add(imageAvatar);
					win.add(Titulo);
					win.add(Descripcion);
					win.add(Fecha);
					win.add(Hora);
					win.add(Costo);
					win.add(Lugar);
					win.add(buttonRuta);
					win.add(buttonOrganizador);
					win.add(buttonAgregarEvento);
					//Inicio de 
					
					//Fin de Evento buttonOrganizador
					
		$.tab1.open(win,{animation:true});			
      }); 
      
      
$.mainTabGroup.open();

function changeWithArgs() {
	dialogs.confirm({
		title: 'Confirm (args)',
		message: 'Esta segurp?',
		buttonNames: ['Si', 'No'],
		callback: shouldUseExportsAgainByDefault
	});
}
/*
 * 
 */
$.im2.addEventListener('click', function(e) {
//Creación del boton
var botonFiltrar = Ti.UI.createButton({
        backgroundColor:"#FFCC00",
        borderRadius:10,
        left:70,
        top:180,
        width: 120,
        height: 25,
        title: "Filtrar",
          
});

//La magia la hace la propiedad opacidad que va de 0 a 1
var ventanaTransparente = Ti.UI.createWindow({
    opacity : 0.8,
    backgroundColor : "black",
    borderColor:"black",
    right:10,
    top:80,
    width:250,
    height:250,
    borderRadius:8
  
});
var basicSwitch = Ti.UI.createSwitch({
  value:true,
  left:180,
  top: 30,
  width: 20,
  height: 50 // mandatory property for iOS 
});
ventanaTransparente.add(basicSwitch);

basicSwitch.addEventListener('change',function(e){
  Ti.API.info('Switch value: ' + basicSwitch.value);
});


var basicSwitch = Ti.UI.createSwitch({
  value:true,
  left:180,
  top: 70,
  width: 20,
  height: 50 // mandatory property for iOS 
});
ventanaTransparente.add(basicSwitch);

basicSwitch.addEventListener('change',function(e){
  Ti.API.info('Switch value: ' + basicSwitch.value);
});


var basicSwitch = Ti.UI.createSwitch({
  value:true,
  left: 180,
  top: 110,
  width: "auto",
  height:"auto"
   // mandatory property for iOS 
});
ventanaTransparente.add(basicSwitch);

basicSwitch.addEventListener('change',function(e){
  Ti.API.info('Switch value: ' + basicSwitch.value);
});

//Se agrega el boton a la ventana
botonFiltrar.addEventListener('click', function(e) {
    ventanaTransparente.close();
});
ventanaTransparente.add(
    Ti.UI.createLabel({
        left:15,
        top: 30,
        width: "auto",
        height:  "auto",
        zIndex:"5",
        text: "Académica",
color:"white"
}));


ventanaTransparente.add(
    Ti.UI.createLabel({
        left:15,
        top: 70,
        width:  "auto",
        height:  "auto",
        zIndex:"6",
        text: "Cultural | Turística",
        color:"white"
}));

ventanaTransparente.add(
    Ti.UI.createLabel({
        left:15,
        top: 110,
        width: "auto",
        height:  "auto",
        zIndex:"7",
        text: "Entretenimiento",
        color:"white"
}));

ventanaTransparente.add(botonFiltrar);

ventanaTransparente.open();
});


function closeme(){
	$.container.close();
}

function boton1(e){
	var w= Alloy.createController('win5').getView();
	w.open();
	
}
function boton2(){
var m= Alloy.createController('win4').getView();
m.open();	
}
