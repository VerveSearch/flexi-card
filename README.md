# <h1>Flexicard Plugin</h1>


Flexicard Plugin create responive and personalised cards component. 
Tab animation based on materialised approach.


## Dependencies and Libraries 

1. jquery,min.js
2. materialise.min.css
3. materialise.min.js
4. font-awesome.min.css

## Usage

You can either create the card from JS or using HTML mark-up.
You can dynamically from JS tabs for existing card.
Card key contains all data related to the card.
Css  attributes are split in 3 categories, card css itself, title section and tab section.
To set the card content, use 'attr' data.
Tabs are specified in tabs array.
Basic usage is here:

```javascript
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
						background: '#ffffff',
						color: '#fff',
					},
					element: $('<div class="flexi-card-box">'),
					attr:{
					 	title:'Title',
						content: 'Random content goes here',
					},
					'tabs':[{
								'placeholder' : '<i class="fa fa-user"></i>',
								'title' : 'Tab 1 title',
								'content' : 'Random content tab 1',
							 
							} ,
					 		{
								'placeholder' : '<i class="fa fa-user-plus"></i>',
								'title' : 'Tab 2 title',
								'content' : 'Random content tab 2',
							 
							}
						],
				},
		})



```

