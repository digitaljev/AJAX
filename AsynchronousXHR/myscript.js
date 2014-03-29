/* 
Once the readystate is 4 the request to the server has been successfuly. You can then make modifations to the returned data.

Check readystate is 4 with an eventhandler, with onreadystatechange

For IE8 and before, some browsers used ActiveXObjects instead of XHR. You need to check for this for the AJAX to work.
*/

// backwards compatibillity check
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft, XMLHTTP");
    }

// open data asynchonously
    request.open("GET", "data.txt");

// creating eventhandler
    request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status === 200)){
        // applying the data to a div    
            var select = document.getElementById("update");
            select.innerHTML = request.responseText;
            
            // selecting a single <li>
            var group = document.getElementsByTagName("li");
            group[2].innerHTML = request.responseText;
            
            // looping through and applying it to each <li> on another list
            // through slecting the tags as an array
            var loop = document.getElementsByTagName("ul")[1].getElementsByTagName("li");
                for (var i = 0; i < loop.length; i++) {
                    loop[i].innerHTML = request.responseText;
                }
        }    
    }
    
// send data to page
    request.send();




