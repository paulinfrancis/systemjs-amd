//define('bar1', ['BarModules/bar2.js', 'FooModules/foo1.js'], function(bar2, foo1){    // Works, but is "wrong"
define('bar1', ['BarModules/bar2', 'FooModules/foo1'], function(bar2, foo1){
	return {
		hi: function(){
			return 'Hi from bar1!'	
		}
	}
});