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
			$(self.element).css('font-size', ($(self.element).width()/10)-5 + 'px');
			//if the card is not set from JS
			if(!(self.options.card.element)){
					if ((this.options.card.tabs) && (this.options.card.tabs.length!= 0)){
							this.setTabs($(el));
							self.createTab()
					}else{
						 self.createTab()
					}
			} 
			else {
				if(self.options.card.length != 0){
					self.setCard(self.options.card);
				}
				if ((this.options.card.tabs) && (this.options.card.tabs.length!= 0)){
					this.setTabs($(el));
				}
			}
			self.render(el);
		},
		createTab:function(){
			var self = this;
 		 	var tabs = $(self.element).find('.flexi-card-tabs')
			if(self.options.card.tabs){
				// self.tabs.push(new W.vs.FlexiTab($($('<div class="flexi-card-tab">'+this.placeholder) ), self))
				  $.each(self.options.card.tabs, function(k,v){ 
					  	$(tabs) 
					  	.append( $('<div class="flexi-card-tab">'+ this.placeholder) 
							.append($('<div class="flexi-card-tab-content">')
							.append('<div class="flexi-card-close-button"><i class="fa fa-times"></i></div>')
							.append( $('<div class="flexi-card-content-title">')
							.html(this.title))
	  						.append($('<div class="flexi-card-content-content">')
	  						.html(this.content || ""))))
					  })

				var tab =  $(self.element).find('.flexi-card-tab');
				$.each(tab, function(){
					//	$(this).data('__FLEXI_TAB__', x = new W.vs.FlexiTab($(this), this.element));
					self.tabs.push(new W.vs.FlexiTab($(this), self))
				})
			}
			else {
			 	var tab =  $(self.element).find('.flexi-card-tab');
				$.each(tab, function(){
					//$//(this).data('__FLEXI_TAB__', x = new W.vs.FlexiTab(el, this.element));
					  self.tabs.push(new W.vs.FlexiTab($(this), self))
				})
			 	 
				
				//add the closing button to the content
				// 	tabs  = $(self).find('.flexi-card-tab');
				// 	$.each(tabs, function(k,v){ 
				//  	$(this).append($('<div class="flexi-card-tab-content">')
				// 		.append('<div class="flexi-card-close-button"><i class="fa fa-times"></i></div>')
				// 		.append( $('<div class="flexi-card-content-title">').html(self.options.card.tabs[k].title))
  				// 		.append($('<div class="flexi-card-content-content">').html(self.options.card.tabs[k].content || "")))
				// 		self.tabs.push(new W.vs.FlexiTab($(this), self))
				// 		console.log(self.options.card.tabs[k])
				// })
			}
			// var el = $('<div>').add('').appendTo(this.el);
			// console.log(this.element)
			 // $(el).data('__FLEXI_TAB__', x = new W.vs.FlexiTab(el, this.element));
			// x.render();
		},
		// setLink:function(link){
		// 	var self = this;
		// 	if($(self).find('.flexi-card-link"').length == 0){
		// 		 $(self).find('.flexi-card-tabs')
		// 			  .append( $('<div class="flexi-card-link">'))
		// 	}
		// },
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
				// link = $(self.element).find('.flexi-card-link');
				title.css('background', self.options.background);
				$.each(self.style, function(k,v){
					$(self.element).css(k, v);
				})
				$(self.element).find('.flexi-card-box').css('font-size', self.style.fontSize);
				$(self.element).css('font-size', ($(self.element).width()/10)-5 + 'px');
				if(typeof(self.options.title) != 'undefined'){
					$.each(self.options.title.style,  function(k,v){
						$(title).css(k, v);
					})
				}
				if(self.options.card.element){
					//add the closing button to the content
					tabs  = $(card).find('.flexi-card-tab');
					$.each(tabs, function(k,v){ 
					 	$(this).append($('<div class="flexi-card-tab-content">')
							.append('<div class="flexi-card-close-button"><i class="fa fa-times"></i></div>')
							.append( $('<div class="flexi-card-content-title">')
								.html(self.options.card.tabs[k].title))
	  						.append($('<div class="flexi-card-content-content">')
	  							.html(self.options.card.tabs[k].content || "")))
							self.tabs.push(new W.vs.FlexiTab($(this), self))
					})
				}
				//set title stying
				$.each(self.titleStyle, function(k,v){
		  				$($(self.element).find('.flexi-card-title')).css(k,v);
		  		})
		  		// set link to the document
				//self.setLink(self.options.card.link)	
		},
		setTabs:function(card){
			var self = this;
			var tabs  = card.find('.flexi-card-tab');
			//if the are not tabs present
			if(tabs.length ==0){
				//set the tab container
				$(self.element).append($('<div class="flexi-card-tabs">'))
						//.append( $('<div class="flexi-card-link">')
						//.append( $('<a>').attr('href', self.options.card.link).html('READ MORE') )));
				//create tab with
				$.each(self.options.card.tabs, function(){
					//set the tab and the placeholder for the tab
					$($(self.element).find('.flexi-card-tabs'))
						.append($('<div class="flexi-card-tab">'+ this.placeholder) )
						//self.tabs.push(new W.vs.FlexiTab($($('<div class="flexi-card-tab">'+this.placeholder) ), self))
				})
			}else {
				/*$.each(self.options.card.tabs, function(){
					//set the tab and the placeholder for the tab
					$($(self.element).find('.flexi-card-tabs'))
						.append( $('<div class="flexi-card-tab">'+ this.placeholder) )
						//self.tabs.push(new W.vs.FlexiTab($($('<div class="flexi-card-tab">'+this.placeholder) ), self))
				})*/
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
	}

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

jQuery(document).ready(function(){
	//start
	/*$('.flexi-card').flexiCard({
			'card' : {
				style:{
					fontSize : '13px',
					borderRadius : '10px',
					color : '#000',
				},
				// attr:{
				// 	title:'',
				// 	content:''
				// 	},
			},
			// 'tab' : {
			// 	'color' : '#fff'
			// },
			// 'title' : 
			// {
			// 	style: {
			// 		color : '#fff',
			// 		padding: '15px 5px'
			// 	}
			// },
			// tabs:[{
			// 	title:'',
			// 	content:''
			// },{
			// 	element:$('<div>')
			// }],  
	});*/

	$('.flexi-card').flexiCard({
				'card' : {
				   	style:{
						fontSize : '13px',
						color : '#5b5b5b',
						background: '#fff',

					},
				  	tabStyle:{
						background: "#fff",
						color:  "#5b5b5b"
					},
			 	  	titleStyle:{
			 	  		textAlign: 'center',
						background: 'url("inc/images/roma.jpg") no-repeat 80% 20%',
						height: '300px',
						color: '#fff',
					},
					element: $('<div class="flexi-card-box">'),
					attr:{
					 	title:'Rome',
						content: 'Modern and old, past and present go side by side, all the time. Whether you are in Rome for 3 days, 3 weeks or 3 months, be prepared to step into the world\'s biggest open air museum. You can decide to follow the typical tourist paths or you can be luck or brave enough to go off the usual tracks. One way or the other, Rome will seduce you and it will hardly leave you indifferent. It will surprise you, like a beautiful middle aged woman that has still plenty to offer and whose beauty is just been merely blurred by time passing by.',
					},
					'tabs':[{
								'placeholder' : '<div ><img src="inc/images/coloseo.jpg" class="circle" style="width: 1.5em; height: 1.5em;"></div>',
								// 'placeholder' : '<i class="fa fa-user"></i>',
								'title' : 'User data',
								'content' : 'Random content about the user',
							 
							} ,
					 		{
								'placeholder' : '<i class="fa fa-user-plus"></i>',
								// 'title' : 'TItle 2',
								'content' : 'Share the snippet with your friends.',
							 
							}
						],
				},
		})

  	$('.flexi-card-second').flexiCard({
						 	'card' : {
						 		style:{
								fontSize : '13px',
								color : '#5b5b5b',
								background: '#fff',
							},
	  						tabStyle:{
								background: "#fff",
								color:  "#5b5b5b"
							},
							titleStyle: {
								color: '#fff',
								textAlign: 'center',
								background: 'url("inc/images/paris.jpg") no-repeat 80% 20%',
								height: '300px',
							},
								'tabs':[
								{
									'placeholder' : '<i class="fa fa-user-plus"></i>',
									'title' : 'title1',
									'content' : 'content1',
								},
								{
									'placeholder' : '<i class="fa fa-close"></i>',
									'title' : 'title2',
									'content' : 'content2',
								},
								],
						},
  	});

  	$('.flexi-card-content').css({
  		'max-height': '120px',
  		'overflow-y': 'scroll'
  	})

  
});