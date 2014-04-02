function Controller() {
    function closeme() {
        $.container.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Next";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
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
    closeme ? $.__views.btn1W.addEventListener("click", closeme) : __defers["$.__views.btn1W!click!closeme"] = true;
    $.__views.basicSwitch = Ti.UI.createSwitch({
        width: 100,
        right: 100,
        left: 10,
        backgroundColor: "white",
        height: 80,
        top: 1e3,
        font: {
            fontFamily: "Helvetica Neue"
        },
        color: "white",
        rightButtonMode: "Titanium.UI.INPUT_BUTTONMODE_ALWAYS",
        value: false,
        id: "basicSwitch",
        bottom: "80",
        title: "on"
    });
    $.__views.container1.add($.__views.basicSwitch);
    var __alloyId3 = [];
    $.__views.seccion1 = Ti.UI.createTableViewSection({
        borderRadius: 30,
        backgroundColor: "white",
        width: 900,
        height: 600,
        id: "seccion1",
        headerTitle: "Academia"
    });
    __alloyId3.push($.__views.seccion1);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        title: "* Area de estudios",
        id: "__alloyId4"
    });
    $.__views.seccion1.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        title: "* Congresos",
        id: "__alloyId5"
    });
    $.__views.seccion1.add($.__views.__alloyId5);
    $.__views.table = Ti.UI.createTableView({
        borderRadius: 10,
        backgroundColor: "with",
        width: 600,
        height: 400,
        data: __alloyId3,
        id: "table",
        children: Ti.UI.TableView
    });
    $.__views.container1.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btn1W!click!closeme"] && $.__views.btn1W.addEventListener("click", closeme);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;