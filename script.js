window.logout = function() {
	fetch('/~/Tracing-Comet/logout', { method: 'POST'});
	
	alert('Logged Out!');
	
	location.href = '/~/Tracing-Comet/index'
}