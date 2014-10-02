module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      build: {
        src: 'js/site.js', //input merge in order
        dest: 'js/site.min.js' //output
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed' //'expanded' //'compressed' for production
        },
        files: {
        // destination --> sources 
          'css/main.css': 'css/main.scss'
        }
      }
    },

    watch: {  //control + c to end watch in terminal
      scripts: {
        files: ['js/site.js', 'css/mrSite.scss'],
        tasks: ['uglify', 'sass'],
        options: {
          spawn: false,
        },
      },
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'watch']);

};