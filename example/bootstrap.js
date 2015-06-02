jQuery(document).ready(function(){
	//start
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
						background: 'url("/example/roma.jpg") no-repeat 80% 20%',
						height: '300px',
						color: '#fff',
					},
					element: $('<div class="flexi-card-box">'),
					attr:{
					 	title:'Rome',
						content: 'Modern and old, past and present go side by side, all the time. Whether you are in Rome for 3 days, 3 weeks or 3 months, be prepared to step into the world\'s biggest open air museum. You can decide to follow the typical tourist paths or you can be luck or brave enough to go off the usual tracks. One way or the other, Rome will seduce you and it will hardly leave you indifferent. It will surprise you, like a beautiful middle aged woman that has still plenty to offer and whose beauty is just been merely blurred by time passing by.',
					},
					'tabs':[{
								'placeholder' : '<div ><img src="/example/coloseo.jpg" class="circle" style="width: 1.5em; height: 1.5em;"></div>',
								'title' : 'User data',
								'content' : 'Random content about the user',
							 
							} ,
					 		{
								'placeholder' : '<i class="fa fa-user-plus"></i>',
								'content' : 'Share the snippet with your friends.',
							 
							}
						],
				},
	});

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
								background: 'url("/example/paris.jpg") no-repeat 80% 20%',
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
  	});
  	
})