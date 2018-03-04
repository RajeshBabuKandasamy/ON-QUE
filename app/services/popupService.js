
OnqueApp.service('popupService', ['ngDialog', '$interval', '$window', '$timeout',

function popupService(ngDialog, $interval, $window, $timeout) {
	var self = this;
	
	this.loginPopup = function() {
				ngDialog.open({ 
					template: 'modules/login/login.html',
					controller: 'loginController', 
					className: 'ngdialog-theme-default dialog-login',
					closeByDocument: false,
        			closeByEscape: false	
				});

		};

	this.signinPopup = function(message, buttonText, width, callBack, timeoutTime) {
		
		ngDialog.open({ 
			template: 'modules/signup/signup.html',
			controller: 'signupController',
			className: 'ngdialog-theme-default dialog-signup',
			closeByDocument: false,
        	closeByEscape: false
		 });

	};
}]); 