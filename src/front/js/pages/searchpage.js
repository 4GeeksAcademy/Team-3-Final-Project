(function () {
    //~~~~ global declarations
    var input = $("input");
    var select = $("select");
    var results = $("#results-container");
    var nextUrl = "";
    var more = $("#moreBtn");
    more.hide(); //initially hides the "more results" button
    var scrollLocation;

    //~~~~ storing the scroll position
    more.on("mouseenter", function () {
        scrollLocation = $(document).scrollTop();
        console.log("scrollLocation after mouse enter", scrollLocation);
    });

    //~~~~ results on enter key
    input.keypress(function (e) {
        if (e.keyCode == 13) searchFn(e);
    });

    //~~~~ search button click handler
    $(document).on("click", "#searchBtn, #moreBtn", function (e) {
        searchFn(e);
    });
    //~~~~ main search function
    function searchFn(e) {
        var searchBtnClc;
        if (e.target.id == "searchBtn" || e.keyCode == 13) {
            // console.log("searchBtn");
            searchBtnClc = true;
        }
        var url, data;
        if (searchBtnClc) {
            url = "https://spicedify.herokuapp.com/spotify";
            data = {
                q: input.val(),
                type: select.val(),
            };
        } else {
            // console.log("moreBtn");
            url = nextUrl;
        }
        //main ajax request
        $.ajax({
            url: url,
            data: data,
            success: function (data) {
                data = data.artists || data.albums;
                nextUrlreplaced =
                    data.next &&
                    data.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    ); //to match original security issues

                handleNextUrl(nextUrlreplaced);

                if (searchBtnClc) {
                    results.html(getResultHtml(data.items));
                    $(".imageCont").addClass("imageOn"); //needed hidden because of borders and shadows
                } else {
                    results.append(getResultHtml(data.items));
                    $(".imageCont").addClass("imageOn"); //needed hidden because of borders and shadows
                    $(document).scrollTop(scrollLocation); //sets the scroll to the position before pagination
                }
            },
        }); //closing ajax request
    } //closing searchFn

    //~~~~ main HTML injector
    function getResultHtml(items) {
        var resultHtml = "";
        var resultsMessage = $("#resultText");
        //main search for loop
        if (items.length > 0) {
            //so that we have at least 1 result
            for (var i = 0; i < items.length; i++) {
                //check if the result has an image
                if (items[i].images.length > 0) {
                    imgUrl = items[i].images[0].url;
                } else {
                    imgUrl = //default image (placeholder) from spotify
                        "https://nohalfmeasures.com/wp-content/uploads/2013/03/spotify-icon-3.png";
                }
                var extLink = items[i].external_urls.spotify; //link to spotify artist page

                //injecting results as new html elements
                resultHtml +=
                "<a href='artprofile.html?artistId=" + items[i].id + "'" +
                " target='_blank'><div class='result'><p>" +
                items[i].name +
                "</p><div class='imageCont'><img src='" +
                imgUrl +
                "'></div></div></a>";
            
            } //closes main for loop
            // search result section on top
            resultsMessage.html(
                "<p class='text'>showing search results for:<p class='text searchText'>" +
                    input.val() +
                    "</p>"
            );
            return resultHtml;
        } else {
            resultsMessage.html(
                "<p class='text'>no results found for: <span class='text searchText'>" +
                    input.val() +
                    "</span>"
            );
            results.html(""); //clears all previus results
            more.hide();
        } //closes the if block
    } //closes the html function

    //~~~~ feeding the ajax with "more results" request, showing the button dependently
    function handleNextUrl(next) {
        nextUrl = next;
        if (!nextUrl) {
            more.hide();
        } else {
            more.show();
        }
    }

    //~~~~ sticky header
    // When the user scrolls the page, execute function
    window.onscroll = function () {
        headerScroll();
    };

    // Get the header
    var header = document.getElementById("top");
    // var header = $("#myHeader");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    // Add the "sticky" class to the header when you reach its scroll position.
    //Remove "sticky" when you leave the scroll position
    function headerScroll() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    //
})();


