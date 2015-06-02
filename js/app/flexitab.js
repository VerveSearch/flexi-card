  (function(W,$){
  	W.vs =  W.vs || {};

 	W.vs.FlexiTab = function(el, parentEl){
 		var p = parentEl || el,
 		e = (el !== p)?el:undefined;
 		self= this;
  		self.element = e;
  	 	self.idx = 0;
  		self.style = parentEl.options.card.tabStyle;
  		self.placeholder= el.placeholder;
  		$(this.element).data('__FLEXI_CARD_TAB__',this);
  		self.parentEl = parentEl;
  		self.init(self.element);
  	};
  	
  	W.vs.FlexiTab.prototype = {
	  	init: function(el){
	  			var self= this,
	  				closeButton = $(self.element).find('.flexi-card-close-button');
		  			self.setContent(el);
		  			self.setTabSize(el);
		  			self.render(el);
			  		$(self.element).on('click', function(){
			  			var idx = $(this).index()
			  			if(!($(this).hasClass('expanded'))){
			  				self.expandTab($(self.element), idx);
			  			}
			  		});
					$(closeButton).on('click',  function(){
						if($(self.element).hasClass('expanded')){
							self.wrapTab($(self.element));
						}
		  			});
	  	},
	  	render: function(el){
	  			var self = this;
	  			$.each(self.style, function(k,v){
	  				if(k == 'fontSize'){
	  					$($(el).find('.flexi-card-tab-content')).css(k,v);
	  				}else{
	  					$(el).css(k,v);
	  				}
	  		 	});
	  	},
	  	setContent:function(){
	  			var self= this;
	  			$($(self.element).find('.flexi-card-content-title')).html(self.title);
	  			$($(self.element).find('.flexi-card-content-content')).html(self.content);
	  	},
	  	setTabSize:function(el){
				var self = this;
				$(el).css('font-size', (self.parentEl.width/10)-5);
		},
	  	expandTab:function(tab,idx){
	  		 	this.idx = idx;
				var self=this;
				$(tab).after($('<div class="flexi-card-tab">'));
				$(tab).css('position', 'absolute').css('z-index', 10);
				$(tab).animate({
					'position' : 'absolute',
					'width' : '100%',
					'left' : '0px',
					'z-index' : 10,
				}, 500);
				setTimeout(function(){
					$(tab).children().first().hide()
						$(tab).animate({
							'left' : '0px',
							'height' : '100%',
							'bottom' : '0px',
							},500);
					$(tab).find('.flexi-card-tab-content').show();
					$(tab).addClass('expanded');
				},500);
				$(tab).show();
		},
		wrapTab:function(tab){
				var marginLeft = (this.idx ==0) ? '1px' : (1.5*this.idx) +'em';
			 	$(tab).find('.flexi-card-tab-content').hide();
			 	$(tab).animate({
			 		'height' : '1.5em',
					'bottom' : '0px',
					'left' : marginLeft, 
				},500);
				setTimeout(function(){
					$(tab).children().first().show();
					$(tab).animate({
						'width' : '1.5em',
						},300); 
					$(tab).css({
					  	'bottom' : '0',
					  	'z-index': 1
					});
					$(tab).removeClass('expanded');
					setTimeout(function(){
						$(tab).css('position', 'relative').css('left', '0px')
 						$(tab).next().remove();
					},300);
					$(tab).find('.flexi-card-tab-content').hide();
				},500);
				$(tab).find('.flexi-card-tab-content').hide();
				$(tab).children().first().show();
		},
  	}	

})(window,jQuery);