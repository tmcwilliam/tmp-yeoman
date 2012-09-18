require.config({
  shim: {
  },

 paths: {
    'jquery-ui': '../../components/jquery-ui',

    jquery: 'vendor/jquery.min'
  }
});
 
require(['app'], function(app) {
  // use app here
  console.log(app);
});