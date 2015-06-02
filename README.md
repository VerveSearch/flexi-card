# Flexicard Plugin


Flexicard Plugin creates responive and personalised cards component. 
Tab opening animation is based on material design approach. Card has variable height.

## Dependencies and Libraries 

1. jquery.min.js
2. materialise.min.css
3. materialise.min.js
4. font-awesome.min.css

## Usage

To instantiate the Flexicard you need to apply flexiCard() function to a DOM object.
You can either create the card structure from passing 'card' object to JS or using HTML mark-up.
You can dynamically  add tabs from JS for existing card. Card key contains all data related to the card. 
Default border radius can be either managed by adding 'data-flexicard-round' or overwrite it from JS.
Css  attributes are split in 3 categories, card css itself, title section and tab section.
To set the card content, use 'attr' data.
Tabs are specified in tabs array.
Basic usage case is here:

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
## Version

This version is ready to be used.
Expect future optimisation.

