// Defining the appplication main module.
var Finances = {};

// Loading the framework. During 'start-point' loading all framework
// dependencies files are loading.
define([
	'../../cordova-framework/start-point'
	, 'http://code.jquery.com/jquery-1.7.1.min.js'
	, 'http://code.jquery.com/mobile/1.1.1/jquery.mobile-1.1.1.min.js'
	//http://jquerymobile.com/demos/1.0a4.1/experiments/ui-datepicker/
	, 'javascripts/vendors/jQuery.ui.datepicker.js'
	, 'javascripts/vendors/jquery.ui.datepicker.mobile.js'
], function(){
	// Defining the Application module inside the main application one.
	Finances.Application = CordovaFramework.Application.extend({
		// Here configuring the application.
		test: function(){
			console.log('Finances test');
			$.mobile.defaultPageTransition = 'slideup';
			$('input[data-type="date"]').change(function(e){
				console.log('changed');
				if (this.value && '' != this.value){
					$('#new .ui-block-a:first span.ui-btn-text').html(this.value);
				}
				history.back();
			});
			$('input[data-type="date"]').click(function(e){
				$.mobile.changePage('#calendar');
			})
		}
	})
});
