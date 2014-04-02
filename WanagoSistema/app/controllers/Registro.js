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
function NuevaCuenta () {
	var createReq = Titanium.Network.createHTTPClient({
		onload:function()
		{
		    if (this.responseText == "Insert failed" || this.responseText == "That username or email already exists")
		    {
		        createReq.enabled = true;
		        createReq.opacity = 1;
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
		        Alloy.createController('Next').getView().open();
		    }
		}
	});
	
	if ($.txtEmailw.value != '' && $.txtPasswordw.value != '' && $.txtconfirmew.value != '' && $.txtnombrew.value != '' && $.txtapellidow.value != '')
    {
        if ($.txtPasswordw.value != $.txtconfirmew.value)
        {
            alert("Las contraseñas no coinciden");
        }
        else
        {
            if (!checkemail($.txtEmailw.value))
            {
                alert("Por favor ingresa un correo valido");
            }
            else
            {
            	createReq.open("POST","http://alonsocampos.net46.net/new.php");
                var params = {
                    email: $.txtEmailw.value,
                    password: $.txtPasswordw.value,
                    //password: Ti.Utils.md5HexDigest(password1.value),
                    nombre: $.txtnombrew.value,
                    apellido: $.txtapellidow.value
                };
                createReq.send(params);
                alert("Informacion enviada");
            }
        }
    }
    else
    {
        alert("Complete la informacion necesaria");
    }
    
	
}