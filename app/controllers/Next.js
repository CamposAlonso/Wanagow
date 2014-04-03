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
								    //title: 'Click me!',
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
								        alert(valor+"/");
								    } else {
								        e.source.off();
								         alert(valor+"/");
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
							    //title: 'Click me!',
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
							    backgroundSelectedImage:'img/on.png',
							    //title: 'Click me!',
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
                     
                     
                     
                     $.container1.add(scrollView);                            
               }; 
 
var dataArray = [];
var dataArray2 = [];
var dataArray3 =[];    
