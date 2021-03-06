angular.module('fixed-snap', [])
  .directive('snapDrawer', [
    '$rootScope', '$timeout',
    function ($rootScope, $timeout) {
      var snapWrapper = document.querySelector('body');
      var snapStatic = document.querySelector('[snap-static]');
      var snapFixed = document.querySelector('[snap-fixed]');

      return {
        scope: {
          snapDrawer: '@'
        },
        link: function (scope, element) {
          $rootScope.snap = $rootScope.snap || {};

          $rootScope.snap[scope.snapDrawer] = scope;

          function clickHandler() {
            scope.close();
          }

          scope.open = false;

          scope.toggle = function () {
            scope.open ? scope.close() : scope.show();
          };

          scope.close = function () {
            scope.open = false;
            snapWrapper.classList.toggle('snap-open-' + scope.snapDrawer, false);
            $timeout(function () {
              snapStatic.removeEventListener('click', clickHandler);
              snapFixed.removeEventListener('click', clickHandler);
            });
          };

          scope.show = function () {
            scope.open = true;
            snapWrapper.classList.toggle('snap-open-' + scope.snapDrawer, true);
            $timeout(function () {
              snapStatic.addEventListener('click', clickHandler);
              snapFixed.addEventListener('click', clickHandler);
            });
          };
        }
      };
    }
  ]);
