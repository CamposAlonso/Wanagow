function Controller() {
    function getTodoList() {
        if ("" == correo.email) {
            var sendit = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("La conexion esta tardando demaciado intente acceder nuevamente");
                },
                timeout: 1e3
            });
            var preferencias = {
                email: args.email,
                cultural: args.cultural,
                ballet: args.ballet,
                teatro: args.teatro,
                comedia: args.comedia,
                drama: args.drama,
                infantilC: args.infantilC,
                musical: args.musical,
                otrosT: args.otrosT,
                circo: args.circo,
                exposicion: args.exposicion,
                fotografia: args.fotografia,
                escultura: args.escultura,
                pintura: args.pintura,
                libros: args.libros,
                otrosE: args.otrosE,
                cinearte: args.cinearte,
                musica: args.musica,
                clasica: args.clasica,
                instrumental: args.instrumental,
                folklorepopular: args.folklorepopular,
                turistico: args.turistico,
                ferias: args.ferias,
                carnavales: args.carnavales,
                peregrinaciones: args.peregrinaciones,
                fiestasReligiosasIndigenas: args.fiestasReligiosasIndigenas,
                otrosTuristica: args.otrosTuristica,
                entretenimiento: args.entretenimiento,
                conciertos: args.conciertos,
                electronica: args.electronica,
                jazzblues: args.jazzblues,
                trova: args.trova,
                rock: args.rock,
                alternativa: args.alternativa,
                gruperanortena: args.gruperanortena,
                infantilE: args.infantilE,
                hiphop: args.hiphop,
                rancheras: args.rancheras,
                pop: args.pop,
                metal: args.metal,
                reague: args.reague,
                reggeatton: args.reggeatton,
                baladasboleros: args.baladasboleros,
                salsacumbia: args.salsacumbia,
                cristiana: args.cristiana,
                deportes: args.deportes,
                futbol: args.futbol,
                basquetball: args.basquetball,
                tenis: args.tenis,
                beisball: args.beisball,
                volleyball: args.volleyball,
                torneos: args.torneos,
                maratones: args.maratones,
                futbolAmericano: args.futbolAmericano,
                artesMarciales: args.artesMarciales,
                box: args.box,
                luchaLibre: args.luchaLibre,
                atletismo: args.atletismo,
                toros: args.toros,
                autosmotos: args.autosmotos,
                baresantros: args.baresantros,
                inaguracion: args.inaguracion,
                promocion: args.promocion,
                show: args.show,
                fiestasTematicas: args.fiestasTematicas,
                bienvenida: args.bienvenida,
                academica: args.academica,
                areaestudio: args.areaestudio,
                congresos: args.congresos,
                convenciones: args.convenciones,
                seminarios: args.seminarios,
                talleres: args.talleres,
                diplomados: args.diplomados,
                cursos: args.cursos,
                conferencias: args.conferencias,
                expos: args.expos
            };
            sendit.open("GET", "http://alonsocampos.net46.net/segundaversion/preferencias_.php");
            sendit.send(preferencias);
            sendit.onload = function() {
                var json = JSON.parse(this.responseText);
                var json = json.nombre;
                0 == json.length && ($.tableView.headerTitle = "No hay eventos disponibles");
                dataArray = [];
                for (var i = 0; json.length > i; i++) {
                    var row = Ti.UI.createTableViewRow({
                        selectedBackgroundColor: "white",
                        id: json[i].idEvento,
                        height: 110
                    });
                    row.titulo = json[i].titulo;
                    row.imagen = json[i].image;
                    row.detalles = json[i].descripcion;
                    row.fecha = json[i].fecha;
                    row.hora = json[i].hora;
                    row.costo = json[i].costo;
                    row.lugar = json[i].lugar;
                    var imageAvatar = Ti.UI.createImageView({
                        image: IMG_BASE + json[i].image,
                        left: 20,
                        top: 2,
                        width: 190,
                        height: 90
                    });
                    row.add(imageAvatar);
                    var labelUserName = Ti.UI.createLabel({
                        color: "black",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 16,
                            fontWeight: "bold"
                        },
                        text: "" + json[i].titulo,
                        left: 240,
                        top: 6,
                        width: 360,
                        height: 30
                    });
                    row.add(labelUserName);
                    if (0 != json[i].costo) {
                        var labelDetails = Ti.UI.createLabel({
                            color: "#222",
                            font: {
                                fontFamily: "Arial",
                                fontSize: 14,
                                fontWeight: "normal"
                            },
                            text: "" + json[i].fecha + "               " + json[i].costo,
                            left: 240,
                            top: 44,
                            width: "100%"
                        });
                        row.add(labelDetails);
                    } else {
                        var labelDetails = Ti.UI.createLabel({
                            color: "#222",
                            font: {
                                fontFamily: "Arial",
                                fontSize: 14,
                                fontWeight: "normal"
                            },
                            text: "" + json[i].fecha + "               " + "Gratuito",
                            left: 240,
                            top: 44,
                            width: "100%"
                        });
                        row.add(labelDetails);
                    }
                    if ("Academica" == json[i].tipo || "Area de Estudio" == json[i].tipo) {
                        var view = Titanium.UI.createView({
                            borderRadius: 10,
                            backgroundColor: "yellow",
                            width: 10,
                            height: 150,
                            right: 0
                        });
                        row.add(view);
                    }
                    if ("Cultural" == json[i].tipo || "Teatro" == json[i].tipo || "Exposicion" == json[i].tipo || "Musica" == json[i].tipo || "Turistico" == json[i].tipo) {
                        var view = Titanium.UI.createView({
                            borderRadius: 10,
                            backgroundColor: "green",
                            width: 10,
                            height: 150,
                            right: 0
                        });
                        row.add(view);
                    }
                    if ("Entretenimiento" == json[i].tipo || "Conciertos" == json[i].tipo || "Deportes" == json[i].tipo || "Bares Antros" == json[i].tipo) {
                        var view = Titanium.UI.createView({
                            borderRadius: 10,
                            backgroundColor: "orange",
                            width: 10,
                            height: 150,
                            right: 0
                        });
                        row.add(view);
                    }
                    var labelDate = Ti.UI.createLabel({
                        color: "#999",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 12,
                            fontWeight: "normal"
                        },
                        text: "" + json[i].lugar,
                        left: 240,
                        bottom: 10,
                        width: "100%",
                        height: 20
                    });
                    row.add(labelDate);
                    dataArray.push(row);
                }
                $.tableView.setData(dataArray);
            };
        } else {
            var sendit = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("La conexion esta tardando demaciado intente acceder nuevamente");
                },
                timeout: 1e3
            });
            var preferencias = {
                email: correo.email
            };
            sendit.open("POST", "http://alonsocampos.net46.net/segundaversion/cargareventos.php");
            sendit.send(preferencias);
            sendit.onload = function() {
                var json = JSON.parse(this.responseText);
                var json = json.nombre;
                0 == json.length && ($.tableView.headerTitle = "No hay eventos disponibles");
                dataArray = [];
                for (var i = 0; json.length > i; i++) {
                    var row = Ti.UI.createTableViewRow({
                        selectedBackgroundColor: "white",
                        id: json[i].idEvento,
                        height: 110
                    });
                    row.titulo = json[i].titulo;
                    row.imagen = json[i].image;
                    row.detalles = json[i].descripcion;
                    row.fecha = json[i].fecha;
                    row.hora = json[i].hora;
                    row.costo = json[i].costo;
                    row.lugar = json[i].lugar;
                    var imageAvatar = Ti.UI.createImageView({
                        image: IMG_BASE + json[i].image,
                        left: 20,
                        top: 2,
                        width: 190,
                        height: 90
                    });
                    row.add(imageAvatar);
                    var labelUserName = Ti.UI.createLabel({
                        color: "black",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 16,
                            fontWeight: "bold"
                        },
                        text: "" + json[i].titulo,
                        left: 240,
                        top: 6,
                        width: 360,
                        height: 30
                    });
                    row.add(labelUserName);
                    if (0 != json[i].costo) {
                        var labelDetails = Ti.UI.createLabel({
                            color: "#222",
                            font: {
                                fontFamily: "Arial",
                                fontSize: 14,
                                fontWeight: "normal"
                            },
                            text: "" + json[i].fecha + "               " + json[i].costo,
                            left: 240,
                            top: 44,
                            width: "100%"
                        });
                        row.add(labelDetails);
                    } else {
                        var labelDetails = Ti.UI.createLabel({
                            color: "#222",
                            font: {
                                fontFamily: "Arial",
                                fontSize: 14,
                                fontWeight: "normal"
                            },
                            text: "" + json[i].fecha + "               " + "Gratuito",
                            left: 240,
                            top: 44,
                            width: "100%"
                        });
                        row.add(labelDetails);
                    }
                    if ("Academica" == json[i].tipo || "Area de Estudio" == json[i].tipo) {
                        var view = Titanium.UI.createView({
                            borderRadius: 10,
                            backgroundColor: "yellow",
                            width: 10,
                            height: 150,
                            right: 0
                        });
                        row.add(view);
                    }
                    if ("Cultural" == json[i].tipo || "Teatro" == json[i].tipo || "Exposicion" == json[i].tipo || "Musica" == json[i].tipo || "Turistico" == json[i].tipo) {
                        var view = Titanium.UI.createView({
                            borderRadius: 10,
                            backgroundColor: "green",
                            width: 10,
                            height: 150,
                            right: 0
                        });
                        row.add(view);
                    }
                    if ("Entretenimiento" == json[i].tipo || "Conciertos" == json[i].tipo || "Deportes" == json[i].tipo || "Bares Antros" == json[i].tipo) {
                        var view = Titanium.UI.createView({
                            borderRadius: 10,
                            backgroundColor: "orange",
                            width: 10,
                            height: 150,
                            right: 0
                        });
                        row.add(view);
                    }
                    var labelDate = Ti.UI.createLabel({
                        color: "#999",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 12,
                            fontWeight: "normal"
                        },
                        text: "" + json[i].lugar,
                        left: 240,
                        bottom: 10,
                        width: "100%",
                        height: 20
                    });
                    row.add(labelDate);
                    dataArray.push(row);
                }
                $.tableView.setData(dataArray);
            };
        }
    }
    function header() {
        var cabecera = Titanium.UI.createView({
            backgroundColor: "#F4CE00",
            height: 75,
            width: "100%",
            top: 0
        });
        var preferencia = Titanium.UI.createButton({
            width: 200,
            right: 250,
            left: 450,
            backgroundColor: "#DCBC0D",
            height: 50,
            top: 10,
            font: {
                fontFamily: "Helvetica Neue"
            },
            color: "white",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            borderColor: "black",
            title: "Preferencias"
        });
        var datosPersonales = Titanium.UI.createButton({
            width: 200,
            right: 250,
            left: 150,
            backgroundColor: "#DCBC0D",
            height: 50,
            top: 10,
            font: {
                fontFamily: "Helvetica Neue"
            },
            color: "white",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            borderColor: "black",
            title: "Datos Personales"
        });
        $.win4.add(cabecera);
        $.win4.add(datosPersonales);
        $.win4.add(preferencia);
        datosPersonales.addEventListener("click", DatosCuenta);
        preferencia.addEventListener("click", TablePreferencias);
    }
    function principal() {
        header();
        DatosCuenta();
    }
    function DatosCuenta() {
        RemoverElementos();
        header();
        var label1 = Ti.UI.createLabel({
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            color: "black",
            layout: "center",
            text: "DATOS DE LA CUENTA",
            top: 190
        });
        $.win4.add(label1);
        var email = Ti.UI.createTextField({
            width: 300,
            right: 50,
            left: 250,
            height: 45,
            top: 250,
            hintText: "Email",
            borderColor: "#F4CE00",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            value: datos.email,
            color: "black",
            editable: false
        });
        $.win4.add(email);
        var password = Ti.UI.createTextField({
            width: 300,
            right: 50,
            left: 250,
            height: 45,
            top: 300,
            hintText: "Password",
            borderColor: "#F4CE00",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            color: "black",
            passwordMask: true,
            value: datos.passowrd
        });
        $.win4.add(password);
        var confirmacion = Ti.UI.createTextField({
            width: 300,
            right: 50,
            left: 250,
            height: 45,
            top: 350,
            hintText: "Confirme Password",
            borderColor: "#F4CE00",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            passwordMask: true,
            color: "black",
            value: datos.passowrd
        });
        $.win4.add(confirmacion);
        var label2 = Ti.UI.createLabel({
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            top: 410,
            text: "DATOS DEL USUARIO"
        });
        $.win4.add(label2);
        var nombre = Ti.UI.createTextField({
            width: 300,
            right: 50,
            left: 250,
            height: 45,
            top: 450,
            hintText: "Nombre",
            borderColor: "#F4CE00",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            color: "black",
            value: datos.nombre
        });
        $.win4.add(nombre);
        var apellidos = Ti.UI.createTextField({
            width: 300,
            right: 50,
            left: 250,
            height: 45,
            top: 500,
            hintText: "Apellidos",
            borderColor: "#F4CE00",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            color: "black",
            value: datos.apellidos
        });
        $.win4.add(apellidos);
        var fecha = Titanium.UI.createButton({
            width: 300,
            right: 300,
            left: 250,
            backgroundColor: "#E3C109",
            height: 50,
            top: 570,
            font: {
                fontFamily: "Helvetica Neue"
            },
            color: "white",
            title: "Fecha de Nacimiento"
        });
        $.win4.add(fecha);
        var label3 = Ti.UI.createLabel({
            width: 100,
            right: 100,
            left: 260,
            height: 50,
            top: 650,
            text: "SEXO:"
        });
        $.win4.add(label3);
        var mujer = Titanium.UI.createButton({
            width: 100,
            right: 100,
            left: 340,
            backgroundColor: "#DCBC0D",
            height: 50,
            top: 650,
            font: {
                fontFamily: "Helvetica Neue"
            },
            color: "white",
            title: "Mujer"
        });
        $.win4.add(mujer);
        var hombre = Titanium.UI.createButton({
            width: 100,
            right: 100,
            left: 436,
            backgroundColor: "#C5B76A",
            height: 50,
            top: 650,
            font: {
                fontFamily: "Helvetica Neue"
            },
            color: "white",
            title: "Hombre"
        });
        $.win4.add(hombre);
        var guardar = Titanium.UI.createButton({
            width: 300,
            right: 300,
            left: 250,
            layout: "center",
            backgroundColor: "#515050",
            height: 50,
            top: 750,
            font: {
                fontFamily: "Helvetica Neue"
            },
            color: "white",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            title: "Guardar"
        });
        guardar.addEventListener("click", function() {
            var sendit = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("La conexion esta tardando demaciado intente acceder nuevamente");
                },
                timeout: 3e3
            });
            if ("" != email.value && "" != password.value && "" != confirmacion.value && "" != nombre.value && "" != apellidos.value) if (password.value != confirmacion.value) alert("Las contraseñas no coinciden"); else if (checkemail(email.value)) {
                sendit.open("POST", "http://alonsocampos.net46.net/segundaversion/update_personal.php");
                var params = {
                    correo_actual: email.value,
                    password: password.value,
                    nombre: nombre.value,
                    apellidos: apellidos.value
                };
                sendit.send(params);
                alert("Informacion enviada");
            } else alert("Por favor ingresa un correo valido"); else alert("Complete la informacion necesaria");
            sendit.onload = function() {
                if ("A ocurrido un error intente mas tarde" == this.responseText || "El correo no existe" == this.responseText) alert(this.responseText); else {
                    var alertDialog = Titanium.UI.createAlertDialog({
                        title: "Alert",
                        message: this.responseText,
                        buttonNames: [ "OK" ]
                    });
                    alertDialog.show();
                    getTodoList();
                }
            };
        });
        $.win4.add(guardar);
    }
    function TablePreferencias() {
        RemoverElementos();
        header();
        var dataArray = [];
        var dataArray2 = [];
        var dataArray3 = [];
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("La conexion esta tardando demaciado intente acceder nuevamente");
            },
            timeout: 3e3
        });
        sendit.open("POST", "http://alonsocampos.net46.net/segundaversion/update_preferences.php");
        var params = {
            email: datos.email
        };
        sendit.send(params);
        sendit.onload = function() {
            var json = JSON.parse(this.responseText);
            var json = json.nombre;
            0 == json.length && (tableView.headerTitle = "No hay informacion disponible");
            dataArray = [];
            dataArray2 = [];
            dataArray3 = [];
            var scrollView = Ti.UI.createScrollView({
                contentHeight: "auto",
                showVerticalScrollIndicator: true,
                top: 80,
                height: "90%",
                width: 600
            });
            var view = Ti.UI.createView({
                backgroundColor: "white",
                borderRadius: 10,
                top: 100,
                height: 3310,
                width: 500
            });
            var guardar = Ti.UI.createButton({
                title: "Guardar",
                width: "100%",
                backgroundColor: "#E3C109",
                height: 50,
                top: 3230,
                font: {
                    fontFamily: "Helvetica Neue"
                },
                color: "white",
                zIndex: 1
            });
            view.add(guardar);
            guardar.addEventListener("click", function() {
                var enviar = Ti.Network.createHTTPClient({
                    onerror: function(e) {
                        Ti.API.debug(e.error);
                        alert("There was an error during the connection");
                    },
                    timeout: 3e3
                });
                enviar.open("POST", "http://alonsocampos.net46.net/segundaversion/updatepreferencias.php");
                var params = {
                    email: datos.email,
                    academica: $.tableViewAcademica.data[0].rows[0].children[0].value,
                    area: $.tableViewAcademica.data[0].rows[1].children[1].value,
                    congreso: $.tableViewAcademica.data[0].rows[2].children[1].value,
                    curso: $.tableViewAcademica.data[0].rows[3].children[1].value,
                    convencion: $.tableViewAcademica.data[0].rows[4].children[1].value,
                    seminario: $.tableViewAcademica.data[0].rows[5].children[1].value,
                    taller: $.tableViewAcademica.data[0].rows[6].children[1].value,
                    diplomado: $.tableViewAcademica.data[0].rows[7].children[1].value,
                    conferencia: $.tableViewAcademica.data[0].rows[8].children[1].value,
                    expo: $.tableViewAcademica.data[0].rows[9].children[1].value,
                    cultural: $.tableViewCultural.data[0].rows[0].children[0].value,
                    ballet: $.tableViewCultural.data[0].rows[1].children[0].value,
                    teatro: $.tableViewCultural.data[0].rows[2].children[0].value,
                    comedia: $.tableViewCultural.data[0].rows[3].children[0].value,
                    drama: $.tableViewCultural.data[0].rows[4].children[0].value,
                    infantilC: $.tableViewCultural.data[0].rows[5].children[0].value,
                    musical: $.tableViewCultural.data[0].rows[6].children[0].value,
                    otrosT: $.tableViewCultural.data[0].rows[7].children[0].value,
                    circos: $.tableViewCultural.data[0].rows[8].children[0].value,
                    exposiciones: $.tableViewCultural.data[0].rows[9].children[0].value,
                    fotografia: $.tableViewCultural.data[0].rows[10].children[0].value,
                    escultura: $.tableViewCultural.data[0].rows[11].children[0].value,
                    pintura: $.tableViewCultural.data[0].rows[12].children[0].value,
                    libros: $.tableViewCultural.data[0].rows[13].children[0].value,
                    otrosE: $.tableViewCultural.data[0].rows[14].children[0].value,
                    cineArte: $.tableViewCultural.data[0].rows[15].children[0].value,
                    musica: $.tableViewCultural.data[0].rows[16].children[0].value,
                    clasica: $.tableViewCultural.data[0].rows[17].children[0].value,
                    instrumental: $.tableViewCultural.data[0].rows[18].children[0].value,
                    folklorepopular: $.tableViewCultural.data[0].rows[19].children[0].value,
                    turistico: $.tableViewCultural.data[0].rows[20].children[0].value,
                    ferias: $.tableViewCultural.data[0].rows[21].children[0].value,
                    carnavales: $.tableViewCultural.data[0].rows[22].children[0].value,
                    peregrinacion: $.tableViewCultural.data[0].rows[23].children[0].value,
                    fiestasReligiosasIndigenas: $.tableViewCultural.data[0].rows[24].children[0].value,
                    otrosTuristica: $.tableViewCultural.data[0].rows[25].children[0].value,
                    entretenimiento: $.tableViewEntretenimiento.data[0].rows[0].children[0].value,
                    conciertos: $.tableViewEntretenimiento.data[0].rows[1].children[0].value,
                    electronica: $.tableViewEntretenimiento.data[0].rows[2].children[0].value,
                    jazzblues: $.tableViewEntretenimiento.data[0].rows[3].children[0].value,
                    trova: $.tableViewEntretenimiento.data[0].rows[4].children[0].value,
                    rock: $.tableViewEntretenimiento.data[0].rows[5].children[0].value,
                    alternativa: $.tableViewEntretenimiento.data[0].rows[6].children[0].value,
                    gruperanortena: $.tableViewEntretenimiento.data[0].rows[7].children[0].value,
                    infantilE: $.tableViewEntretenimiento.data[0].rows[8].children[0].value,
                    hiphop: $.tableViewEntretenimiento.data[0].rows[9].children[0].value,
                    ranchera: $.tableViewEntretenimiento.data[0].rows[10].children[0].value,
                    pop: $.tableViewEntretenimiento.data[0].rows[11].children[0].value,
                    metal: $.tableViewEntretenimiento.data[0].rows[12].children[0].value,
                    reague: $.tableViewEntretenimiento.data[0].rows[13].children[0].value,
                    reggeatton: $.tableViewEntretenimiento.data[0].rows[14].children[0].value,
                    baladasboleros: $.tableViewEntretenimiento.data[0].rows[15].children[0].value,
                    salsacumbia: $.tableViewEntretenimiento.data[0].rows[16].children[0].value,
                    cristiana: $.tableViewEntretenimiento.data[0].rows[17].children[0].value,
                    deportes: $.tableViewEntretenimiento.data[0].rows[18].children[0].value,
                    futbol: $.tableViewEntretenimiento.data[0].rows[19].children[0].value,
                    basquetball: $.tableViewEntretenimiento.data[0].rows[20].children[0].value,
                    tenis: $.tableViewEntretenimiento.data[0].rows[21].children[0].value,
                    beisball: $.tableViewEntretenimiento.data[0].rows[22].children[0].value,
                    volleyball: $.tableViewEntretenimiento.data[0].rows[23].children[0].value,
                    torneos: $.tableViewEntretenimiento.data[0].rows[24].children[0].value,
                    maratones: $.tableViewEntretenimiento.data[0].rows[25].children[0].value,
                    autosmotos: $.tableViewEntretenimiento.data[0].rows[26].children[0].value,
                    futbolAmericano: $.tableViewEntretenimiento.data[0].rows[27].children[0].value,
                    artesMarciales: $.tableViewEntretenimiento.data[0].rows[28].children[0].value,
                    boxE: $.tableViewEntretenimiento.data[0].rows[29].children[0].value,
                    luchaLibre: $.tableViewEntretenimiento.data[0].rows[30].children[0].value,
                    atletismo: $.tableViewEntretenimiento.data[0].rows[31].children[0].value,
                    toros: $.tableViewEntretenimiento.data[0].rows[32].children[0].value,
                    baresantros: $.tableViewEntretenimiento.data[0].rows[33].children[0].value,
                    inaguracion: $.tableViewEntretenimiento.data[0].rows[34].children[0].value,
                    promocion: $.tableViewEntretenimiento.data[0].rows[35].children[0].value,
                    showE: $.tableViewEntretenimiento.data[0].rows[36].children[0].value,
                    fiestasTematicas: $.tableViewEntretenimiento.data[0].rows[37].children[0].value,
                    bienvenida: $.tableViewEntretenimiento.data[0].rows[37].children[0].value
                };
                alert(datos.email);
                enviar.send(params);
                enviar.onload = function() {
                    if ("Insert failed" == this.responseText) alert(this.responseText); else {
                        var alertDialog = Titanium.UI.createAlertDialog({
                            title: "Alert",
                            message: "Actualizacion Terminado",
                            buttonNames: [ "OK" ]
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
            for (var i = 0; json.length > i; i++) {
                var row = Ti.UI.createTableViewRow({
                    selectedBackgroundColor: "yellow",
                    height: 40
                });
                if ("Academico" == json[i].tipo && "" == json[i].detalles) {
                    var basicSwitch = Ti.UI.createSwitch({
                        value: json[i].activo,
                        right: 0
                    });
                    row.add(basicSwitch);
                    var labelUserName = Ti.UI.createLabel({
                        color: "black",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 16,
                            fontWeight: "bold"
                        },
                        text: "  " + json[i].tipo,
                        objName: "nombre",
                        left: 0,
                        top: 6,
                        width: 360,
                        height: 30
                    });
                    row.add(labelUserName);
                } else {
                    var labelUserName = Ti.UI.createLabel({
                        color: "black",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 16,
                            fontWeight: "bold"
                        },
                        text: "*" + json[i].detalles,
                        objName: "nombre",
                        left: 0,
                        top: 6,
                        width: 360,
                        height: 30
                    });
                    row.add(labelUserName);
                    var button = Ti.UI.createButton({
                        backgroundImage: "img/off.png",
                        value: json[i].activo,
                        top: 3,
                        width: 37,
                        height: 35,
                        right: 0
                    });
                    if (true == button.value) {
                        button.backgroundColor = "#159902";
                        button.value = true;
                        button.backgroundImage = "img/on.png";
                    } else {
                        button.backgroundColor = "#aaa";
                        button.value = false;
                        button.backgroundImage = "img/off.png";
                    }
                    button.on = function() {
                        this.backgroundColor = "#159902";
                        this.value = true;
                        this.backgroundImage = "img/on.png";
                    };
                    button.off = function() {
                        this.backgroundColor = "#aaa";
                        this.value = false;
                        this.backgroundImage = "img/off.png";
                    };
                    button.addEventListener("click", function(e) {
                        false == e.source.value ? e.source.on() : e.source.off();
                    });
                    row.add(button);
                }
                ("Academica" == json[i].tipo || "Academico" == json[i].tipo || "Area de Estudio" == json[i].tipo) && dataArray.push(row);
            }
            $.tableViewAcademica.setData(dataArray);
            view.add($.tableViewAcademica);
            for (var i = 0; json.length > i; i++) {
                var row = Ti.UI.createTableViewRow({
                    selectedBackgroundColor: "yellow",
                    height: 40
                });
                if ("Cultural | Turistica" == json[i].tipo && "" == json[i].detalles) {
                    var basicSwitch = Ti.UI.createSwitch({
                        value: json[i].activo,
                        right: 0
                    });
                    row.add(basicSwitch);
                    var labelUserName = Ti.UI.createLabel({
                        color: "black",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 16,
                            fontWeight: "bold"
                        },
                        text: "  " + json[i].tipo,
                        objName: "nombre",
                        left: 0,
                        top: 6,
                        width: 360,
                        height: 30
                    });
                    row.add(labelUserName);
                } else {
                    var button = Ti.UI.createButton({
                        backgroundImage: "img/off.png",
                        backgroundSelectedImage: "img/on.png",
                        value: json[i].activo,
                        top: 3,
                        width: 37,
                        height: 35,
                        right: 0
                    });
                    if (true == button.value) {
                        button.backgroundColor = "#159902";
                        button.value = true;
                        button.backgroundImage = "img/on.png";
                    } else {
                        button.backgroundColor = "#aaa";
                        button.value = false;
                        button.backgroundImage = "img/off.png";
                    }
                    button.on = function() {
                        this.backgroundColor = "#159902";
                        this.value = true;
                        this.backgroundImage = "img/on.png";
                    };
                    button.off = function() {
                        this.backgroundColor = "#aaa";
                        this.value = false;
                        this.backgroundImage = "img/off.png";
                    };
                    button.addEventListener("click", function(e) {
                        false == e.source.value ? e.source.on() : e.source.off();
                    });
                    row.add(button);
                    if ("Comedia" == json[i].detalles || "Drama" == json[i].detalles || "Infantil" == json[i].detalles || "Musical" == json[i].detalles || "Fotografia" == json[i].detalles || "Escultura" == json[i].detalles || "Pintura" == json[i].detalles || "Libros" == json[i].detalles || "Clasica" == json[i].detalles || "Instrumental" == json[i].detalles || "Folklore | Popular" == json[i].detalles || "Ferias" == json[i].detalles || "Carnavales" == json[i].detalles || "Peregrinaciones" == json[i].detalles || "Fiestas Religiosas | Indigenas" == json[i].detalles || "Otros" == json[i].detalles || "Otras" == json[i].detalles) {
                        var labelUserName = Ti.UI.createLabel({
                            color: "black",
                            font: {
                                fontFamily: "Arial",
                                fontSize: 16,
                                fontWeight: "bold"
                            },
                            text: "   - " + json[i].detalles,
                            objName: "nombre",
                            left: 0,
                            top: 6,
                            width: 360,
                            height: 30
                        });
                        row.add(labelUserName);
                    } else {
                        var labelUserName = Ti.UI.createLabel({
                            color: "black",
                            font: {
                                fontFamily: "Arial",
                                fontSize: 16,
                                fontWeight: "bold"
                            },
                            text: json[i].detalles,
                            objName: "nombre",
                            left: 0,
                            top: 6,
                            width: 360,
                            height: 30
                        });
                        row.add(labelUserName);
                    }
                }
                ("Cultural" == json[i].tipo || "Cultural | Turistica" == json[i].tipo || "Teatro" == json[i].tipo || "Exposicion" == json[i].tipo || "Musica" == json[i].tipo || "Turistico" == json[i].tipo) && dataArray2.push(row);
            }
            $.tableViewCultural.setData(dataArray2);
            view.add($.tableViewCultural);
            for (var i = 0; json.length > i; i++) {
                var row = Ti.UI.createTableViewRow({
                    selectedBackgroundColor: "yellow",
                    height: 40
                });
                if ("Entretenimiento" == json[i].tipo && "" == json[i].detalles) {
                    var basicSwitch = Ti.UI.createSwitch({
                        value: json[i].activo,
                        right: 0
                    });
                    row.add(basicSwitch);
                    var labelUserName = Ti.UI.createLabel({
                        color: "black",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 16,
                            fontWeight: "bold"
                        },
                        text: "" + json[i].tipo,
                        objName: "nombre",
                        left: 0,
                        top: 6,
                        width: 360,
                        height: 30
                    });
                    row.add(labelUserName);
                } else {
                    var button = Ti.UI.createButton({
                        backgroundImage: "img/off.png",
                        value: json[i].activo,
                        top: 3,
                        width: 37,
                        height: 35,
                        right: 0
                    });
                    if (true == button.value) {
                        button.backgroundColor = "#159902";
                        button.value = true;
                        button.backgroundImage = "img/on.png";
                    } else {
                        button.backgroundColor = "#aaa";
                        button.value = false;
                        button.backgroundImage = "img/off.png";
                    }
                    button.on = function() {
                        this.backgroundColor = "#159902";
                        this.value = true;
                        this.backgroundImage = "img/on.png";
                    };
                    button.off = function() {
                        this.backgroundColor = "#aaa";
                        this.value = false;
                        this.backgroundImage = "img/off.png";
                    };
                    button.addEventListener("click", function(e) {
                        false == e.source.value ? e.source.on() : e.source.off();
                    });
                    row.add(button);
                    if ("Electronica" == json[i].detalles || "Jazz | Blues" == json[i].detalles || "Trova" == json[i].detalles || "Rock" == json[i].detalles || "Rock" == json[i].detalles || "Alternativa" == json[i].detalles || "Grupera | Nortena" == json[i].detalles || "Infantil" == json[i].detalles || "Hip-Hop" == json[i].detalles || "Ranchera" == json[i].detalles || "Pop" == json[i].detalles || "Metal" == json[i].detalles || "Reague" == json[i].detalles || "Reggeatton" == json[i].detalles || "Baladas | Boleros" == json[i].detalles || "Salsa | Cumbia" == json[i].detalles || "Cristiana" == json[i].detalles || "Futbol" == json[i].detalles || "Basketball" == json[i].detalles || "Tenis" == json[i].detalles || "Beisball" == json[i].detalles || "Volleyball" == json[i].detalles || "Torneos" == json[i].detalles || "Maratones" == json[i].detalles || "Autos | Motos" == json[i].detalles || "Futbol Americano" == json[i].detalles || "Artes Marciales" == json[i].detalles || "Box" == json[i].detalles || "Lucha Libre" == json[i].detalles || "Atletismo" == json[i].detalles || "Toros" == json[i].detalles || "Inaguracion" == json[i].detalles || "Promocion" == json[i].detalles || "Show" == json[i].detalles || "Fiestas Tematicas" == json[i].detalles || "Bienvenida" == json[i].detalles) {
                        var labelUserName = Ti.UI.createLabel({
                            color: "black",
                            font: {
                                fontFamily: "Arial",
                                fontSize: 16,
                                fontWeight: "bold"
                            },
                            text: "  - " + json[i].detalles,
                            objName: "nombre",
                            left: 5,
                            top: 6,
                            width: 360,
                            height: 30
                        });
                        row.add(labelUserName);
                    } else {
                        var labelUserName = Ti.UI.createLabel({
                            color: "black",
                            font: {
                                fontFamily: "Arial",
                                fontSize: 16,
                                fontWeight: "bold"
                            },
                            text: "" + json[i].detalles,
                            objName: "nombre",
                            left: 0,
                            top: 6,
                            width: 360,
                            height: 30
                        });
                        row.add(labelUserName);
                    }
                }
                ("Entretenimiento" == json[i].tipo || "Conciertos" == json[i].tipo || "Deportes" == json[i].tipo || "Bares Antros" == json[i].tipo) && dataArray3.push(row);
            }
            $.tableViewEntretenimiento.setData(dataArray3);
            view.add($.tableViewEntretenimiento);
        };
    }
    function checkemail(emailAddress) {
        var testresults;
        var str = emailAddress;
        var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        testresults = filter.test(str) ? true : false;
        return testresults;
    }
    function RemoverElementos() {
        if ($.win4.children) while (0 != $.win4.children.length) {
            $.win4.children.length;
            $.win4.remove($.win4.children[0]);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Evento";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId0 = [];
    $.__views.readWin = Ti.UI.createWindow({
        id: "readWin"
    });
    getTodoList ? $.__views.readWin.addEventListener("open", getTodoList) : __defers["$.__views.readWin!open!getTodoList"] = true;
    $.__views.cabecera = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        height: 50,
        width: "100%",
        top: 0,
        id: "cabecera"
    });
    $.__views.readWin.add($.__views.cabecera);
    $.__views.buscar = Ti.UI.createSearchBar({
        width: 300,
        top: 3,
        layout: "Center",
        hintText: "Search",
        id: "buscar",
        barColor: "#000"
    });
    $.__views.readWin.add($.__views.buscar);
    $.__views.im1 = Ti.UI.createImageView({
        image: "imagen/ico.jpg",
        height: 40,
        width: 20,
        righ: 50,
        left: 50,
        top: 10,
        id: "im1"
    });
    $.__views.readWin.add($.__views.im1);
    $.__views.label = Ti.UI.createLabel({
        text: "I am a red window.",
        id: "label"
    });
    $.__views.readWin.add($.__views.label);
    $.__views.im2 = Ti.UI.createImageView({
        image: "imagen/icos.jpg",
        height: 40,
        width: 20,
        righ: 22,
        left: 700,
        top: 10,
        id: "im2"
    });
    $.__views.readWin.add($.__views.im2);
    $.__views.tableView = Ti.UI.createTableView({
        headerTitle: "",
        top: 50,
        id: "tableView"
    });
    $.__views.readWin.add($.__views.tableView);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Refresh",
        id: "__alloyId1"
    });
    $.__views.readWin.add($.__views.__alloyId1);
    getTodoList ? $.__views.__alloyId1.addEventListener("click", getTodoList) : __defers["$.__views.__alloyId1!click!getTodoList"] = true;
    $.__views.tab1 = Ti.UI.createTab({
        title: "Eventos",
        icon: "KS_nav_views.png",
        window: $.__views.readWin,
        id: "tab1"
    });
    __alloyId0.push($.__views.tab1);
    $.__views.win2 = Ti.UI.createWindow({
        id: "win2",
        title: ""
    });
    $.__views.label1 = Ti.UI.createLabel({
        text: "I am Window 2",
        id: "label1",
        color: "#999"
    });
    $.__views.win2.add($.__views.label1);
    $.__views.tab2 = Ti.UI.createTab({
        title: "Calendario",
        icon: "KS_nav_views.png",
        window: $.__views.win2,
        id: "tab2"
    });
    __alloyId0.push($.__views.tab2);
    $.__views.win3 = Ti.UI.createWindow({
        id: "win3",
        title: ""
    });
    $.__views.mapa = Ti.UI.createWebView({
        id: "mapa",
        url: "http://www.lenguajesdeprogramacion.esy.es/"
    });
    $.__views.win3.add($.__views.mapa);
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.win3,
        id: "tab3",
        title: "Rutas",
        icon: "KS_nav_views.png"
    });
    __alloyId0.push($.__views.tab3);
    $.__views.win4 = Ti.UI.createWindow({
        id: "win4",
        backgroundColor: "white"
    });
    principal ? $.__views.win4.addEventListener("open", principal) : __defers["$.__views.win4!open!principal"] = true;
    $.__views.tableViewAcademica = Ti.UI.createTableView({
        id: "tableViewAcademica",
        top: "0",
        borderRadios: "10",
        width: "auto",
        height: "442"
    });
    $.__views.win4.add($.__views.tableViewAcademica);
    $.__views.tableViewCultural = Ti.UI.createTableView({
        id: "tableViewCultural",
        top: "550",
        borderRadios: "10",
        width: "auto",
        height: "1041"
    });
    $.__views.win4.add($.__views.tableViewCultural);
    $.__views.tableViewEntretenimiento = Ti.UI.createTableView({
        id: "tableViewEntretenimiento",
        top: "1650",
        borderRadios: "10",
        width: "auto",
        height: "1601"
    });
    $.__views.win4.add($.__views.tableViewEntretenimiento);
    $.__views.tab4 = Ti.UI.createTab({
        window: $.__views.win4,
        id: "tab4",
        title: "Cuenta",
        icon: "KS_nav_views.png"
    });
    __alloyId0.push($.__views.tab4);
    $.__views.mainTabGroup = Ti.UI.createTabGroup({
        backgroundColor: "#696969",
        tabs: __alloyId0,
        id: "mainTabGroup"
    });
    $.__views.mainTabGroup && $.addTopLevelView($.__views.mainTabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var correo = arguments[0] || {};
    var correoElectronico = "";
    var filtroAcademica;
    var filtroCultural;
    var filtroEntretenimiento;
    var datos = {
        nombre: "",
        apellidos: "",
        passowrd: "",
        email: ""
    };
    if ("" == correo) {
        correoElectronico = args.email;
        filtroAcademica = args.academica;
        filtroCultural = args.cultural;
        filtroEntretenimiento = args.entretenimiento;
        datos.nombre = args.nombre;
        datos.apellidos = args.apellidos;
        datos.passowrd = args.password;
        datos.email = args.email;
    } else {
        filtroAcademica = correo.academica;
        filtroCultural = correo.cultural;
        filtroEntretenimiento = correo.entretenimiento;
        correoElectronico = correo.email;
        datos.nombre = correo.nombre;
        datos.apellidos = correo.apellidos;
        datos.passowrd = correo.password;
        datos.email = correo.email;
    }
    var IMG_BASE = "http://alonsocampos.net46.net/";
    var dataArray = [];
    $.tableView.addEventListener("click", function(e) {
        var win = Alloy.createController("singleEvento").getView();
        win.id = e.rowData.id;
        win.title = e.row.titulo;
        win.backgroundColor = "white";
        var imageAvatar = Ti.UI.createImageView({
            image: "http://alonsocampos.net46.net/" + e.row.imagen,
            left: 35,
            top: 25,
            right: 35,
            width: 700,
            height: 250
        });
        var Titulo = Titanium.UI.createLabel({
            text: e.row.titulo,
            width: "auto",
            height: "auto",
            top: 280,
            textAlign: "center"
        });
        var Descripcion = Titanium.UI.createLabel({
            text: e.row.detalles,
            width: "auto",
            height: "auto",
            top: 310,
            textAlign: "center"
        });
        var Fecha = Titanium.UI.createLabel({
            text: "Fecha: " + e.row.fecha,
            width: "auto",
            height: "auto",
            top: 450,
            textAlign: "center"
        });
        var Hora = Titanium.UI.createLabel({
            text: "Hora: " + e.row.hora,
            width: "auto",
            height: "auto",
            top: 480,
            textAlign: "center"
        });
        if (0 == e.row.costo) var Costo = Titanium.UI.createLabel({
            text: "Costo: Gratuito",
            width: "auto",
            height: "auto",
            top: 510,
            textAlign: "center"
        }); else var Costo = Titanium.UI.createLabel({
            text: "Costo: $ " + e.row.costo,
            width: "auto",
            height: "auto",
            top: 510,
            textAlign: "center"
        });
        var Lugar = Titanium.UI.createLabel({
            text: "Lugar: " + e.row.lugar,
            width: "auto",
            height: "auto",
            top: 540,
            textAlign: "center"
        });
        var buttonRuta = Titanium.UI.createButton({
            title: "Ruta hasta aqui",
            top: 600,
            left: 130,
            width: 150,
            height: 50
        });
        var buttonOrganizador = Titanium.UI.createButton({
            title: "Organizador",
            top: 600,
            right: 130,
            width: 170,
            height: 50
        });
        var buttonAgregarEvento = Titanium.UI.createButton({
            title: "Agregar este evento a mi agenda",
            top: 640,
            width: 400,
            height: 50
        });
        buttonOrganizador.addEventListener("click", function() {
            var botonCancelar = Ti.UI.createButton({
                backgroundColor: "#FFCC00",
                borderRadius: 10,
                left: 70,
                top: 180,
                width: 120,
                height: 25,
                title: "Cancelar"
            });
            botonCancelar.addEventListener("click", function() {
                ventanaTransparente.close();
            });
            var ventanaTransparente = Ti.UI.createWindow({
                opacity: .8,
                backgroundColor: "black",
                borderColor: "black",
                left: 30,
                top: 400,
                width: 700,
                height: 250,
                borderRadius: 8
            });
            ventanaTransparente.add(Ti.UI.createLabel({
                opacity: 3.5,
                left: 15,
                top: 70,
                width: "auto",
                height: "auto",
                text: "Facebook",
                font: {
                    fontSize: "12dp",
                    fontWeight: "bold"
                },
                textAlign: "center",
                color: "green"
            }));
            ventanaTransparente.add(Ti.UI.createLabel({
                left: 115,
                top: 70,
                width: "auto",
                height: "auto",
                text: "Mail",
                font: {
                    fontSize: "12dp",
                    fontWeight: "bold"
                },
                textAlign: "center",
                color: "green"
            }));
            ventanaTransparente.add(Ti.UI.createLabel({
                left: 165,
                top: 70,
                width: "auto",
                height: "auto",
                text: "Message",
                font: {
                    fontSize: "12dp",
                    fontWeight: "bold"
                },
                textAlign: "center",
                color: "green"
            }));
            ventanaTransparente.add(Ti.UI.createLabel({
                left: 25,
                top: 160,
                width: "auto",
                height: "auto",
                text: "Twitter",
                font: {
                    fontSize: "12dp",
                    fontWeight: "bold"
                },
                textAlign: "center",
                color: "green"
            }));
            ventanaTransparente.add(Ti.UI.createImageView({
                opacity: 4.5,
                width: "60px",
                height: "60px",
                image: "img/face.png",
                top: 10,
                left: 25,
                borderRadius: 10
            }));
            ventanaTransparente.add(Ti.UI.createImageView({
                width: "60px",
                height: "60px",
                image: "img/mail.png",
                top: 10,
                left: 100,
                borderRadius: 10
            }));
            ventanaTransparente.add(Ti.UI.createImageView({
                width: "60px",
                height: "60px",
                image: "img/message.png",
                top: 10,
                left: 170,
                borderRadius: 10
            }));
            ventanaTransparente.add(Ti.UI.createImageView({
                width: "60px",
                height: "60px",
                image: "img/twitter.png",
                top: 100,
                left: 20,
                borderRadius: 10
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
        $.tab1.open(win, {
            animation: true
        });
    });
    $.mainTabGroup.open();
    $.im2.addEventListener("click", function() {
        var botonFiltrar = Ti.UI.createButton({
            backgroundColor: "#FFCC00",
            borderRadius: 10,
            left: 70,
            top: 180,
            width: 120,
            height: 25,
            title: "Filtrar"
        });
        botonFiltrar.addEventListener("click", function() {
            var conexion = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("La conexion esta tardando demaciado intente acceder nuevamente");
                },
                timeout: 2e3
            });
            var filtroEventos = {
                academica: switchAcademica.value,
                cultural: switchCultural.value,
                entretenimiento: switchEntretenimiento.value,
                email: correoElectronico
            };
            conexion.open("POST", "http://alonsocampos.net46.net/segundaversion/filtros_eventos.php");
            conexion.send(filtroEventos);
            conexion.onload = function() {
                var json = JSON.parse(this.responseText);
                var json = json.nombre;
                dataArray = [];
                for (var i = 0; json.length > i; i++) {
                    var row = Ti.UI.createTableViewRow({
                        selectedBackgroundColor: "white",
                        id: json[i].idEvento,
                        height: 110
                    });
                    row.titulo = json[i].titulo;
                    row.imagen = json[i].image;
                    row.detalles = json[i].descripcion;
                    row.fecha = json[i].fecha;
                    row.hora = json[i].hora;
                    row.costo = json[i].costo;
                    row.lugar = json[i].lugar;
                    var imageAvatar = Ti.UI.createImageView({
                        image: IMG_BASE + json[i].image,
                        left: 20,
                        top: 2,
                        width: 190,
                        height: 90
                    });
                    row.add(imageAvatar);
                    var labelUserName = Ti.UI.createLabel({
                        color: "black",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 16,
                            fontWeight: "bold"
                        },
                        text: "" + json[i].titulo,
                        left: 240,
                        top: 6,
                        width: 360,
                        height: 30
                    });
                    row.add(labelUserName);
                    if (0 != json[i].costo) {
                        var labelDetails = Ti.UI.createLabel({
                            color: "#222",
                            font: {
                                fontFamily: "Arial",
                                fontSize: 14,
                                fontWeight: "normal"
                            },
                            text: "" + json[i].fecha + "               " + json[i].costo,
                            left: 240,
                            top: 44,
                            width: "100%"
                        });
                        row.add(labelDetails);
                    } else {
                        var labelDetails = Ti.UI.createLabel({
                            color: "#222",
                            font: {
                                fontFamily: "Arial",
                                fontSize: 14,
                                fontWeight: "normal"
                            },
                            text: "" + json[i].fecha + "               " + "Gratuito",
                            left: 240,
                            top: 44,
                            width: "100%"
                        });
                        row.add(labelDetails);
                    }
                    if ("Academica" == json[i].tipo || "Area de Estudio" == json[i].tipo) {
                        var view = Titanium.UI.createView({
                            borderRadius: 10,
                            backgroundColor: "yellow",
                            width: 10,
                            height: 150,
                            right: 0
                        });
                        row.add(view);
                    }
                    if ("Cultural" == json[i].tipo || "Teatro" == json[i].tipo || "Exposicion" == json[i].tipo || "Musica" == json[i].tipo || "Turistico" == json[i].tipo) {
                        var view = Titanium.UI.createView({
                            borderRadius: 10,
                            backgroundColor: "green",
                            width: 10,
                            height: 150,
                            right: 0
                        });
                        row.add(view);
                    }
                    if ("Entretenimiento" == json[i].tipo || "Conciertos" == json[i].tipo || "Deportes" == json[i].tipo || "Bares Antros" == json[i].tipo) {
                        var view = Titanium.UI.createView({
                            borderRadius: 10,
                            backgroundColor: "orange",
                            width: 10,
                            height: 150,
                            right: 0
                        });
                        row.add(view);
                    }
                    var labelDate = Ti.UI.createLabel({
                        color: "#999",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 12,
                            fontWeight: "normal"
                        },
                        text: "" + json[i].lugar,
                        left: 240,
                        bottom: 10,
                        width: "100%",
                        height: 20
                    });
                    row.add(labelDate);
                    dataArray.push(row);
                }
                $.tableView.setData(dataArray);
            };
        });
        var ventanaTransparente = Ti.UI.createWindow({
            opacity: .8,
            backgroundColor: "black",
            borderColor: "black",
            right: 10,
            top: 80,
            width: 250,
            height: 250,
            borderRadius: 8
        });
        var switchAcademica = Ti.UI.createSwitch({
            value: filtroAcademica,
            left: 180,
            top: 30,
            width: 20,
            height: 50
        });
        ventanaTransparente.add(switchAcademica);
        switchAcademica.addEventListener("change", function() {});
        var switchCultural = Ti.UI.createSwitch({
            value: filtroCultural,
            left: 180,
            top: 70,
            width: 20,
            height: 50
        });
        ventanaTransparente.add(switchCultural);
        switchCultural.addEventListener("change", function() {});
        var switchEntretenimiento = Ti.UI.createSwitch({
            value: filtroEntretenimiento,
            left: 180,
            top: 110,
            width: "auto",
            height: "auto"
        });
        ventanaTransparente.add(switchEntretenimiento);
        switchEntretenimiento.addEventListener("change", function() {});
        botonFiltrar.addEventListener("click", function() {
            ventanaTransparente.close();
        });
        ventanaTransparente.add(Ti.UI.createLabel({
            left: 15,
            top: 30,
            width: "auto",
            height: "auto",
            zIndex: "5",
            text: "Académica",
            color: "white"
        }));
        ventanaTransparente.add(Ti.UI.createLabel({
            left: 15,
            top: 70,
            width: "auto",
            height: "auto",
            zIndex: "6",
            text: "Cultural | Turística",
            color: "white"
        }));
        ventanaTransparente.add(Ti.UI.createLabel({
            left: 15,
            top: 110,
            width: "auto",
            height: "auto",
            zIndex: "7",
            text: "Entretenimiento",
            color: "white"
        }));
        ventanaTransparente.add(botonFiltrar);
        ventanaTransparente.open();
    });
    __defers["$.__views.readWin!open!getTodoList"] && $.__views.readWin.addEventListener("open", getTodoList);
    __defers["$.__views.__alloyId1!click!getTodoList"] && $.__views.__alloyId1.addEventListener("click", getTodoList);
    __defers["$.__views.win4!open!principal"] && $.__views.win4.addEventListener("open", principal);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;