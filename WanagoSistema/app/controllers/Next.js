/**
 * @author Hector Campos Alonso
 */
var sendit = Ti.Network.createHTTPClient({ 
    onerror: function(e){ 
    Ti.API.debug(e.error); 
           alert('There was an error during the connection'); 
    }, 
    timeout:3000, 
});                      
              //Here you have to change it for your local ip 
              sendit.open('GET', 'http://alonsocampos.net46.net/preferencia.php'); 
              sendit.send(); 
              //Function to be called upon a successful response 
              sendit.onload = function(){ 
                     var json = JSON.parse(this.responseText); 
                     //json.nombre viene de un array de php en el servidor
                     var json = json.nombre; 
                     //if the database is empty show an alert 
                     if(json.length == 0){ 
                            tableView.headerTitle = "The database row is empty"; 
                     }                      
                     //Emptying the data to refresh the view 
                     dataArray = [];
                     dataArray2 = [];
                     dataArray3 =[];
                     var scrollView = Ti.UI.createScrollView({
						  //contentWidth: 'auto',
						  contentHeight: 'auto',
						  showVerticalScrollIndicator: true,
						  //showHorizontalScrollIndicator: true,
						  top:280,
						  height:'95%',
						  width: 600
						});
                     var view = Ti.UI.createView({
						  backgroundColor:'c5ccd4',
						  borderRadius: 10,
						  top:0,
						  height:3600,
						  width: 500
					});
					
					scrollView.add(view);
					
                     //Insert the JSON data to the table view 
                     for( var i=0; i<json.length; i++){ 
                     	
                     	
                     	
                     	var row = Ti.UI.createTableViewRow({    					
	    					selectedBackgroundColor:'yellow',
	    					height:40
							});
					  //La variable valor se crea para poder capturar si el boton esta marcado o no
					   var valor =0;	
					   //La variable id se utiliza para identificar el numero de la fila en que esta posicionado
					   	
							
						  	if(json[i].tipo=="Academico" && json[i].detalles==""){
						  		var basicSwitch = Ti.UI.createSwitch({
								  value:true,
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
								    value:false,
								    top: 3,
								    width: 37,
								    height: 35,
								    right:0
								});
							  	button.on = function() {
								    this.backgroundColor = '#159902';
								    this.value = true;
								    this.backgroundImage ="img/on.png";
								    valor =1;
								};
							 
								button.off = function() {
								    this.backgroundColor = '#aaa';
								    this.value = false;
								    this.backgroundImage ="img/off.png";
								    valor =0;
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
						  	
						  	
								if (json[i].tipo=="Academica" || json[i].tipo=="Academico" || json[i].tipo =="Area de Estudio") {
                     				dataArray.push(row);     	
                     			};
                     	
                     	
						        
                     };
                     $.tableViewAcademica.setData(dataArray);
                     view.add($.tableViewAcademica);
                   
                     for( var i=0; i<json.length; i++){ 
                     	
                     	
                     	
                     	var row = Ti.UI.createTableViewRow({    					
	    					selectedBackgroundColor:'yellow',
	    					height:40
							});
							
							
						  	
						  	var button = Ti.UI.createButton({
							    backgroundImage: 'img/off.png',
							    backgroundSelectedImage:'img/on.png',
							    value:false,
							    top: 3,
							    width: 37,
							    height: 35,
							    right:0
							});
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
							
						  	
						  	
						  	if(json[i].tipo=="Cultural | Turistica" && json[i].detalles==""){
						  		var basicSwitch = Ti.UI.createSwitch({
								  value:true,
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
							
						  	var button = Ti.UI.createButton({
							    backgroundImage: 'img/off.png',
							    
							    value:false,
							    top: 3,
							    width: 37,
							    height: 35,
							    right:0
							});
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
							
						  	
						  	
						  	if(json[i].tipo=="Entretenimiento" && json[i].detalles==""){
						  		var basicSwitch = Ti.UI.createSwitch({
								  value:true,
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
						  		row.add(button);
						  		if(json[i].detalles=="Electronica" || json[i].detalles=="Jazz | Blues" 
						  		|| json[i].detalles=="Trova" || json[i].detalles=="Rock" || json[i].detalles=="Rock"
						  		|| json[i].detalles=="Alternativa" || json[i].detalles=="Grupera | Norteña"
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
						  		|| json[i].detalles=="Show" || json[i].detalles=="Fiestas Tematicas" || json[i].detalles=="Bienvenida"
						  		){
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
                     
                     var guardar = Ti.UI.createButton({
						title:"Guardar",
						width:"100%",
						backgroundColor:"#E3C109",
						height:50,
						top:3300,
						font: {fontFamily: 'Helvetica Neue'},
						color:"white"
					});
					view.add(guardar);
					
					
					guardar.addEventListener('click', function(e)
							   {
							   	
    						   	
								
								var enviar = Ti.Network.createHTTPClient({ 
			                    onerror: function(e){ 
			                           Ti.API.debug(e.error); 
			                           alert('There was an error during the connection'); 
			                     }, 
			                  timeout:3000, 
			              });                      
			              //Here you have to change it for your local ip 
			              enviar.open('POST', 'http://alonsocampos.net46.net/segundaversion/gurdarintereses.php'); 
			              var params = 
								{
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
									ballet:$.tableViewCultural.data[0].rows[1].children[1].value,
									teatro:$.tableViewCultural.data[0].rows[2].children[1].value, 
				                    comedia:$.tableViewCultural.data[0].rows[3].children[1].value,
									drama:$.tableViewCultural.data[0].rows[4].children[1].value,
									infantil:$.tableViewCultural.data[0].rows[5].children[1].value,
									musical:$.tableViewCultural.data[0].rows[6].children[1].value,
									otrosT:$.tableViewCultural.data[0].rows[7].children[1].value,
									circos:$.tableViewCultural.data[0].rows[8].children[1].value,
									exposiciones:$.tableViewCultural.data[0].rows[9].children[1].value,
									fotografia:$.tableViewCultural.data[0].rows[10].children[1].value,
									escultura:$.tableViewCultural.data[0].rows[11].children[1].value,
									pintura:$.tableViewCultural.data[0].rows[12].children[1].value,
									libro:$.tableViewCultural.data[0].rows[13].children[1].value,
									otrosE:$.tableViewCultural.data[0].rows[14].children[1].value,
									cine:$.tableViewCultural.data[0].rows[15].children[1].value,
									musica:$.tableViewCultural.data[0].rows[16].children[1].value,
									clasica:$.tableViewCultural.data[0].rows[17].children[1].value,
									instrumental:$.tableViewCultural.data[0].rows[18].children[1].value,
									fulklore:$.tableViewCultural.data[0].rows[19].children[1].value,
									turistico:$.tableViewCultural.data[0].rows[20].children[1].value,
									ferias:$.tableViewCultural.data[0].rows[21].children[1].value,
									carnavales:$.tableViewCultural.data[0].rows[22].children[1].value,
									peregrinacion:$.tableViewCultural.data[0].rows[23].children[1].value,
									religiosa:$.tableViewCultural.data[0].rows[24].children[1].value,
									otrosTuristica:$.tableViewCultural.data[0].rows[25].children[1].value,
									
									entretenimiento:$.tableViewEntretenimiento.data[0].rows[0].children[0].value,
									conciertos:$.tableViewEntretenimiento.data[0].rows[1].children[1].value,
									electronica:$.tableViewEntretenimiento.data[0].rows[2].children[1].value,
									jazzblues:$.tableViewEntretenimiento.data[0].rows[3].children[1].value,
									trova:$.tableViewEntretenimiento.data[0].rows[4].children[1].value,
									rock:$.tableViewEntretenimiento.data[0].rows[5].children[1].value,
									alternativa:$.tableViewEntretenimiento.data[0].rows[6].children[1].value,
									gruperanortena:$.tableViewEntretenimiento.data[0].rows[7].children[1].value,
									infantilE:$.tableViewEntretenimiento.data[0].rows[8].children[1].value,
									hiphop:$.tableViewEntretenimiento.data[0].rows[9].children[1].value,
									ranchera:$.tableViewEntretenimiento.data[0].rows[10].children[1].value,
									pop:$.tableViewEntretenimiento.data[0].rows[11].children[1].value,
									metal:$.tableViewEntretenimiento.data[0].rows[12].children[1].value,
									reague:$.tableViewEntretenimiento.data[0].rows[13].children[1].value,
									reggeatton:$.tableViewEntretenimiento.data[0].rows[14].children[1].value,
									baladasboleros:$.tableViewEntretenimiento.data[0].rows[15].children[1].value,
									salsacumbia:$.tableViewEntretenimiento.data[0].rows[16].children[1].value,
									cristiana:$.tableViewEntretenimiento.data[0].rows[17].children[1].value,
									deportes:$.tableViewEntretenimiento.data[0].rows[18].children[1].value,
									futbol:$.tableViewEntretenimiento.data[0].rows[19].children[1].value,
									basquetball:$.tableViewEntretenimiento.data[0].rows[20].children[1].value,
									tenis:$.tableViewEntretenimiento.data[0].rows[21].children[1].value,
									beisball:$.tableViewEntretenimiento.data[0].rows[22].children[1].value,
									volleyball:$.tableViewEntretenimiento.data[0].rows[23].children[1].value,
									torneos:$.tableViewEntretenimiento.data[0].rows[24].children[1].value,
									maratones:$.tableViewEntretenimiento.data[0].rows[25].children[1].value,
									autosmotos:$.tableViewEntretenimiento.data[0].rows[26].children[1].value,
									futbolAmericano:$.tableViewEntretenimiento.data[0].rows[27].children[1].value,
									artesMarciales:$.tableViewEntretenimiento.data[0].rows[28].children[1].value,
									boxE:$.tableViewEntretenimiento.data[0].rows[29].children[1].value,
									luchaLibre:$.tableViewEntretenimiento.data[0].rows[30].children[1].value,
									atletismo:$.tableViewEntretenimiento.data[0].rows[31].children[1].value,
									toros:$.tableViewEntretenimiento.data[0].rows[32].children[1].value,
									baresantros:$.tableViewEntretenimiento.data[0].rows[33].children[1].value,
									inaguracion:$.tableViewEntretenimiento.data[0].rows[34].children[1].value,
									promocion:$.tableViewEntretenimiento.data[0].rows[35].children[1].value,
									showE:$.tableViewEntretenimiento.data[0].rows[36].children[1].value,
									fiestasTematicas:$.tableViewEntretenimiento.data[0].rows[37].children[1].value,
				                    bienvenida:$.tableViewEntretenimiento.data[0].rows[37].children[1].value,
								}; 
								
			              enviar.send(params);
						  enviar.onload = function(){
						  		if (this.responseText == "Insert failed" || this.responseText == "That username or email already exists")
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
								       
								    }
						  }; 
								
								
							   });
                     
                     $.container1.add(scrollView);                            
               }; 
 
var dataArray = [];
var dataArray2 = [];
var dataArray3 =[];    

function OmitirPreferencias() {
 						  var enviar = Ti.Network.createHTTPClient({ 
			                    onerror: function(e){ 
			                           Ti.API.debug(e.error); 
			                           alert('There was an error during the connection'); 
			                     }, 
			                  timeout:3000, 
			              });                      
			              enviar.open('POST', 'http://alonsocampos.net46.net/segundaversion/omitir_preferencias.php'); 
			              enviar.send();
						  enviar.onload = function(){
						  	
			  		        var alertDialog = Titanium.UI.createAlertDialog({
					            title: 'Alert',
					            message: this.responseText,
					            buttonNames: ['OK']
					        });
					        alertDialog.show();
							Alloy.createController('Evento').getView().open();	
						  }; 
}