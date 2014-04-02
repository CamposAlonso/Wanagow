function Controller() {
    function btn_2() {
        var w = Alloy.createController("Registro").getView();
        w.open();
    }
    function btn_1() {
        var W = Alloy.createController("Evento").getView();
        W.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#f4ce00",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Bienvenido",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.label1 = Ti.UI.createLabel({
        width: 400,
        height: 45,
        color: "#000",
        layout: "center",
        Color: "black",
        top: 550,
        left: "38%",
        text: "Desliza para aprender mas.",
        id: "label1"
    });
    $.__views.index.add($.__views.label1);
    $.__views.email = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 600,
        hintText: "Email",
        id: "email",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "black"
    });
    $.__views.index.add($.__views.email);
    $.__views.password = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 650,
        hintText: "Password",
        id: "password",
        passwordMask: "true",
        focusable: "place",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "black"
    });
    $.__views.index.add($.__views.password);
    $.__views.btn1 = Ti.UI.createButton({
        width: 200,
        right: 100,
        left: 300,
        backgroundColor: "#515050",
        height: 50,
        top: 700,
        font: {
            fontFamily: "Helvetica Neue"
        },
        color: "white",
        title: "Entrar",
        id: "btn1",
        borderStyle: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    $.__views.index.add($.__views.btn1);
    btn_1 ? $.__views.btn1.addEventListener("click", btn_1) : __defers["$.__views.btn1!click!btn_1"] = true;
    $.__views.btn2 = Ti.UI.createButton({
        width: 200,
        right: 100,
        left: 300,
        backgroundColor: "#515050",
        height: 50,
        top: 800,
        font: {
            fontFamily: "Helvetica Neue"
        },
        color: "white",
        title: "Registrarse",
        id: "btn2",
        borderStyle: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    $.__views.index.add($.__views.btn2);
    btn_2 ? $.__views.btn2.addEventListener("click", btn_2) : __defers["$.__views.btn2!click!btn_2"] = true;
    $.__views.label2 = Ti.UI.createLabel({
        width: 400,
        height: 45,
        color: "#000",
        layout: "center",
        Color: "black",
        top: 750,
        left: "38%",
        text: "Si todavia no tienes una cuenta",
        id: "label2"
    });
    $.__views.index.add($.__views.label2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.btn1!click!btn_1"] && $.__views.btn1.addEventListener("click", btn_1);
    __defers["$.__views.btn2!click!btn_2"] && $.__views.btn2.addEventListener("click", btn_2);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;