'use strict';

export default angular.module('myApp')
  .directive('ngParallax', [
    'myStorage', 
    (myStorage) => ({
    restrict: 'AE',
    scope: { 
      pattern: '=', 
      reverse: '=',
      speed:   '=',
      opacity: '='
    },
    link: ($scope, elem, attr) => {

        const container = elem[0];
        const img = new Image();

        img.addEventListener('load', onImageLoad, false);
        img.src = $scope.pattern;

        container.insertBefore(img, container.firstChild);
        
        function onUpdate () {
          let top = container.getBoundingClientRect().top;
          let imgHeight = img.height;
          let containerHeight = parseInt((container.style.height || '380px').replace('px', ''), 10);
          let bottom = container.getBoundingClientRect().top + containerHeight;
          let parallaxDist = imgHeight - containerHeight;
          let windowHeight = myStorage.window.height;
          let windowBottom = myStorage.window.top + windowHeight;
          let percentScrolled = (windowBottom - top) / (containerHeight + windowHeight);
          let parallax = Math.round(parallaxDist * percentScrolled * parseFloat($scope.speed || 1));
          if ((bottom > myStorage.window.top) && (top < (myStorage.window.top + windowHeight))) {
            if ($scope.reverse) {
              parallax = windowHeight -parallax;
            }
            img.style.transform = 'translate(-50%, ' + Math.min(imgHeight, Math.max(0, parallax)) + 'px)';
          }
        };

        function onImageLoad () {
          img.removeEventListener('load', onImageLoad, false);
          onUpdate();
          img.style.opacity = $scope.opacity || 1;
        };

        document.addEventListener('scroll', onUpdate, false);

        window.addEventListener('resize', onUpdate, false);

      }

  })]);

