console.log('start test...');

var test = require('tape');
var iReactProjects = require('../res/js/dist/data.js');

function checkUrl(theurl) {
  var tomatch= /http[s]{0,1}:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/

  if (tomatch.test(theurl)) {
    return true;
  }
  else {
    return false;
  }
}

String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, '');
}

String.prototype.isEmpty = function() {
  if (this == null || this == undefined || this.trim() == '') {
  	return true;
  }
  return false;
}

test('data.js format should be ok.', function (t) {
	var repoDict = {}; // test whether repo is duplicated
	var react = null;

	t.equal((iReactProjects instanceof Array), true);
	console.log('iReactProjects size: ', iReactProjects.length);
	
	for (var i = 0; i < iReactProjects.length; i ++) {
		react = iReactProjects[i];
		// all key of project can not be empty
		if (react.name.isEmpty()) t.fail(react.name + ' should not be empty.');
		if (react.repo.isEmpty()) t.fail(react.repo + ' should not be empty.');
		if (react.author.isEmpty()) t.fail(react.author + ' should not be empty.');
		if (react.description.isEmpty()) t.fail(react.description + ' should not be empty.');
		
		// tags should be array, length <=4, tag string length <= 30
		if (! (react.tags instanceof Array)) t.fail(react.tags + ' should be instanceof Array.');
		if (react.tags.length > 4) t.fail(react.tags + ' length should be less then 4.');
		if (react.tags.join('').length > 30) t.fail(react.tags + ' total string length should be less then 30.');
		
		// repo should be url
		if (!checkUrl(react.repo)) t.fail(react.repo + ' should be a url format string.');
		// repo should be unique.
		if ('exist' === repoDict[react.repo]) t.fail(react.repo + ' is duplicated.');

		repoDict[react.repo] = 'exist';
	}
  t.end();
});

console.log('end test...');