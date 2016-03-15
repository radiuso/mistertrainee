'use strict';

angular.module('mtApp')
  .directive('rdThumbsUp', function (animocons) {
    return {
      templateUrl: 'components/animocons/rd-thumbs-up/rd-thumbs-up.html',
      restrict: 'EA',
      scope: {
      },
      link: function (scope, element, attrs) {
        // <button class="icobutton icobutton--thumbs-up"><span class="fa fa-thumbs-up"></span></button>
        element.addClass('icobutton icobutton--thumbs-up');

        var delement = element[0];
        var el9span = delement.querySelector('span');

    		el9span.style.WebkitTransformOrigin = el9span.style.transformOrigin = '-10% 50%';

        animocons.Handle(delement, {
    			tweens : [
    				// burst animation
    				new mojs.Burst({
    					parent: delement,
    					duration: 1500,
    					delay: 350,
    					shape : 'circle',
    					fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
    					x: '50%',
    					y: '50%',
    					opacity: 0.6,
    					radius: {40:90},
    					count: 6,
    					angle: 135,
    					degree: 90,
    					isRunLess: true,
    					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    				}),
    				// burst animation
    				new mojs.Burst({
    					parent: delement,
    					duration: 1500,
    					delay: 550,
    					shape : 'circle',
    					fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
    					x: '50%',
    					y: '50%',
    					opacity: 0.6,
    					radius: {40:100},
    					count: 6,
    					angle: 45,
    					degree: -90,
    					isRunLess: true,
    					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    				}),
    				// ring animation
    				new mojs.Transit({
    					parent: delement,
    					duration: 750,
    					type: 'circle',
    					radius: {0: 50},
    					fill: 'transparent',
    					stroke: '#988ADE',
    					strokeWidth: {35:0},
    					opacity: 0.6,
    					x: '50%',
    					y: '50%',
    					isRunLess: true,
    					easing: mojs.easing.bezier(0, 1, 0.5, 1)
    				}),
    				// ring animation
    				new mojs.Transit({
    					parent: delement,
    					duration: 750,
    					delay: 200,
    					type: 'circle',
    					radius: {0: 50},
    					fill: 'transparent',
    					stroke: '#988ADE',
    					strokeWidth: {35:0},
    					opacity: 0.6,
    					x: '50%',
    					y: '50%',
    					isRunLess: true,
    					easing: mojs.easing.bezier(0, 1, 0.5, 1)
    				}),
    				// icon scale animation
    				new mojs.Tween({
    					duration : 1500,
    					onUpdate: function(progress) {
    						if(progress > 0.3) {
    							var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
    							el9span.style.WebkitTransform = el9span.style.transform =
                    'scale3d(' + elasticOutProgress + ',' + elasticOutProgress +
                    ',1) rotate3d(0,0,1,' + 90*(1-elasticOutProgress) + 'deg)';
    						}
    						else {
    							el9span.style.WebkitTransform = el9span.style.transform = 'scale3d(0,0,1)';
    						}
    					}
    				})
    			],
    			onCheck : function() {
    				delement.style.color = '#988ADE';
    			},
    			onUnCheck : function() {
    				delement.style.color = '#C0C1C3';
    			}
    		});
      }
    };
  });
