/* 
Creating a new XMLHttpRequest on a variable, opening the data file (XML, txt, or JSON),
the request is set to FALSE. This should not be done usually as this forces the request to
run synchronously, meaning that each request has to be completed before the page is updated.

This can be viewed by creating the request 100 times and viewing the inspector.

AJAX calls need to be on the same server because of the Same Domain Name policy

if the STATUS is 200 then the request was successful
an IF statement is good practice to use to test this
you now need to output the responseText to the page for it to be viewed.
*/

// creating a loop to request the data 100 times, showing that the page won't update, until all the requests are completed.

for (var i = 1; i <= 100; i++) {

    var request = new XMLHttpRequest();
    // open data, set synchronously
    request.open("GET", "data.txt", false);
    // send data to page (doesn't write it to the screen)
    request.send();
    
    // outputing to the console if the request is successful, and writing it to the document
    if (request.status === 200){
        console.log(request);
        document.writeln(request.responseText);
    }

}



