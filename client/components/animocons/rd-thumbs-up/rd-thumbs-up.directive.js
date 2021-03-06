'use strict';

angular.module('mtApp')
  .directive('rdThumbsUp', function (animocons) {
    return {
      templateUrl: 'components/animocons/rd-thumbs-up/rd-thumbs-up.html',
      restrict: 'EA',
      scope: {
        onCheck:'&',
        onUncheck: '&',
        strokeColor: '='
      },
      link: function (scope, element, attrs) {
        // <button class="icobutton icobutton--thumbs-up"><span class="fa fa-thumbs-up"></span></button>
        element.addClass('icobutton icobutton--thumbs-up');

        var delement = element[0];
        var elspan = delement.querySelector('span');
        var color = !_.isNil(scope.strokeColor) ? scope.strokeColor : '#988ADE';
        var fill = '#424242';

        animocons.Handle(delement, {
    			tweens : [
    				// burst animation
    				new mojs.Burst({
    					parent: delement,
    					duration: 600,
    					shape : 'circle',
    					fill: fill,
    					x: '0%',
    					y: '0%',
    					childOptions: {
    						radius: {60:0},
    						type: 'line',
    						stroke: color,
    						strokeWidth: 1
    					},
    					radius: {80:250},
    					angle: -90,
    					count: 1,
    					isRunLess: true,
    					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    				}),
    				// burst animation
    				new mojs.Burst({
    					parent: delement,
    					duration: 600,
    					shape : 'circle',
    					fill: fill,
    					x: '0%',
    					y: '50%',
    					childOptions: {
    						radius: {60:0},
    						type: 'line',
    						stroke: color,
    						strokeWidth: 1
    					},
    					radius: {80:200},
    					angle: -90,
    					count: 1,
    					isRunLess: true,
    					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    				}),
    				// burst animation
    				new mojs.Burst({
    					parent: delement,
    					duration: 600,
    					shape : 'circle',
    					fill: fill,
    					x: '0%',
    					y: '100%',
    					childOptions: {
    						radius: {60:0},
    						type: 'line',
    						stroke: color,
    						strokeWidth: 1
    					},
    					radius: {80:250},
    					angle: -90,
    					count: 1,
    					isRunLess: true,
    					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    				}),
    				// burst animation
    				new mojs.Burst({
    					parent: delement,
    					duration: 600,
    					delay: 150,
    					shape : 'circle',
    					fill: fill,
    					x: '50%',
    					y: '50%',
    					childOptions: {
    						radius: {30:0},
    						type: 'line',
    						stroke: color,
    						strokeWidth: {2:1}
    					},
    					radius: {60:90},
    					degree: -90,
    					angle: 135,
    					count: 6,
    					isRunLess: true,
    					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    				}),
    				// icon scale animation
            new mojs.Tween({
              repeat:0,
              duration : 1000,
              onUpdate: function(progress) {
                var elasticOutProgress = mojs.easing.elastic.out(progress);
                elspan.style.WebkitTransform = elspan.style.transform = 'translate3d(' + -50*(1-elasticOutProgress) + '%,0,0)';
              }
            })
    			],
    			onCheck : function() {
    				delement.style.color = color;
            if(_.isFunction(scope.onCheck)) {
              scope.onCheck();
            }
            // timeout and uncheck
    			},
    			onUnCheck : function() {
    				delement.style.color = fill;
            if(_.isFunction(scope.onUncheck)) {
              scope.onUncheck();
            }
    			}
    		});
      }
    };
  });
