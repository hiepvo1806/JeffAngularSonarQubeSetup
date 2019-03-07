var gulp = require('gulp');
var sonarqubeScanner = require('sonarqube-scanner');
 
gulp.task('default', function(callback) {
  sonarqubeScanner({
    serverUrl : "http://localhost:9000",
    options : {
      'sonar.projectName': 'myAngProject',
      'sonar.projectDescription': 'myAngProject description',
    }
  }, callback);
});