// load JSON data when user uses search bar
$("#search").keyup(function() {

    // narrow the search depending on what characters the user enters
    // using regular expressions allows for more versatility of search
    var searchField = $("#search").val();
    var myExp = new RegExp(searchField, "i");

    // getting JSON
    $.getJSON("data.json", function(data) {

        var output = "<ul class='searchResults'>";
        // loop through data
        $.each(data, function(key, val) {
            // checking if the value of the text the user entered matches with
            // the name or bio of the people
            if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
                output += "<li>";
                output += "<h2>" + val.name + "</h2>";
                output += "<h4>" + val.contact + "</h4>";
                output += "<p>" + val.bio + "</p>";
                output += "</li>";
            }

        });
        output += "</ul>";

        // output data as html
        $("#update").html(output);

    });

});



