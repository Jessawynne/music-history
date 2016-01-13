# Music History

This project explored tools introduced throughout the entire front end course. 

## Version One : Requirements

1. Create five options for the artist select element of any artist that you enjoy.
1. Create at least five options for the album select element. One, or more, album for each artist.
1. The links in the navigation bar don't need to link to anything just yet, you can use <a href="#">View music</a> for now
1. Pick your four favorite songs from the artists you have chosen and use the information for each in the list that's on the right-hand side. You can use h1 tags, div tags, section tags... whatever you like.

## Version Two : Requirements

Use JavaScript arrays, loops, and innerHTML to show the music you love.

1. Add one song to the beginning and the end of the array.
1. Loop over the array and remove any words or characters that obviously don't belong.
1. Find and replace the `>` character in each item with a `-` character.
1. Add each string to the DOM in `index.html` in the main content area.

 ------------------------------------------------
|  {Song name} by {Artist} on the album {Album}  | 
 ------------------------------------------------

## Version Three : Requirements

1. Use the Flexible Layout Box model to ensure that both the form section and the content section are the same height.
1. The entire container for the even songs (plus its details) should have a background color of Sea Shell (SeaShell or \#FFF5EE)
1. The entire container for the odd songs (plus its details) should have a background color of Mint Cream (MintCream or \#F5FFFA)
1. The first song container should have bold text.
1. Set the navigation bar's position so that it's always on the top of the page, even if you scroll down. To ensure this works, you can just add some div tags at the bottom of the page that add enough text that would force you to scroll the browser.

## Version Four : Requirements

1. In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".
1. Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a `<form>` element because we're not actually submitting this form anywhere.
1. Add a `<button>` element at the bottom of the input fields labeled "Add".
1. The input fields and the add button make up the *Add Music View*.
1. The existing view - the combination of the filter form and the song list - will be referred to as the *List Music View*.
1. The *Add Music View* should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.
1. When the user clicks on "Add Music" in the navigation bar, the *List Music View* should be hidden, and the *Add Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a0cf17f7b)).
1. When the user clicks on "List Music" in the naviation bar, the *Add Music View* should be hidden, and the *List Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a8d99d401)).
1. Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

## Version Five : Requirements 

1. Read from local JSON file with jQuery.
1. Loop over results and inject into Music History list page.
1. Add delete button DOM to each row and use jQuery to delete entire row in the DOM.
1. Take your music and split it into two JSON file instead of them all living on one file.
1. Add a button at the bottom of your music list and label it "More >".
1. Load the songs from the first list and inject the DOM into the document as you've already done.
1. When the [user clicks](https://api.jquery.com/on/) that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.

## Version Six : Using Bootstrap

You need to have your application refactored to use the Bootstrap grid system for layout. From this point on, styling of your application is completely up to you, but you must be using Bootstrap grid system for layouts.

## Version Seven : Using Handlebars

1. Use jQuery to retrieve the songs from your API.
1. Use the JSON objects to populate Handlebar templates.
1. Use the populated templates to update the browser.
1. Add new songs to your Firebase API with POST AJAX calls.
1. Populate the form fields with data from your API.
1. When "Filter" button is pressed, update the song list with songs that only match the specified criteria.

Make sure that you are using Handlebars for all DOM rendering. Do not fall back to using jQuery to hide and show songs in order to get the filtering to work. If you want to display a subset of songs that match an artist or an album, you need to send a new object to the Handlebar templates.

## Version Eight: Requirements

Use [OAuth.io](https://oauth.io/home) and build it into your Music History application.