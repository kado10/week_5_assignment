//Prevent a form submission with the event.preventDefault()function
	$('a').on('click', function(event) {
		event.preventDefault();
//Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
	 $('document').ready();
//If a user clicks "Read More" on the primary column:
	// have the text in the <p> tag slide down along with a "Read Less" link in the blog post using  $.slideDown() and $.show()```
  	//hide the "Read More" link using ```$.hide()```
	 $('.readmore').on('click', function()	{
	 $('#show-this-on-click').slideDown().show();
	 $('.readless').show();
	 $('.readmore').hide();
	});

//If click "Read Less" 
	//slide <p> slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()```
	//display "Read More" link $.show()
	$('.readless').on('click', function()	{
	 $('#show-this-on-click').slideUp().hide();
	 $('.readmore').show();
	 $('.readless').hide();
	});
//If click "Learn More" <span><p>`hide "Learn More" link $.slideDown() and $.hide()
	$('.learnmore').on('click', function()	{
	 $('#learnmoretext').slideDown().show();
	 $('.learnmore').hide();
	});

});