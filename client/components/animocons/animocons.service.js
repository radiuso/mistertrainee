'use strict';
/**
* http://tympanus.net/codrops/2016/02/23/icon-animations-powered-by-mo-js/
**/
angular.module('mtApp')
  .service('animocons', function () {
  	// taken from mo.js demos
  	function isIOSSafari() {
  		var userAgent;
  		userAgent = window.navigator.userAgent;
  		return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
  	}

  	// taken from mo.js demos
  	function isTouch() {
  		var isIETouch;
  		isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  		return [].indexOf.call(window, 'ontouchstart') >= 0 || isIETouch;
  	}

  	// taken from mo.js demos
  	var isIOS = isIOSSafari(),
  		clickHandler = isIOS || isTouch() ? 'touchstart' : 'click';

    function Animocon(el, options) {
  		this.el = el;
  		this.options = _.extend( {}, this.options );
  		_.extend( this.options, options );

  		this.checked = false;

  		this.timeline = new mojs.Timeline();

  		for(var i = 0, len = this.options.tweens.length; i < len; ++i) {
  			this.timeline.add(this.options.tweens[i]);
  		}

  		var self = this;
  		this.el.addEventListener(clickHandler, function() {
  			if( self.checked ) {
  				self.options.onUnCheck();
  			}
  			else {
  				self.options.onCheck();
  				self.timeline.start();
  			}
  			self.checked = !self.checked;
  		});
  	}

  	Animocon.prototype.options = {
  		tweens : [
  			new mojs.Burst({
  				shape : 'circle',
  				isRunLess: true
  			})
  		],
  		onCheck : function() { return false; },
  		onUnCheck : function() { return false; }
  	};

    function Handle(el, options) {
      return new Animocon(el, options);
    }

    return {
      'Handle': Handle
    };
  });
