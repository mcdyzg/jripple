;(function($){
	var ripple=function(element,options){
		this.$element=$(element);
		this.options=options;

	}
	ripple.prototype.init=function(){
		var $element=this.$element;
		var options=this.options;
		this.$element.click(function(e){
			$element.css({'position':'relative','overflow':'hidden'});
			if($element.find('.ink').length==0){
				$('<span class="ink"></span>').appendTo($element);
			}

			var ink=$element.find('.ink');
			ink.css('animation','');

			ink.css({'background':options.color});

			if(!ink.height()&&!ink.width()){
				d=Math.max($element.height(),$element.width());
				ink.css({'height':d,'width':d});
			}

			var x=e.pageX-$element.offset().left-ink.width()/2;
			var y=e.pageY-$element.offset().top-ink.height()/2;


			ink.css({'top':y+'px','left':x+'px','animation':'ripple'+' '+options.time+' '+'ease-in'});
		});
	}
	
	$.fn.ripple=function(option){
		return this.each(function(){
			var options=$.extend({},$.fn.ripple.default,option);
			var a=new ripple(this,options);
			a.init();
		})
	}

	$.fn.ripple.default={
		color:'rgba(0,0,0,.6)',
		time:'0.6s'
	}
})(jQuery);