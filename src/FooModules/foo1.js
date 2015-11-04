//define('foo1', ['BarModules/bar1.js'], function(bar1){   //  Works, but is "wrong"
define('foo1', ['BarModules/bar1'], function(bar1){
	return {
		hi: function(){
			return 'Hi from foo1!' + ' ' + bar1.hi();	
		}
	}
});