function Controller() {
    function getTodoList() {
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("There was an error during the connection");
            },
            timeout: 1e3
        });
        sendit.open("GET", "http://alonsocampos.net46.net/read_2.php");
        sendit.send();
        sendit.onload = function() {
            var json = JSON.parse(this.responseText);
            var json = json.nombre;
            0 == json.length && ($.tableView.headerTitle = "The database row is empty");
            dataArray = [];
            for (var i = 0; json.length > i; i++) {
                var row = Ti.UI.createTableViewRow({
                    selectedBackgroundColor: "white",
                    id: json[i].idEvento,
                    height: 110
                });
                row.titulo = json[i].nombre;
                row.imagen = json[i].image;
                row.detalles = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu quam, accumsan quis leo quis, euismod sodales velit. Suspendisse eget vestibulum nibh. Integer blandit cursus justo in lobortis. Fusce pharetra varius blandit. Maecenas vestibulum vulputate dolor, mattis adipiscing diam suscipit sit amet. Integer ullamcorper massa non tortor ultrices fermentum. Morbi dignissim sem tellus, vel adipiscing elit egestas vitae. Nulla posuere pellentesque volutpat. Mauris convallis in neque in vestibulum. Mauris pharetra metus massa. In id posuere quam. Praesent euismod laoreet arcu, nec imperdiet diam tempus id. Etiam at nunc ut tortor luctus consectetur a sed sem.";
                row.fecha = json[i].fecha;
                row.hora = "10:00 am";
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
                    text: "" + json[i].nombre,
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
                switch (json[i].interes) {
                  case "Academica":
                    var view = Titanium.UI.createView({
                        borderRadius: 10,
                        backgroundColor: "yellow",
                        width: 10,
                        height: 150,
                        right: 0
                    });
                    row.add(view);
                    break;

                  case "Cultural":
                    var view = Titanium.UI.createView({
                        borderRadius: 10,
                        backgroundColor: "green",
                        width: 10,
                        height: 150,
                        right: 0
                    });
                    row.add(view);
                    break;

                  case "Entretenimiento":
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
    function boton1() {
        var w = Alloy.createController("win5").getView();
        w.open();
    }
    function boton2() {
        var m = Alloy.createController("win4").getView();
        m.open();
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
        url: "https://maps.google.com.mx/"
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
    $.__views.cabecera1 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#F4CE00",
        height: 75,
        width: "100%",
        top: 0,
        id: "cabecera1"
    });
    $.__views.win4.add($.__views.cabecera1);
    $.__views.label1w = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        color: "black",
        layout: "center",
        top: 190,
        text: "DATOS DE LA CUENTA",
        id: "label1w"
    });
    $.__views.win4.add($.__views.label1w);
    $.__views.txtEmailw = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 250,
        hintText: "Email",
        borderColor: "#F4CE00",
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "black",
        id: "txtEmailw"
    });
    $.__views.win4.add($.__views.txtEmailw);
    $.__views.txtPasswordw = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 300,
        hintText: "Password",
        borderColor: "#F4CE00",
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "black",
        id: "txtPasswordw"
    });
    $.__views.win4.add($.__views.txtPasswordw);
    $.__views.txtconfirmew = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 350,
        hintText: "Confirme Password",
        borderColor: "#F4CE00",
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "black",
        id: "txtconfirmew"
    });
    $.__views.win4.add($.__views.txtconfirmew);
    $.__views.label2w = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 410,
        text: "DATOS DEL USUARIO",
        id: "label2w"
    });
    $.__views.win4.add($.__views.label2w);
    $.__views.txtnombrew = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 450,
        hintText: "Nombre",
        borderColor: "#F4CE00",
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "black",
        id: "txtnombrew"
    });
    $.__views.win4.add($.__views.txtnombrew);
    $.__views.txtapellidow = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 500,
        hintText: "Apellido",
        borderColor: "#F4CE00",
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "black",
        id: "txtapellidow"
    });
    $.__views.win4.add($.__views.txtapellidow);
    $.__views.btn1 = Ti.UI.createButton({
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
        title: "Fecha de Nacimiento",
        id: "btn1"
    });
    $.__views.win4.add($.__views.btn1);
    $.__views.label3w = Ti.UI.createLabel({
        width: 100,
        right: 100,
        left: 260,
        height: 50,
        top: 650,
        text: "Sexo:",
        id: "label3w"
    });
    $.__views.win4.add($.__views.label3w);
    $.__views.btn2 = Ti.UI.createButton({
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
        title: "Mujer",
        id: "btn2"
    });
    $.__views.win4.add($.__views.btn2);
    $.__views.btn3w = Ti.UI.createButton({
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
        title: "Hombre",
        id: "btn3w"
    });
    $.__views.win4.add($.__views.btn3w);
    $.__views.btn5 = Ti.UI.createButton({
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
        title: "Guardar",
        id: "btn5"
    });
    $.__views.win4.add($.__views.btn5);
    $.__views.Datos = Ti.UI.createButton({
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
        title: "Datos Personales",
        id: "Datos"
    });
    $.__views.win4.add($.__views.Datos);
    boton2 ? $.__views.Datos.addEventListener("click", boton2) : __defers["$.__views.Datos!click!boton2"] = true;
    $.__views.Prefe = Ti.UI.createButton({
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
        title: "Preferencias",
        id: "Prefe"
    });
    $.__views.win4.add($.__views.Prefe);
    boton1 ? $.__views.Prefe.addEventListener("click", boton1) : __defers["$.__views.Prefe!click!boton1"] = true;
    $.__views.tab4 = Ti.UI.createTab({
        window: $.__views.win4,
        id: "tab4",
        title: "Cuenta",
        icon: "KS_nav_views.png"
    });
    __alloyId0.push($.__views.tab4);
    $.__views.win5 = Ti.UI.createWindow({
        id: "win5"
    });
    $.__views.cabecera1 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#F4CE00",
        height: 75,
        width: "100%",
        top: 0,
        id: "cabecera1"
    });
    $.__views.win5.add($.__views.cabecera1);
    $.__views.basicSwitch = Ti.UI.createSwitch({
        value: false,
        id: "basicSwitch",
        bottom: "80",
        title: "off"
    });
    $.__views.win5.add($.__views.basicSwitch);
    $.__views.Datos = Ti.UI.createButton({
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
        title: "Datos Personales",
        id: "Datos"
    });
    $.__views.win5.add($.__views.Datos);
    $.__views.Prefe = Ti.UI.createButton({
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
        title: "Preferencias",
        id: "Prefe"
    });
    $.__views.win5.add($.__views.Prefe);
    var __alloyId2 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        title: " * Academica",
        id: "row",
        rightImage: "imagen/boton2.jpg"
    });
    __alloyId2.push($.__views.row);
    $.__views.seccion2 = Ti.UI.createTableView({
        borderRadius: 40,
        backgroundColor: "white",
        width: 700,
        height: 700,
        data: __alloyId2,
        id: "seccion2"
    });
    $.__views.win5.add($.__views.seccion2);
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.win5,
        id: "tab3",
        icon: "KS_nav_views.png"
    });
    __alloyId0.push($.__views.tab3);
    $.__views.mainTabGroup = Ti.UI.createTabGroup({
        backgroundColor: "#696969",
        tabs: __alloyId0,
        id: "mainTabGroup"
    });
    $.__views.mainTabGroup && $.addTopLevelView($.__views.mainTabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
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
        var basicSwitch = Ti.UI.createSwitch({
            value: true,
            left: 180,
            top: 30,
            width: 20,
            height: 50
        });
        ventanaTransparente.add(basicSwitch);
        basicSwitch.addEventListener("change", function() {
            Ti.API.info("Switch value: " + basicSwitch.value);
        });
        var basicSwitch = Ti.UI.createSwitch({
            value: true,
            left: 180,
            top: 70,
            width: 20,
            height: 50
        });
        ventanaTransparente.add(basicSwitch);
        basicSwitch.addEventListener("change", function() {
            Ti.API.info("Switch value: " + basicSwitch.value);
        });
        var basicSwitch = Ti.UI.createSwitch({
            value: true,
            left: 180,
            top: 110,
            width: "auto",
            height: "auto"
        });
        ventanaTransparente.add(basicSwitch);
        basicSwitch.addEventListener("change", function() {
            Ti.API.info("Switch value: " + basicSwitch.value);
        });
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
    __defers["$.__views.Datos!click!boton2"] && $.__views.Datos.addEventListener("click", boton2);
    __defers["$.__views.Prefe!click!boton1"] && $.__views.Prefe.addEventListener("click", boton1);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;