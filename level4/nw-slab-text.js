// 4.11 Make It Work
// Using the included external library, SlabText, create a wrapper directive nwSlabText so that we can use it in the NoteWrangler app.

// 1.) Create a link function for the nwSlabText directive.
// 2.) Call the slabText() method on directive's element. Refer to the SlabText docs for the method name.
// 3.) Add an attribute directive for nwSlabText to the h2 tag in the nw-card.html template.
// 4.) We have a problem: the link function of the nwSlabText directive is being called before the element has been populated with data.
// To solve this, inject and use the $timeout service.



