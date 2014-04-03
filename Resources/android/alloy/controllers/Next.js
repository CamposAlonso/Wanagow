function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Next";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container1 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "container1"
    });
    $.__views.container1 && $.addTopLevelView($.__views.container1);
    $.__views.imagenW = Ti.UI.createImageView({
        image: "imagen/regis.jpg",
        height: 100,
        width: 800,
        righ: 900,
        top: 20,
        id: "imagenW"
    });
    $.__views.container1.add($.__views.imagenW);
    $.__views.label2W = Ti.UI.createLabel({
        height: 100,
        width: 800,
        righ: 900,
        top: 120,
        backgroundColor: "#313335",
        layout: "center",
        color: "#FCFFFF",
        text: "YA CASI TERMINAS\n	    Ayudanos a llevarte solo a los eventos que te interesan llenando esta lista.Puedes hacerlo despues desde la configuracion de tu cuenta",
        id: "label2W",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    $.__views.container1.add($.__views.label2W);
    $.__views.btn2W = Ti.UI.createButton({
        width: 300,
        right: 300,
        left: 50,
        backgroundColor: "#E3C109",
        height: 50,
        top: 800,
        font: {
            fontFamily: "Helvetica Neue"
        },
        color: "white",
        title: "Guardar",
        id: "btn2W"
    });
    $.__views.container1.add($.__views.btn2W);
    $.__views.btn1W = Ti.UI.createButton({
        width: 100,
        right: 60,
        backgroundColor: "#EBC805",
        height: 50,
        top: 50,
        font: {
            fontFamily: "Helvetica Neue"
        },
        color: "white",
        title: "Omitir",
        id: "btn1W"
    });
    $.__views.container1.add($.__views.btn1W);
    $.__views.tableViewAcademica = Ti.UI.createTableView({
        id: "tableViewAcademica",
        top: "2",
        borderRadios: "10",
        width: "auto",
        height: "442"
    });
    $.__views.container1.add($.__views.tableViewAcademica);
    $.__views.tableViewCultural = Ti.UI.createTableView({
        id: "tableViewCultural",
        top: "500",
        borderRadios: "10",
        width: "auto",
        height: "1041"
    });
    $.__views.container1.add($.__views.tableViewCultural);
    $.__views.tableViewEntretenimiento = Ti.UI.createTableView({
        id: "tableViewEntretenimiento",
        top: "1650",
        borderRadios: "10",
        width: "auto",
        height: "1601"
    });
    $.__views.container1.add($.__views.tableViewEntretenimiento);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var sendit = Ti.Network.createHTTPClient({
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("There was an error during the connection");
        },
        timeout: 3e3
    });
    sendit.open("GET", "http://alonsocampos.net46.net/preferencia.php");
    sendit.send();
    sendit.onload = function() {
        var json = JSON.parse(this.responseText);
        var json = json.nombre;
        0 == json.length && (tableView.headerTitle = "The database row is empty");
        dataArray = [];
        dataArray2 = [];
        dataArray3 = [];
        var scrollView = Ti.UI.createScrollView({
            contentHeight: "auto",
            showVerticalScrollIndicator: true,
            top: 350,
            height: "90%",
            width: 500
        });
        var view = Ti.UI.createView({
            backgroundColor: "c5ccd4",
            borderRadius: 10,
            top: 0,
            height: 3300,
            width: 500
        });
        scrollView.add(view);
        for (var i = 0; json.length > i; i++) {
            var row = Ti.UI.createTableViewRow({
                selectedBackgroundColor: "yellow",
                height: 40
            });
            var valor = 0;
            if ("Academica" == json[i].tipo && "" == json[i].detalles) {
                var basicSwitch = Ti.UI.createSwitch({
                    value: true,
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
                    backgroundImage: "off.png",
                    top: 3,
                    width: 37,
                    height: 35,
                    right: 0
                });
                button.on = function() {
                    this.backgroundColor = "#159902";
                    this.value = true;
                    this.backgroundImage = "on.png";
                    valor = 1;
                };
                button.off = function() {
                    this.backgroundColor = "#aaa";
                    this.value = false;
                    this.backgroundImage = "off.png";
                    valor = 0;
                };
                button.addEventListener("click", function(e) {
                    if (false == e.source.value) {
                        e.source.on();
                        alert(valor + "/");
                    } else {
                        e.source.off();
                        alert(valor + "/");
                    }
                });
                row.add(button);
            }
            ("Academica" == json[i].tipo || "Area de Estudio" == json[i].tipo) && dataArray.push(row);
        }
        $.tableViewAcademica.setData(dataArray);
        view.add($.tableViewAcademica);
        for (var i = 0; json.length > i; i++) {
            var row = Ti.UI.createTableViewRow({
                selectedBackgroundColor: "yellow",
                height: 40
            });
            var button = Ti.UI.createButton({
                backgroundImage: "off.png",
                backgroundSelectedImage: "on.png",
                top: 3,
                width: 37,
                height: 35,
                right: 0
            });
            button.on = function() {
                this.backgroundColor = "#159902";
                this.value = true;
                this.backgroundImage = "on.png";
            };
            button.off = function() {
                this.backgroundColor = "#aaa";
                this.value = false;
                this.backgroundImage = "off.png";
            };
            button.addEventListener("click", function(e) {
                false == e.source.value ? e.source.on() : e.source.off();
            });
            if ("Cultural | Turistica" == json[i].tipo && "" == json[i].detalles) {
                var basicSwitch = Ti.UI.createSwitch({
                    value: true,
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
            var button = Ti.UI.createButton({
                backgroundImage: "off.png",
                backgroundSelectedImage: "on.png",
                top: 3,
                width: 37,
                height: 35,
                right: 0
            });
            button.on = function() {
                this.backgroundColor = "#159902";
                this.value = true;
                this.backgroundImage = "on.png";
            };
            button.off = function() {
                this.backgroundColor = "#aaa";
                this.value = false;
                this.backgroundImage = "off.png";
            };
            button.addEventListener("click", function(e) {
                false == e.source.value ? e.source.on() : e.source.off();
            });
            if ("Entretenimiento" == json[i].tipo && "" == json[i].detalles) {
                var basicSwitch = Ti.UI.createSwitch({
                    value: true,
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
                row.add(button);
                if ("Electronica" == json[i].detalles || "Jazz | Blues" == json[i].detalles || "Trova" == json[i].detalles || "Rock" == json[i].detalles || "Rock" == json[i].detalles || "Alternativa" == json[i].detalles || "Grupera | Norteña" == json[i].detalles || "Infantil" == json[i].detalles || "Hip-Hop" == json[i].detalles || "Ranchera" == json[i].detalles || "Pop" == json[i].detalles || "Metal" == json[i].detalles || "Reague" == json[i].detalles || "Reggeatton" == json[i].detalles || "Baladas | Boleros" == json[i].detalles || "Salsa | Cumbia" == json[i].detalles || "Cristiana" == json[i].detalles || "Futbol" == json[i].detalles || "Basketball" == json[i].detalles || "Tenis" == json[i].detalles || "Beisball" == json[i].detalles || "Volleyball" == json[i].detalles || "Torneos" == json[i].detalles || "Maratones" == json[i].detalles || "Autos | Motos" == json[i].detalles || "Futbol Americano" == json[i].detalles || "Artes Marciales" == json[i].detalles || "Box" == json[i].detalles || "Lucha Libre" == json[i].detalles || "Atletismo" == json[i].detalles || "Toros" == json[i].detalles || "Inaguracion" == json[i].detalles || "Promocion" == json[i].detalles || "Show" == json[i].detalles || "Fiestas Tematicas" == json[i].detalles || "Bienvenida" == json[i].detalles) {
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
        $.container1.add(scrollView);
    };
    var dataArray = [];
    var dataArray2 = [];
    var dataArray3 = [];
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;