  (function(W,$){
  	W.vs =  W.vs || {};


  

	W.vs.Flexicard = function(el){
		this.element = el;
		$(this.element).data('__FLEXI_CARD__',this.element);
		this.tabs=[];
		this.width = null;
		this.init(el);
		var self = this;
		$(window).resize(function(){
			self.onResize();
		}); 
		$(document).ready(function(){
			W.vs.Flexicard.boot();
		});
	}

	W.vs.Flexicard.boot = function(){
		$('.card[data-flexi-card]').each(function(k,o){
			if (!$(this).data('__FLEXI_CARD__')){
				$(this).data('__FLEXI_CARD__',o);
			}
		})
	}

	W.vs.Flexicard.prototype = {
		init:function(el){
			var self = this;
			self.width = $(el).width();
			// self.calculateTabs(el);
			self.setCss();
		},
		setCss: function(){

		},
		calculateTabs:function(card){
			var self = this;
			var tabs  = $(card).find('.card-flexi-tab');
			var l=tabs.length;
			$.each(tabs, function(k,v){
				self.tabs.push(new FlexiTab(this, self));
			 	self.getTabSize(v,l);
			})
		},
		getTabSize:function(v,l){
			var self = this;
			console.log(v)
			// $(v).css('height', this.width/l);
			$($(v)).css('width', this.width/l);
			$($(v)).css('font-size', this.width/10);	
			 
				 
				$(v).on('click', function(k,v){
					$(this).css('width', '100%');
					$(this).children().first().hide();
					$(this).find('.card-flexi-tab-content').show();
				 	if(!($(this).hasClass('expanded'))){
				 		console.log('expand')
						self.expandTab($(this));
					} else {
						self.wrapTab($(this));
					}
				})
		},
		onResize: function(){
				var self = this;
				self.width = $('.card').width();
				self.calculateTabs(self.element);	 
		}
	}

	$.fn.flexiCard = function(){
		return this.each(function(){
			new W.vs.Flexicard(this);
		});
	};

})(window,jQuery);


jQuery(document).ready(function(){
	//start
	$('.card').flexiCard();
})