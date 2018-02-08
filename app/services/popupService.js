
OnqueApp.service('popupService', ['ngDialog', '$interval', '$window', '$timeout',

function popupService(ngDialog, $interval, $window, $timeout) {
	this.isPopupDisplayed = false;
	var self = this;
	var setPopup = function(width, height) {
		var loaded = $interval(function() {

			var inspectElement = document.getElementsByClassName('ngdialog-content');

			if (loaded.$$state.value !== 'canceled' && inspectElement.length > 0) {
				$interval.cancel(loaded);

				inspectElement[0].style.display = 'block';

				if (width)
					inspectElement[0].style.width = width;
				if(height)
					inspectElement[0].style.height = height;

				var y = ($window.innerHeight - inspectElement[0].clientHeight) / 2;
				y = y > 150 ? 125 : y;
				inspectElement[0].parentElement.style.paddingTop = '' + y + 'px';
			}
		}, 1000);
	};

	
	
	this.loginPopup = function(message, buttonText, width, callBack, timeoutTime) {
		self.isPopupDisplayed = false;
		ngDialog.close();
		if(!self.isPopupDisplayed) {
			self.isPopupDisplayed = true;
			$timeout(function() {
				self.removePopupElement();
				ngDialog.openConfirm({
					template : 'modules/login/login.html'
				}).then(function(value) {
					self.isPopupDisplayed = false;
					if (callBack)
						callBack();
				});
		
				//setPopup(width);
			}, timeoutTime);
		}
	};

	
	this.removePopupElement = function() {
		var popupElements = document.getElementsByClassName('ngdialog');
		for (var i = 0; i < popupElements.length; i++) {
			popupElements[i].parentNode.removeChild(popupElements[i]);
		} 			
	};
}]); 