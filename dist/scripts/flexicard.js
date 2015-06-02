  (function(W,$){
  	W.vs =  W.vs || {};

	W.vs.Flexicard = function(el, opts){
		var self = this;
		this.element = el;
		this.style= opts.card.style;
		this.titleStyle = opts.card.titleStyle;
		this.width = null;
		this.tabs=[];
		this.options = opts;
		this.init(el);
		$(window).resize(function(){
			self.onResize();
		}); 
	};

	W.vs.Flexicard.boot = function(){
		$('.flexi-card[data-flexi-card]').each(function(k,o){
			if(!$(this).data('__FLEXI_CARD__')){
				$(this).data('__FLEXI_CARD__',new W.vs.Flexicard(this));
			}
		})
	};

	W.vs.Flexicard.prototype = {
		init:function(el){
			var self = this;
			self.width = $(el).width();
			$(self.element).addClass('flexi-card')
			$(self.element).css('font-size', ($(self.element).width()/10)-5+'px');
			if(!(self.options.card.element)){
				if ((this.options.card.tabs) && (this.options.card.tabs.length!= 0)){
						this.setTabs($(el));
						self.createTab();
				}else{
					 self.createTab();
				}
			} 
			else {
				if(self.options.card.length != 0){
					self.setCard(self.options.card);
				}
				if((this.options.card.tabs) && (this.options.card.tabs.length!= 0)){
					this.setTabs($(el));
				}
			}
			self.render(el);
		},
		createTab:function(){
			var self = this;
 		 	var tabs = $(self.element).find('.flexi-card-tabs')
			if(self.options.card.tabs){
			  	$.each(self.options.card.tabs, function(k,v){ 
				  	$(tabs).append( $('<div class="flexi-card-tab">'+ this.placeholder) 
						.append($('<div class="flexi-card-tab-content">')
						.append('<div class="flexi-card-close-button"><i class="fa fa-times"></i></div>')
						.append( $('<div class="flexi-card-content-title">')
						.html(this.title))
  						.append($('<div class="flexi-card-content-content">')
  						.html(this.content || ""))))
				});
				var tab =  $(self.element).find('.flexi-card-tab');
				$.each(tab, function(){
					self.tabs.push(new W.vs.FlexiTab($(this), self))
				});
			}
			else {
			 	var tab =  $(self.element).find('.flexi-card-tab');
				$.each(tab, function(){
					  self.tabs.push(new W.vs.FlexiTab($(this), self))
				});
			}
		},
		setCard:function(card){
			var self = this;
			if(typeof(card.element) != 'undefined'){
				$(self.element)
					.append(card.element)
				$(self.element)
					.children().first()
					.append($('<div class="flexi-card-title">').html(card.attr.title))
					.append($('<div class="flexi-card-content">').html(card.attr.content))
			}else{
				$(self.element)
					.append( $('<div class="flexi-card-title">').html(card.attr.title))
					.append( $('<div class="flexi-card-content">').html(card.attr.content))
			} 
 		},
		render:function(card){
			var self = this,
				title = $(self.element).find('.flexi-card-title');
				title.css('background', self.options.background);
				$.each(self.style, function(k,v){
					$(self.element).css(k, v);
				});
				$(self.element).find('.flexi-card-box').css('font-size', self.style.fontSize);
				$(self.element).css('font-size', ($(self.element).width()/10)-5 + 'px');
				if(typeof(self.options.title) != 'undefined'){
					$.each(self.options.title.style,  function(k,v){
						$(title).css(k, v);
					});
				}
				if(self.options.card.element){
					tabs  = $(card).find('.flexi-card-tab');
					$.each(tabs, function(k,v){ 
					 	$(this).append($('<div class="flexi-card-tab-content">')
							.append('<div class="flexi-card-close-button"><i class="fa fa-times"></i></div>')
							.append( $('<div class="flexi-card-content-title">')
							.html(self.options.card.tabs[k].title))
	  						.append($('<div class="flexi-card-content-content">')
	  						.html(self.options.card.tabs[k].content || "")))
							self.tabs.push(new W.vs.FlexiTab($(this), self))
					});
				}
				$.each(self.titleStyle, function(k,v){
		  				$($(self.element).find('.flexi-card-title')).css(k,v);
		  		});
		},
		setTabs:function(card){
			var self = this;
			var tabs  = card.find('.flexi-card-tab');
			if(tabs.length ==0){
				$(self.element).append($('<div class="flexi-card-tabs">'))
				$.each(self.options.card.tabs, function(){
					$($(self.element).find('.flexi-card-tabs'))
						.append($('<div class="flexi-card-tab">'+ this.placeholder) )
				});
			}else {
			}
		},
		setTabSize:function(v){
			var self = this;
		 	$(self).find('.flexi-card-link').css('line-height', (self.width/10)/10);
		 	$(self.element).css('font-size', (self.width/10)-5); 
			$($(v)).css('font-size', (self.width/10)-5);
		},
		onResize: function(){
				var self = this; 
				self.width = $(self.element).width();
				$.each(self.tabs, function(){
					self.setTabSize($(this.element));
				})
		}
	};

	$.fn.flexiCard = function(options){
		var opts = $.extend(true, {},$.fn.flexiCard.defaults, options );
		return this.each(function(){
			$(this).data('__FLEXI_CARD__',new W.vs.Flexicard(this, opts));
		});
	};

	$.fn.flexiCard.defaults = {
			'card' : {
				  	style:{
						fontSize : '13px', 
					 	color: "#000",
						float: 'left',
						width: '100%',
						margin: '0px',
						position: 'relative',
						overflow: 'hidden',
						margin: '0.5rem 0 1rem 0',
					},
					tabStyle : {
						background: "rgba(63,81,181,0.8)",
						height: '1.5em',
						width: '1.5em',
						cursor: 'pointer',
						margin: '1px',
						textAlign: 'center',
						boxSizing: 'border-box',
						display: 'inline-block',
						color : 'rgba(63,81,181,0.8)'
					},
				 	titleStyle : {
				 		background : 'rgba(63,81,181,0.8)'
					 
					},
				}
	};

	$(document).ready(function(){
		W.vs.Flexicard.boot();
	});

})(window,jQuery);
 
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