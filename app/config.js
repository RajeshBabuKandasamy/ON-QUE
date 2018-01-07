var config_data = {
    'APP_NAME': 'ONQUE APP',
    'APP_VERSION': '0.1',
    'API_URL': 'https://hidden-mountain-29798.herokuapp.com',
    'IMG_URL': 'http://staging.burpp.co.uk/'
}

var config_module = angular.module('onqueAppConfig', []);

angular.forEach(config_data,function(key,value) {
	config_module.constant(value,key);
});