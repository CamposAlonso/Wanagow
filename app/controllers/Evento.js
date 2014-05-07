/**
 * @author Hector Campos Alonso
 **/

//Esta es la variable que es resivida por la ventana index
var args = arguments[0] || {};
//Esta variable viene de Next.js 
var correo = arguments[0] || {};


//$.txtnombrew.value es el valor de nombre en la ventana
//args.nombre es el que es recibido por la ventana index
/*
 * Estas variables son para filtrar la informacion
 * de acuerdo a el tipo de eventos que quiere
 */
var correoElectronico="";
var filtroAcademica;
var filtroCultural;
var filtroEntretenimiento;
var datos ={
	nombre:"",
	apellidos:"",
	passowrd:"",
	email:""
	
};
if(correo=="")
{
	correoElectronico = args.email;
	filtroAcademica = args.academica;
	filtroCultural = args.cultural;
	filtroEntretenimiento = args.entretenimiento;
	datos.nombre=args.nombre;
	datos.apellidos = args.apellidos;
	datos.passowrd = args.password;
	datos.email = args.email;
	/*$.txtnombrew.value =args.nombre;
	$.txtPasswordw.value = args.password;
	$.txtconfirmew.value = args.password;
	$.txtapellidow.value = args.apellidos;
	$.txtEmailw.value = args.email;*/
}else{
	filtroAcademica = correo.academica;
	filtroCultural = correo.cultural;
	filtroEntretenimiento = correo.entretenimiento;
	correoElectronico = correo.email;
	datos.nombre=correo.nombre;
	datos.apellidos = correo.apellidos;
	datos.passowrd = correo.password;
	datos.email = correo.email;
	/*$.txtnombrew.value =correo.nombre;
	$.txtPasswordw.value = correo.password;
	$.txtconfirmew.value = correo.password;
	$.txtapellidow.value = correo.apellidos;
	$.txtEmailw.value = correo.email;*/
}


//IMB_BASE es el directorio donde se accede para ver las imagenes
var IMG_BASE = 'http://alonsocampos.net46.net/';

 //dataArrat sirve para guardar las filas de una tabla
       var dataArray = [];        
       //Esta funcion permite cargar todo la informacion necesaria para el menu de usuario       
      function getTodoList () { 
      /**
       * Esta funcion controla cuando se registran los usuarios o cuando 
       * los usuarios acceden por medio del login
       * 
       * Se evalua si la variable correo.email esta vacia entonces
       * aplica esta condicion
       */ 
      if(correo.email==""){
		      /*Se crea una peticion HTTPClient
		        * onerror capturar si hay algun problema con la conexion
		        * se fija un tiempo limite para hacer conexion
		       */
              var sendit = Ti.Network.createHTTPClient({ 
                     onerror: function(e){ 
                           Ti.API.debug(e.error); 
                           alert('La conexion esta tardando demaciado intente acceder nuevamente'); 
                     }, 
                  timeout:1000, 
              });
              //El objeto JSON preferencias obtiene la informacion del archivo index
              
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
                                    
              /*Utilizando la peticion HTTPClient se abre por medio de un metodo GET
               * el archivo PHP
              */
              sendit.open('GET', 'http://alonsocampos.net46.net/segundaversion/preferencias_.php');  
              //El archivo PHP solicita preferencias y son enviadas por medio del metodo send con el
              //JSON preferencias antes visto
              sendit.send(preferencias); 
              //Una vez terminado la funcion onload ejecuta todo el codigo restante 
              sendit.onload = function(){ 
                     var json = JSON.parse(this.responseText); 
                     //json.nombre viene de un array de php en el servidor
                     var json = json.nombre; 
                     //Si la base de datos esta vacia mostrara un mensaje
                     if(json.length == 0){ 
                            $.tableView.headerTitle = "No hay eventos disponibles"; 
                     }                      
                     //Llamamos el arreglo declarado arriba para vaciar la informacion contenida 
                     dataArray = [];                      
                     //Utilizando el objeto json se recorre la cantidad de elementos que se tiene 
                     for( var i=0; i<json.length; i++){ 
                     		//Para comenzar se crea una fila y se le dan estilos
                     		var row = Ti.UI.createTableViewRow({    					
	    					selectedBackgroundColor:'white',
	    					id:json[i].idEvento,
	    					//rowIndex:i, //se refiere al indice de la fila
							height:110
							});
							/*
							 * utilizando la variable row se le crean nuevas propiedades y se le asigna 
							 * un valor que es obtenido por el objeto json
							 */
							row.titulo = json[i].titulo; 
							row.imagen = json[i].image;
							row.detalles = json[i].descripcion;
							row.fecha =json[i].fecha;
							row.hora = json[i].hora;
							row.costo = json[i].costo;
							row.lugar = json[i].lugar;
							/*Se crea una imagen, para obtener la imagen se utiliza
							 * la url que se tenia IMG_BASE y se le asigna el nombre y extencion
							 * colocada en la base de datos
							*/
					  		var imageAvatar = Ti.UI.createImageView({
					    	image:IMG_BASE + json[i].image,
					    	left:20, top:2,
					    	width:190, height:90
							});
							row.add(imageAvatar); //row.add se utiliza para agregar a la fila la imagen
							
							var labelUserName = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'' + json[i].titulo,
						    left:240, top: 6,
						    width:360, height: 30
						  	});
						  	row.add(labelUserName);//row.add se utiliza para agregar a la fila el labelUserName
	                     	
	                     	/*
	                     	 * Debido a que json[i].costo es un float y se requiere que en caso
	                     	 * de que el costo sea 0 debe de mostrar un mensaje de gratuito en vez
	                     	 * del costo del evento
	                     	 */
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
	  						/*
	  						 * Debido a que el archivo php filtra de acuerdo a las preferencias, que 
	  						 * se enviaron de acuerdo al usuario que entra
	  						 * los registros que fueron enviados se les agrega una una barra de color
	  						 * para diferenciar el tipo de evento que es 
	  						 * Academica - amarrillo
	  						 * Cultural | Turistico - verde
	  						 * Entretenimiento - naranja
	  						 */
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
						/*
						 * Cada vez que llega a este punto se agrega la fila al arreglo
						 * hasta que se termine de recorrer
						 */
						dataArray.push(row);
                                      
                     };
                     /*
                      * Utilizando la tabla creada se le asigna la informacion obtenida por el dataArray
                      */                      
                     $.tableView.setData(dataArray);                            
               };       
    
     }else{
    		
    		
    		var sendit = Ti.Network.createHTTPClient({ 
                     onerror: function(e){ 
                           Ti.API.debug(e.error); 
                           alert('La conexion esta tardando demaciado intente acceder nuevamente'); 
                     }, 
                  timeout:1000, 
              });
              //El objeto JSON preferencias obtiene la informacion del archivo index
              
              var preferencias = 
    			{
    				email: correo.email 
    			};
                                     
              /*Utilizando la peticion HTTPClient se abre por medio de un metodo POST
               * el archivo PHP
              */
              sendit.open('POST', 'http://alonsocampos.net46.net/segundaversion/cargareventos.php');  
              //El archivo PHP solicita preferencias y son enviadas por medio del metodo send con el
              //JSON preferencias antes visto
              sendit.send(preferencias);
              
              //Una vez terminado la funcion onload ejecuta todo el codigo restante 
              sendit.onload = function(){ 
                     var json = JSON.parse(this.responseText); 
                     //json.nombre viene de un array de php en el servidor
                     var json = json.nombre; 
                     //Si la base de datos esta vacia mostrara un mensaje
                     if(json.length == 0){ 
                            $.tableView.headerTitle = "No hay eventos disponibles"; 
                     }                      
                     //Llamamos el arreglo declarado arriba para vaciar la informacion contenida 
                     dataArray = [];                      
                     //Utilizando el objeto json se recorre la cantidad de elementos que se tiene 
                     for( var i=0; i<json.length; i++){ 
                     		//Para comenzar se crea una fila y se le dan estilos
                     		var row = Ti.UI.createTableViewRow({    					
	    					selectedBackgroundColor:'white',
	    					id:json[i].idEvento,
	    					//rowIndex:i, //se refiere al indice de la fila
							height:110
							});
							/*
							 * utilizando la variable row se le crean nuevas propiedades y se le asigna 
							 * un valor que es obtenido por el objeto json
							 */
							row.titulo = json[i].titulo; 
							row.imagen = json[i].image;
							row.detalles = json[i].descripcion;
							row.fecha =json[i].fecha;
							row.hora = json[i].hora;
							row.costo = json[i].costo;
							row.lugar = json[i].lugar;
							/*Se crea una imagen, para obtener la imagen se utiliza
							 * la url que se tenia IMG_BASE y se le asigna el nombre y extencion
							 * colocada en la base de datos
							*/
					  		var imageAvatar = Ti.UI.createImageView({
					    	image:IMG_BASE + json[i].image,
					    	left:20, top:2,
					    	width:190, height:90
							});
							row.add(imageAvatar); //row.add se utiliza para agregar a la fila la imagen
							
							var labelUserName = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'' + json[i].titulo,
						    left:240, top: 6,
						    width:360, height: 30
						  	});
						  	row.add(labelUserName);//row.add se utiliza para agregar a la fila el labelUserName
	                     	
	                     	/*
	                     	 * Debido a que json[i].costo es un float y se requiere que en caso
	                     	 * de que el costo sea 0 debe de mostrar un mensaje de gratuito en vez
	                     	 * del costo del evento
	                     	 */
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
	  						/*
	  						 * Debido a que el archivo php filtra de acuerdo a las preferencias, que 
	  						 * se enviaron de acuerdo al usuario que entra
	  						 * los registros que fueron enviados se les agrega una una barra de color
	  						 * para diferenciar el tipo de evento que es 
	  						 * Academica - amarrillo
	  						 * Cultural | Turistico - verde
	  						 * Entretenimiento - naranja
	  						 */
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
						/*
						 * Cada vez que llega a este punto se agrega la fila al arreglo
						 * hasta que se termine de recorrer
						 */
						dataArray.push(row);
                                      
                     };
                     /*
                      * Utilizando la tabla creada se le asigna la informacion obtenida por el dataArray
                      */                      
                     $.tableView.setData(dataArray);                            
               };  
    		
    		
    		
    		
    		
    	}
    
    };
      
    /*
     * Se agrega un evento a la tabla que al pulsar click en cualquiera de las filas se dispare el evento
     */
       $.tableView.addEventListener('click', function(e)
       {
			     /*
			     *  Aqui se crea la nueve vista para dar detalles a el 
			     * evento seleccionado "singleEvento" es el nombre de la nueva
			     * vista que se va a abrir.
			     * 
			     * De igual forma se crean propiedades a la variable win 
			     * utlizando el evento la informacion que se recibe por medio
			     * de e se puede acceder a la informacion del evento seleccionado
			     * con .rowData y el nombre del parametro que se esta utilizando en
			     * la parte de arriba
			     */
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
						width:"auto",height:"auto",
						top:280,textAlign:"center"
					});
					
					var Descripcion = Titanium.UI.createLabel({
						text:e.row.detalles,
						width:"auto",height:"auto",
						top:310,textAlign:"center"
					});
					
					var Fecha = Titanium.UI.createLabel({
						text:"Fecha: "+e.row.fecha,
						width:"auto",height:"auto",
						top:450,textAlign:"center"
					});
					
					var Hora = Titanium.UI.createLabel({
						text:"Hora: "+e.row.hora,
						width:"auto",height:"auto",
						top:480,textAlign:"center"
					});
					if(e.row.costo==0){
						var Costo = Titanium.UI.createLabel({
							text:"Costo: "+"Gratuito",
							width:"auto",height:"auto",
							top:510,textAlign:"center"
						});
					}else{
						var Costo = Titanium.UI.createLabel({
							text:"Costo: "+"$ "+e.row.costo,
							width:"auto",height:"auto",
							top:510,textAlign:"center"
						});
					}
										
					var Lugar = Titanium.UI.createLabel({
						text:"Lugar: "+e.row.lugar,
						width:"auto",height:"auto",
						top:540,textAlign:"center"
					});
					
					var buttonRuta = Titanium.UI.createButton({
					    title: 'Ruta hasta aqui',
					    top: 600,left:130,
					    width: 150,height: 50
					});
					
					var buttonOrganizador = Titanium.UI.createButton({
					    title: 'Organizador',top: 600,
					    right:130,width: 170,height: 50
					});
					
					var buttonAgregarEvento = Titanium.UI.createButton({
					    title: 'Agregar este evento a mi agenda',
					    top: 640, width: 400,height: 50
					});
					buttonOrganizador.addEventListener('click', function(e) {
    					var botonCancelar = Ti.UI.createButton({
					        backgroundColor:"#FFCC00",borderRadius:10,
					        left:70,top:180,width: 120,
					        height: 25,title: "Cancelar",       
						});

						botonCancelar.addEventListener('click', function(e) {
						    ventanaTransparente.close();
						});
						//La magia la hace la propiedad opacidad que va de 0 a 1
						var ventanaTransparente = Ti.UI.createWindow({
						    opacity : 0.8,backgroundColor : "black",
						    borderColor:"black",left:30,top:400,
						    width:700, height:250,borderRadius:8,
						  
						});
						ventanaTransparente.add(Ti.UI.createLabel({opacity : 3.5,left:15,
						        top: 70,width:  'auto',
						        height:  'auto',text : 'Facebook',
						        font : {
						            fontSize : '12dp',
						            fontWeight : 'bold'
						        },
						        textAlign:'center',color:'green'
						}));
						
						ventanaTransparente.add(Ti.UI.createLabel({left:115,top: 70, width:  "auto",
						        height:  "auto",text : 'Mail',           
						        font : {
						            fontSize : '12dp',
						            fontWeight : 'bold'
						        },
						        textAlign:'center',color:'green'
						}));
						
						ventanaTransparente.add(Ti.UI.createLabel({left:165,top: 70,
						        width:  "auto",height:  "auto",text: "Message" ,          
						        font : {
						            fontSize : '12dp',
						            fontWeight : 'bold'
						        },
						        textAlign:'center', color:'green'
						}));
						
						ventanaTransparente.add(Ti.UI.createLabel({left:25, top: 160,
							 width:  "auto", height:  "auto", text: "Twitter" , 
							 font : {fontSize : '12dp', fontWeight : 'bold'}, 
							 textAlign:'center', color:'green'
						}));
						
						ventanaTransparente.add(
						    Ti.UI.createImageView({opacity : 4.5,
						    width:"60px",height:"60px",image:"img/face.png",top:10,
						    left:25,borderRadius:10
						   }));
						   
						ventanaTransparente.add(Ti.UI.createImageView({
						    width:"60px",height:"60px",
						    image:"img/mail.png",top:10,
						    left:100,borderRadius:10          						        
						}));
						
						ventanaTransparente.add(Ti.UI.createImageView({width:"60px",
						    height:"60px",image:"img/message.png",
						    top:10,left:170,borderRadius:10
						}));
						
						ventanaTransparente.add(Ti.UI.createImageView({width:"60px",height:"60px",
						    image:"img/twitter.png",top:100,left:20,borderRadius:10
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

/*
 * 
 */
$.im2.addEventListener('click', function(e) {
//Creación del boton
var botonFiltrar = Ti.UI.createButton({
        backgroundColor:"#FFCC00",
        borderRadius:10,left:70,top:180,
        width: 120,height: 25,title: "Filtrar",
});
botonFiltrar.addEventListener('click',function(){
	
	var conexion = Ti.Network.createHTTPClient({ 
                 onerror: function(e){ 
                      Ti.API.debug(e.error); 
                      alert('La conexion esta tardando demaciado intente acceder nuevamente'); 
                 }, 
                 timeout:2000, 
     });
	
	var filtroEventos ={
		academica: 		 switchAcademica.value,
		cultural:  		 switchCultural.value,
		entretenimiento: switchEntretenimiento.value,
		email:			 correoElectronico		 
	};
	//alert(filtroEventos);
	conexion.open('POST', 'http://alonsocampos.net46.net/segundaversion/filtros_eventos.php');  
              //El archivo PHP solicita preferencias y son enviadas por medio del metodo send con el
              //JSON preferencias antes visto
              conexion.send(filtroEventos);
              
              //Una vez terminado la funcion onload ejecuta todo el codigo restante 
              conexion.onload = function(){ 
                     var json = JSON.parse(this.responseText); 
                     //json.nombre viene de un array de php en el servidor
                     var json = json.nombre; 
                     //Si la base de datos esta vacia mostrara un mensaje
                                           
                     //Llamamos el arreglo declarado arriba para vaciar la informacion contenida 
                     dataArray = [];                      
                     //Utilizando el objeto json se recorre la cantidad de elementos que se tiene 
                     for( var i=0; i<json.length; i++){ 
                     		//Para comenzar se crea una fila y se le dan estilos
                     		var row = Ti.UI.createTableViewRow({    					
	    					selectedBackgroundColor:'white',
	    					id:json[i].idEvento,
	    					//rowIndex:i, //se refiere al indice de la fila
							height:110
							});
							/*
							 * utilizando la variable row se le crean nuevas propiedades y se le asigna 
							 * un valor que es obtenido por el objeto json
							 */
							row.titulo = json[i].titulo; 
							row.imagen = json[i].image;
							row.detalles = json[i].descripcion;
							row.fecha =json[i].fecha;
							row.hora = json[i].hora;
							row.costo = json[i].costo;
							row.lugar = json[i].lugar;
							/*Se crea una imagen, para obtener la imagen se utiliza
							 * la url que se tenia IMG_BASE y se le asigna el nombre y extencion
							 * colocada en la base de datos
							*/
					  		var imageAvatar = Ti.UI.createImageView({
					    	image:IMG_BASE + json[i].image,
					    	left:20, top:2,
					    	width:190, height:90
							});
							row.add(imageAvatar); //row.add se utiliza para agregar a la fila la imagen
							
							var labelUserName = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'' + json[i].titulo,
						    left:240, top: 6,
						    width:360, height: 30
						  	});
						  	row.add(labelUserName);//row.add se utiliza para agregar a la fila el labelUserName
	                     	
	                     	/*
	                     	 * Debido a que json[i].costo es un float y se requiere que en caso
	                     	 * de que el costo sea 0 debe de mostrar un mensaje de gratuito en vez
	                     	 * del costo del evento
	                     	 */
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
	  						/*
	  						 * Debido a que el archivo php filtra de acuerdo a las preferencias, que 
	  						 * se enviaron de acuerdo al usuario que entra
	  						 * los registros que fueron enviados se les agrega una una barra de color
	  						 * para diferenciar el tipo de evento que es 
	  						 * Academica - amarrillo
	  						 * Cultural | Turistico - verde
	  						 * Entretenimiento - naranja
	  						 */
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
						/*
						 * Cada vez que llega a este punto se agrega la fila al arreglo
						 * hasta que se termine de recorrer
						 */
						dataArray.push(row);
                                      
                     };
                     /*
                      * Utilizando la tabla creada se le asigna la informacion obtenida por el dataArray
                      */                      
                     $.tableView.setData(dataArray);                            
               };  
	
	
});



//La magia la hace la propiedad opacidad que va de 0 a 1
var ventanaTransparente = Ti.UI.createWindow({
    opacity : 0.8,backgroundColor : "black",
    borderColor:"black",right:10,top:80,
    width:250,height:250,borderRadius:8
});
/*
 * estos son los 3 botones que se utilizan para 
 * filtrar los eventos
 */
var switchAcademica = Ti.UI.createSwitch({
  value:filtroAcademica,left:180,
  top: 30,width: 20,height: 50 // mandatory property for iOS 
});
ventanaTransparente.add(switchAcademica);

switchAcademica.addEventListener('change',function(e){
  //Ti.API.info('Switch value: ' + switchAcademica.value);
   //alert("Academica");
});


var switchCultural = Ti.UI.createSwitch({
  value:filtroCultural, left:180,top: 70,
  width: 20,height: 50 // mandatory property for iOS 
});
ventanaTransparente.add(switchCultural);

switchCultural.addEventListener('change',function(e){
  //Ti.API.info('Switch value: ' + switchCultural.value);
   //alert("Cultural");
});


var switchEntretenimiento = Ti.UI.createSwitch({
  value:filtroEntretenimiento,left: 180,top: 110,
  width: "auto",height:"auto"
});
ventanaTransparente.add(switchEntretenimiento);

switchEntretenimiento.addEventListener('change',function(e){
  //Ti.API.info('Switch  value: ' + switchEntretenimiento.value);
  //alert("Entretenimiento");
});

//Se agrega el boton a la ventana
botonFiltrar.addEventListener('click', function(e) {
    ventanaTransparente.close();
});
/*
 * Aqui es donde se agregan los textos que aparecen en el filtro
 * de eventos
 */
ventanaTransparente.add(Ti.UI.createLabel({left:15,top: 30,width: "auto",
        height:  "auto",zIndex:"5",text: "Académica",color:"white"
}));


ventanaTransparente.add(Ti.UI.createLabel({left:15,top: 70,width:  "auto",
        height:  "auto",zIndex:"6",text: "Cultural | Turística",color:"white"
}));

ventanaTransparente.add(Ti.UI.createLabel({left:15,top: 110,width: "auto",height:  "auto",
        zIndex:"7",text: "Entretenimiento", color:"white"
}));

ventanaTransparente.add(botonFiltrar);

ventanaTransparente.open();
});

//Esta funcion cierra el contenedor
function closeme(){
	$.container.close();
}
//De esta manera se abre una vista
function header()
{
	var cabecera = Titanium.UI.createView({
		backgroundColor:'#F4CE00',
		height:75,
		width:'100%',
		top:0
	});
	
	var preferencia = Titanium.UI.createButton({
   		width:200,
		right:250,
		left:450,
		backgroundColor:"#DCBC0D",
		height:50,
		top:10,
		font: {fontFamily: 'Helvetica Neue'},
		color:"white",
		borderStyle:"Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
		borderColor:"black",
		title:"Preferencias"
	});
	
	var datosPersonales = Titanium.UI.createButton({
   		width:200,
		right:250,
		left:150,
		backgroundColor:"#DCBC0D",
		height:50,
		top:10,
		font: {fontFamily: 'Helvetica Neue'},
		color:"white",
		borderStyle:"Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
		borderColor:"black",
		title:"Datos Personales"
	});
	$.win4.add(cabecera);
	$.win4.add(datosPersonales);
	$.win4.add(preferencia);
	datosPersonales.addEventListener("click", DatosCuenta);
	preferencia.addEventListener("click",TablePreferencias);
	
};

function principal () {
	header();
	DatosCuenta();
}

function DatosCuenta()
{
	RemoverElementos();
	header();
	var label1 = Ti.UI.createLabel({
		height:Ti.UI.SIZE,
		width:Ti.UI.SIZE,
		color:"black",
		layout:"center",
		text:"DATOS DE LA CUENTA",
		top:190
		});
	$.win4.add(label1);
	
	var email = Ti.UI.createTextField({
		width:300,
		right:50,
		left:250,
		height:45,
		top:250,
		hintText:"Email",
		borderColor:"#F4CE00",
        borderStyle:"Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        value:datos.email,
        color:"black",
        editable: false
		});
	$.win4.add(email);
	
	var password = Ti.UI.createTextField({
		width:300,
		right:50,
		left:250,
		height:45,
		top:300,
		hintText:"Password",
		borderColor:"#F4CE00",
	    borderStyle:"Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
	    color:"black",
	    passwordMask:true,
	    value:datos.passowrd
		});
	$.win4.add(password);
	
	var confirmacion = Ti.UI.createTextField({
		width:300,
		right:50,
		left:250,
		height:45,
		top:350,
		hintText:"Confirme Password",
		borderColor:"#F4CE00",
		borderStyle:"Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
		passwordMask:true,
		color:"black",
		value:datos.passowrd
		});
	$.win4.add(confirmacion);
	
	var label2 = Ti.UI.createLabel({
		height:Ti.UI.SIZE,
		width:Ti.UI.SIZE,
		top:410,
		text:"DATOS DEL USUARIO"
		});
	$.win4.add(label2);
	
	var nombre = Ti.UI.createTextField({
		width:300,
		right:50,
		left:250,
		height:45,
		top:450,
		hintText:"Nombre",
		borderColor:"#F4CE00",
		borderStyle:"Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
		color:"black",
		value:datos.nombre
		});
	$.win4.add(nombre);
	
	var apellidos = Ti.UI.createTextField({
		width:300,
		right:50,
		left:250,
		height:45,
		top:500,
		hintText:"Apellidos",
		borderColor:"#F4CE00",
		borderStyle:"Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
		color:"black",
		value:datos.apellidos
		});
	$.win4.add(apellidos);
	
	var fecha = Titanium.UI.createButton({
   		width:300,
		right:300,
		left:250,
		backgroundColor:"#E3C109",
		height:50,
		top:570,
		font: {fontFamily: 'Helvetica Neue'},
		color:"white",
		title:"Fecha de Nacimiento"
	});
	
	$.win4.add(fecha);
	var label3 = Ti.UI.createLabel({
		width:100,
		right:100,
		left:260,
		height:50,
		top:650,
		text:"SEXO:"
		});
	$.win4.add(label3);
	
	var mujer = Titanium.UI.createButton({
   		width:100,
		right:100,
		left:340,
		backgroundColor:"#DCBC0D",
		height:50,
		top:650,
		font: {fontFamily: 'Helvetica Neue'},
		color:"white",
		title:"Mujer"
	});
	
	$.win4.add(mujer);
	
	var hombre = Titanium.UI.createButton({
   		width:100,
		right:100,
		left:436,
		backgroundColor:"#C5B76A",
		height:50,
		top:650,
		font: {fontFamily: 'Helvetica Neue'},
		color:"white",
		title:"Hombre"
	});
	$.win4.add(hombre);
	
	var guardar = Titanium.UI.createButton({
   		width:300,
		right:300,
		left:250,
		layout:"center",
		backgroundColor:"#515050",
		height:50,
		top:750,
		font: {fontFamily: 'Helvetica Neue'},
		color:"white",
		borderStyle:"Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
		title:"Guardar"
	});
	guardar.addEventListener("click",function(){
	
	var sendit = Ti.Network.createHTTPClient({ 
		    onerror: function(e){ 
		    Ti.API.debug(e.error); 
		           alert('La conexion esta tardando demaciado intente acceder nuevamente'); 
		    }, 
		    timeout:3000, 
	  });
	  
	  	
     
     
     if (email.value != '' && password.value != '' && confirmacion.value != '' && nombre.value != '' && apellidos.value != '')
    {
        if (password.value != confirmacion.value)
        {
            alert("Las contraseñas no coinciden");
        }
        else
        {
            if (!checkemail(email.value))
            {
                alert("Por favor ingresa un correo valido");
            }
            else
            {
            	sendit.open('POST', 'http://alonsocampos.net46.net/segundaversion/update_personal.php');
                var params = {
                	correo_actual: email.value,
                	password: password.value,
                    nombre: nombre.value,
                    apellidos: apellidos.value
                }; 
                sendit.send(params);
                alert("Informacion enviada");
            }
        }
    }
    else
    {
        alert("Complete la informacion necesaria");
    }
     
     
     
	  sendit.onload = function()
          {
          	if (this.responseText == "A ocurrido un error intente mas tarde" || this.responseText =="El correo no existe")
            {
                alert(this.responseText);
            } 
            else
            {
                var alertDialog = Titanium.UI.createAlertDialog({
                    title: 'Alert',
                    message: this.responseText,
                    buttonNames: ['OK']
                });
                alertDialog.show();
                getTodoList();
            
            }
          };
	
	
	
	
	
		
	});
	$.win4.add(guardar);
		
}
function TablePreferencias () 
{	
	RemoverElementos();
	header();
	  	var dataArray = [];
		var dataArray2 = [];
		var dataArray3 =[];
		
		var sendit = Ti.Network.createHTTPClient({ 
		    onerror: function(e){ 
		    Ti.API.debug(e.error); 
		           alert('La conexion esta tardando demaciado intente acceder nuevamente'); 
		    }, 
		    timeout:3000, 
		});
		sendit.open('POST', 'http://alonsocampos.net46.net/segundaversion/update_preferences.php'); 
        var params ={email:datos.email};
        sendit.send(params);
		sendit.onload = function()
          {
          	 var json = JSON.parse(this.responseText); 
		     var json = json.nombre; 
		     if(json.length == 0){ 
		            tableView.headerTitle = "No hay informacion disponible"; 
		     }                      
		     //Emptying the data to refresh the view 
		     dataArray =  [];
		     dataArray2 = [];
		     dataArray3 = [];
             var scrollView = Ti.UI.createScrollView({
				  contentHeight: 'auto',
				  showVerticalScrollIndicator: true,
				  top:80,
				  height:'90%',
				  width: 600
			 });
                 
             var view = Ti.UI.createView({
				  backgroundColor:'white',
				  borderRadius: 10,
				  top:100,
				  height:3310,
				  width: 500
			});
			var guardar = Ti.UI.createButton({
				title:"Guardar",
				width:"100%",
				backgroundColor:"#E3C109",
				height:50,
				top:3230,
				font: {fontFamily: 'Helvetica Neue'},
				color:"white",
				zIndex:1
			});
			view.add(guardar);
			
			
			guardar.addEventListener("click", function()
			 {
			 	var enviar = Ti.Network.createHTTPClient({ 
	                 onerror: function(e){ 
	                    Ti.API.debug(e.error); 
	                    alert('There was an error during the connection'); 
	                 }, 
	                 timeout:3000, 
			     });
			     enviar.open('POST', 'http://alonsocampos.net46.net/segundaversion/updatepreferencias.php');
			     var params = 
					{
						email: datos.email,
						academica: $.tableViewAcademica.data[0].rows[0].children[0].value,
                        area:$.tableViewAcademica.data[0].rows[1].children[1].value,
                        congreso:$.tableViewAcademica.data[0].rows[2].children[1].value,
                        curso:$.tableViewAcademica.data[0].rows[3].children[1].value, 
                        convencion:$.tableViewAcademica.data[0].rows[4].children[1].value,
                        seminario:$.tableViewAcademica.data[0].rows[5].children[1].value,
                        taller:$.tableViewAcademica.data[0].rows[6].children[1].value,
                        diplomado:$.tableViewAcademica.data[0].rows[7].children[1].value,     
                        conferencia:$.tableViewAcademica.data[0].rows[8].children[1].value,
                        expo:$.tableViewAcademica.data[0].rows[9].children[1].value,
                        
                        cultural: $.tableViewCultural.data[0].rows[0].children[0].value,
						ballet:$.tableViewCultural.data[0].rows[1].children[0].value,
						teatro:$.tableViewCultural.data[0].rows[2].children[0].value, 
	                    comedia:$.tableViewCultural.data[0].rows[3].children[0].value,
						drama:$.tableViewCultural.data[0].rows[4].children[0].value,
						infantilC:$.tableViewCultural.data[0].rows[5].children[0].value,
						musical:$.tableViewCultural.data[0].rows[6].children[0].value,
						otrosT:$.tableViewCultural.data[0].rows[7].children[0].value,
						circos:$.tableViewCultural.data[0].rows[8].children[0].value,
						exposiciones:$.tableViewCultural.data[0].rows[9].children[0].value,
						fotografia:$.tableViewCultural.data[0].rows[10].children[0].value,
						escultura:$.tableViewCultural.data[0].rows[11].children[0].value,
						pintura:$.tableViewCultural.data[0].rows[12].children[0].value,
						libros:$.tableViewCultural.data[0].rows[13].children[0].value,
						otrosE:$.tableViewCultural.data[0].rows[14].children[0].value,
						cineArte:$.tableViewCultural.data[0].rows[15].children[0].value,
						musica:$.tableViewCultural.data[0].rows[16].children[0].value,
						clasica:$.tableViewCultural.data[0].rows[17].children[0].value,
						instrumental:$.tableViewCultural.data[0].rows[18].children[0].value,
						folklorepopular:$.tableViewCultural.data[0].rows[19].children[0].value,
						turistico:$.tableViewCultural.data[0].rows[20].children[0].value,
						ferias:$.tableViewCultural.data[0].rows[21].children[0].value,
						carnavales:$.tableViewCultural.data[0].rows[22].children[0].value,
						peregrinacion:$.tableViewCultural.data[0].rows[23].children[0].value,
						fiestasReligiosasIndigenas:$.tableViewCultural.data[0].rows[24].children[0].value,
						otrosTuristica:$.tableViewCultural.data[0].rows[25].children[0].value,
						
						entretenimiento:$.tableViewEntretenimiento.data[0].rows[0].children[0].value,
						conciertos:$.tableViewEntretenimiento.data[0].rows[1].children[0].value,
						electronica:$.tableViewEntretenimiento.data[0].rows[2].children[0].value,
						jazzblues:$.tableViewEntretenimiento.data[0].rows[3].children[0].value,
						trova:$.tableViewEntretenimiento.data[0].rows[4].children[0].value,
						rock:$.tableViewEntretenimiento.data[0].rows[5].children[0].value,
						alternativa:$.tableViewEntretenimiento.data[0].rows[6].children[0].value,
						gruperanortena:$.tableViewEntretenimiento.data[0].rows[7].children[0].value,
						infantilE:$.tableViewEntretenimiento.data[0].rows[8].children[0].value,
						hiphop:$.tableViewEntretenimiento.data[0].rows[9].children[0].value,
						ranchera:$.tableViewEntretenimiento.data[0].rows[10].children[0].value,
						pop:$.tableViewEntretenimiento.data[0].rows[11].children[0].value,
						metal:$.tableViewEntretenimiento.data[0].rows[12].children[0].value,
						reague:$.tableViewEntretenimiento.data[0].rows[13].children[0].value,
						reggeatton:$.tableViewEntretenimiento.data[0].rows[14].children[0].value,
						baladasboleros:$.tableViewEntretenimiento.data[0].rows[15].children[0].value,
						salsacumbia:$.tableViewEntretenimiento.data[0].rows[16].children[0].value,
						cristiana:$.tableViewEntretenimiento.data[0].rows[17].children[0].value,
						deportes:$.tableViewEntretenimiento.data[0].rows[18].children[0].value,
						futbol:$.tableViewEntretenimiento.data[0].rows[19].children[0].value,
						basquetball:$.tableViewEntretenimiento.data[0].rows[20].children[0].value,
						tenis:$.tableViewEntretenimiento.data[0].rows[21].children[0].value,
						beisball:$.tableViewEntretenimiento.data[0].rows[22].children[0].value,
						volleyball:$.tableViewEntretenimiento.data[0].rows[23].children[0].value,
						torneos:$.tableViewEntretenimiento.data[0].rows[24].children[0].value,
						maratones:$.tableViewEntretenimiento.data[0].rows[25].children[0].value,
						autosmotos:$.tableViewEntretenimiento.data[0].rows[26].children[0].value,
						futbolAmericano:$.tableViewEntretenimiento.data[0].rows[27].children[0].value,
						artesMarciales:$.tableViewEntretenimiento.data[0].rows[28].children[0].value,
						boxE:$.tableViewEntretenimiento.data[0].rows[29].children[0].value,
						luchaLibre:$.tableViewEntretenimiento.data[0].rows[30].children[0].value,
						atletismo:$.tableViewEntretenimiento.data[0].rows[31].children[0].value,
						toros:$.tableViewEntretenimiento.data[0].rows[32].children[0].value,
						baresantros:$.tableViewEntretenimiento.data[0].rows[33].children[0].value,
						inaguracion:$.tableViewEntretenimiento.data[0].rows[34].children[0].value,
						promocion:$.tableViewEntretenimiento.data[0].rows[35].children[0].value,
						showE:$.tableViewEntretenimiento.data[0].rows[36].children[0].value,
						fiestasTematicas:$.tableViewEntretenimiento.data[0].rows[37].children[0].value,
	                    bienvenida:$.tableViewEntretenimiento.data[0].rows[37].children[0].value,
	                   
	                    
					}; 
				 alert(datos.email);
			     enviar.send(params);
			    
			     
			     enviar.onload = function()
						  {
						  	if (this.responseText == "Insert failed")
							   {
							       alert(this.responseText);
							   } 
							else
							   {
							      var alertDialog = Titanium.UI.createAlertDialog({
							          title: 'Alert',
							          message: "Actualizacion Terminado",
							          buttonNames: ['OK']
							       });
							       alertDialog.show();
							       getTodoList();
							        
							    }
						  };
			     
			     	
			 });
			
			
			$.win4.add(scrollView);
			scrollView.add(view);
			view.add($.tableViewAcademica);
			view.add($.tableViewCultural);
			view.add($.tableViewEntretenimiento);
			
			for (var i=0; i < json.length; i++) {
				
			  var row = Ti.UI.createTableViewRow({    					
	    		  selectedBackgroundColor:'yellow',
	    		  height:40
	     	  });
	     	  
	     	  
	     	  if(json[i].tipo=="Academico" && json[i].detalles==""){
			  		var basicSwitch = Ti.UI.createSwitch({
					  value:json[i].activo,
					  right:0
					});
					row.add(basicSwitch);
					var labelUserName = Ti.UI.createLabel({
				    color:'black',
				    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
				    text:'  ' + json[i].tipo,
				    objName: 'nombre',
				    left:0, top: 6,
				    width:360, height: 30
				  	});
				  	row.add(labelUserName);
		  	  }else{
		  		/*
		  		 * Cuando no se cumble la condicion se crea un boton con 2 condicios
		  		 * cuando esta on() o esta en off() estas permiten capturar la preferencia del usuario
		  		 */
		  		var labelUserName = Ti.UI.createLabel({
			    color:'black',
			    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
			    text:'*' + json[i].detalles,
			    objName: 'nombre',
			    left:0, top: 6,
			    width:360, height: 30
			  	});
			  	row.add(labelUserName);
			  	
			  	var button = Ti.UI.createButton({
				    backgroundImage: 'img/off.png',
				    //backgroundSelectedImage:'img/on.png',
				    value:json[i].activo,
				    top: 3,
				    width: 37,
				    height: 35,
				    right:0
				});
				if(button.value==true){
					button.backgroundColor = '#159902';
				    button.value = true;
				    button.backgroundImage ="img/on.png";
				}else{
					button.backgroundColor = '#aaa';
				    button.value = false;
				    button.backgroundImage ="img/off.png";
				}
				
			  	button.on = function() {
				    this.backgroundColor = '#159902';
				    this.value = true;
				    this.backgroundImage ="img/on.png";
				   
				};
			 
				button.off = function() {
				    this.backgroundColor = '#aaa';
				    this.value = false;
				    this.backgroundImage ="img/off.png";
				    
				};
			 
				button.addEventListener('click', function(e) {
				    if(false == e.source.value) {
				        e.source.on();
				        
				    } else {
				        e.source.off();
				         
				    }
				});
			  	row.add(button);
		  	}
	     	  
	     	//Por ultimo solo se agregara al arreglo si cumple la condicion y los demas seran desechados
			if (json[i].tipo=="Academica" || json[i].tipo=="Academico" || json[i].tipo =="Area de Estudio") {
 				dataArray.push(row);     	
 			}; 
	     	  
	     
	     	  
	     	  //Fin de FOR
			};
			
			$.tableViewAcademica.setData(dataArray);
            view.add($.tableViewAcademica);
			
			
			for(var i=0; i<json.length; i++){ 
	                 	
	
	                 	var row = Ti.UI.createTableViewRow({    					
	    					selectedBackgroundColor:'yellow',
	    					height:40
							});
							  	
						  	if(json[i].tipo=="Cultural | Turistica" && json[i].detalles==""){
						  		var basicSwitch = Ti.UI.createSwitch({
								  value:json[i].activo,
								  right:0
								});
								row.add(basicSwitch);
								var labelUserName = Ti.UI.createLabel({
							    color:'black',
							    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
							    text:'  ' + json[i].tipo,
							    objName: 'nombre',
							    left:0, top: 6,
							    width:360, height: 30
							  	});
							  	row.add(labelUserName);
						  	}else{
						  		var button = Ti.UI.createButton({
							    backgroundImage: 'img/off.png',
							    backgroundSelectedImage:'img/on.png',
							    value:json[i].activo,
							    top: 3,
							    width: 37,
							    height: 35,
							    right:0
							});
							if(button.value==true){
							button.backgroundColor = '#159902';
						    button.value = true;
						    button.backgroundImage ="img/on.png";
							}else{
								button.backgroundColor = '#aaa';
							    button.value = false;
							    button.backgroundImage ="img/off.png";
							}
						  	button.on = function() {
							    this.backgroundColor = '#159902';
							    this.value = true;
							    this.backgroundImage ="img/on.png";
							    
							};
						 
							button.off = function() {
							    this.backgroundColor = '#aaa';
							    this.value = false;
							    this.backgroundImage ="img/off.png";
							    
							};
						 
							button.addEventListener('click', function(e) {
							    if(false == e.source.value) {
							        e.source.on();
							    } else {
							        e.source.off();
							    }
							});
						  		row.add(button);
						  		if (json[i].detalles=="Comedia" || json[i].detalles=="Drama" || json[i].detalles=="Infantil"
						  		|| json[i].detalles=="Musical" || json[i].detalles=="Fotografia" || json[i].detalles=="Escultura"
						  		|| json[i].detalles=="Pintura" || json[i].detalles=="Libros" || json[i].detalles=="Clasica"
						  		|| json[i].detalles=="Instrumental" || json[i].detalles=="Folklore | Popular" 
						  		|| json[i].detalles=="Ferias" || json[i].detalles=="Carnavales" || json[i].detalles=="Peregrinaciones"
						  		|| json[i].detalles=="Fiestas Religiosas | Indigenas" || json[i].detalles=="Otros"
						  		|| json[i].detalles=="Otras") {
						  			var labelUserName = Ti.UI.createLabel({
								    color:'black',
								    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
								    text:"   - "+json[i].detalles,
								    objName: 'nombre',
								    left:0, top: 6,
								    width:360, height: 30
								  	});
								  	row.add(labelUserName);
						  		}else{
						  			var labelUserName = Ti.UI.createLabel({
								    color:'black',
								    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
								    text:json[i].detalles,
								    objName: 'nombre',
								    left:0, top: 6,
								    width:360, height: 30
								  	});
								  	row.add(labelUserName);
						  		}
						  	}
						  	
								if (json[i].tipo=="Cultural" || json[i].tipo=="Cultural | Turistica" || json[i].tipo =="Teatro" || json[i].tipo =="Exposicion"
								|| json[i].tipo =="Musica" || json[i].tipo =="Turistico") {
	                 				dataArray2.push(row);     	
	                 			};
						        
	                 };
	                 $.tableViewCultural.setData(dataArray2);
	                 view.add($.tableViewCultural);
                     
	        for( var i=0; i<json.length; i++){ 
	         	
	         	
	         	
	         	var row = Ti.UI.createTableViewRow({    					
					selectedBackgroundColor:'yellow',
					height:40
					});
					
				  	
					
				  	
				  	
				  	if(json[i].tipo=="Entretenimiento" && json[i].detalles==""){
				  		var basicSwitch = Ti.UI.createSwitch({
						  value:json[i].activo,
						  right:0
						});
						row.add(basicSwitch);
						
						var labelUserName = Ti.UI.createLabel({
					    color:'black',
					    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
					    text:'' + json[i].tipo,
					    objName: 'nombre',
					    left:0, top: 6,
					    width:360, height: 30
					  	});
					  	row.add(labelUserName);
				  	}else{
				  	var button = Ti.UI.createButton({
						    backgroundImage: 'img/off.png',
						    value:json[i].activo,
						    top: 3,
						    width: 37,
						    height: 35,
						    right:0
						});
						if(button.value==true){
							button.backgroundColor = '#159902';
						    button.value = true;
						    button.backgroundImage ="img/on.png";
						}else{
							button.backgroundColor = '#aaa';
						    button.value = false;
						    button.backgroundImage ="img/off.png";
						}
				  	button.on = function() {
					    this.backgroundColor = '#159902';
					    this.value = true;
					    this.backgroundImage ="img/on.png";
					    
					};
				 
					button.off = function() {
					    this.backgroundColor = '#aaa';
					    this.value = false;
					    this.backgroundImage ="img/off.png";
					};
				 
					button.addEventListener('click', function(e) {
					    if(false == e.source.value) {
					        e.source.on();
					    } else {
					        e.source.off();
					    }
					});
				  	row.add(button);
				  		if(json[i].detalles=="Electronica" || json[i].detalles=="Jazz | Blues" 
					  		|| json[i].detalles=="Trova" || json[i].detalles=="Rock" || json[i].detalles=="Rock"
					  		|| json[i].detalles=="Alternativa" || json[i].detalles=="Grupera | Nortena"
					  		|| json[i].detalles=="Infantil" || json[i].detalles=="Hip-Hop" || json[i].detalles=="Ranchera"
					  		|| json[i].detalles=="Pop" || json[i].detalles=="Metal" || json[i].detalles=="Reague"
					  		|| json[i].detalles=="Reggeatton" || json[i].detalles=="Baladas | Boleros" 
					  		|| json[i].detalles=="Salsa | Cumbia" || json[i].detalles=="Cristiana"
					  		|| json[i].detalles=="Futbol" || json[i].detalles=="Basketball"|| json[i].detalles=="Tenis"
					  		|| json[i].detalles=="Beisball" || json[i].detalles=="Volleyball" || json[i].detalles=="Torneos"
					  		|| json[i].detalles=="Maratones" || json[i].detalles=="Autos | Motos" 
					  		|| json[i].detalles=="Futbol Americano" || json[i].detalles=="Artes Marciales"
					  		|| json[i].detalles=="Box" || json[i].detalles=="Lucha Libre" || json[i].detalles=="Atletismo"
					  		|| json[i].detalles=="Toros" || json[i].detalles=="Inaguracion" || json[i].detalles=="Promocion"
					  		|| json[i].detalles=="Show" || json[i].detalles=="Fiestas Tematicas" || json[i].detalles=="Bienvenida")
				  		{
				  			var labelUserName = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'  - ' + json[i].detalles,
						    objName: 'nombre',
						    left:5, top: 6,
						    width:360, height: 30
						  	});
						  	row.add(labelUserName);
						  	
				  		}else{
				  			var labelUserName = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'' + json[i].detalles,
						    objName: 'nombre',
						    left:0, top: 6,
						    width:360, height: 30
						  	});
						  	row.add(labelUserName);
						  
				  		}
				  		
				  	}
						if (json[i].tipo=="Entretenimiento" || json[i].tipo =="Conciertos" 
						|| json[i].tipo =="Deportes" || json[i].tipo =="Bares Antros") {
	         				dataArray3.push(row);     	
	         			};
				        
	         };
			         $.tableViewEntretenimiento.setData(dataArray3);
			         view.add($.tableViewEntretenimiento);
			
			 
			
			
			
			
			
			
			
		  };
		
		
		  
		
		
		
		
		
		                        
}
function checkemail(emailAddress)
{
	var testresults;
    var str = emailAddress;
    var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (filter.test(str))
    {
        testresults = true;
    }
    else
    {
        testresults = false;
    }
    return (testresults);
};
function RemoverElementos () {
  if($.win4.children)
    {
        while($.win4.children.length != 0)
        {
            var len = $.win4.children.length;
            $.win4.remove( $.win4.children[0] );
        }
    }
}
function preferencias(){
	var m= Alloy.createController('Next').getView();
	m.open();	
}

