module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourcemap: 'none'
      },
      compile: {
        files: {
          'style.css': 'sass/style.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: ['last 2 versions', 'ie 8', 'ie 9']})
        ]
      },
      single_file: {
        src: 'style.css',
        dest: 'style.css'
      },
    },
    watch: {
      styles: {
        files: [
          'sass/*.scss',
          'sass/*/*.scss'
        ], // which files to watch
        tasks: ['sass', 'postcss'],
        options: {
          spawn: false
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            '*.css',
            '/*.php',
            'templates/**/*.php',
            'js/*.js'

          ]
        },
        options: {
          watchTask: true,
          proxy: 'http://localhost:8888/'
        }
      }
    },
    batch_git_clone: {
      options: {
        configFile:"dependencies.json",
        npmInstall: true,
        bowerInstall: true,
        overWrite: true
      }
    }
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('sync', ['sass', 'postcss', 'browserSync', 'watch']);
  grunt.registerTask('default', ['sass', 'postcss', 'watch']);
};
