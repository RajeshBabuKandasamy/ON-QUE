
OnqueApp.service('popupService', ['ngDialog', '$interval', '$window', '$timeout',

function popupService(ngDialog, $interval, $window, $timeout) {
	var self = this;
	
	this.loginPopup = function() {
				ngDialog.open({ template: 'modules/login/login.html', className: 'ngdialog-theme-default' });

		};

	this.signinPopup = function(message, buttonText, width, callBack, timeoutTime) {
		
		ngDialog.open({ template: 'modules/signup/signup.html', className: 'ngdialog-theme-default' });
	};
}]); 