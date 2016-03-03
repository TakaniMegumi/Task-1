$("#registrationForm").validate({
	errorPlacement: function (error, element) {
		if (error) {
			if(!element.val()) {
				return;
			}
		setInvalid(element)
		}
	}
});

var $formElements = $(".handle");

$formElements.keyup(function () {
	if ($(this).valid() == true) {
		setValid($(this))
	}
});

$formElements.click(function () {
	disableSelections();
	$("label[for='" + $(this).attr('id') + "']").css("color", "white");
});

var disableSelections = function () {
	var elements = $(".handle");
	for (var i = 0; i < elements.length; i++) {
		refreshLabel($(elements[i]))
	}
};

var refreshLabel = function($element) {
	if(!$element.hasClass("error")) {
		$("label[for='" + $element.attr('id') + "']").css("color", "#5a5b5c");
	}

	if($element.hasClass("valid")) {
		var label = $("label[for='" + $element.attr('id') + "']");
		label.css("color", "#6abd97");
	}
};

var setValid = function($element) {
	var label = $("label[for='" + $element.attr('id') + "']");
	label.css("color", "#6abd97");
	$element.removeClass("error");
	$element.addClass("valid");
};

var setInvalid = function(element) {
	element.removeClass("valid");
	element.addClass("error");

	var label = $("label[for='" + $(element).attr('id') + "']");

	if (element.hasClass("phone-node")) {
		$("#phoneNumber").css("color", "red");
	}
	label.css("color", "red");
};








