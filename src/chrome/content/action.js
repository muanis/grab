screengrab.Action = function() {}
screengrab.Action.prototype = {
	doAction: function(canvas) {}
}

screengrab.SaveAction = function() {}
screengrab.SaveAction.prototype = {
	doAction: function(canvas) {
		var msg = document.getElementById("screengrab-strings").getString("SaveAsMessage");
        var picker = new screengrab.ImageFilePicker(screengrab.prefs.defaultFileName() + "." + screengrab.prefs.format(), msg, screengrab.prefs.formatMimeType());
        var file = picker.getFile();
		var dataUrl = canvas.toDataURL(file.mimeType, screengrab.prefs.formatQuality(file.mimeType));
        file.saveDataUrl(dataUrl, true);
	}
}