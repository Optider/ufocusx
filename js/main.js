$(window).on("blur focus", function(e) {
    var prevType = $(this).data("prevType");

    if (prevType != e.type) {   //  reduce double fire issues
        switch (e.type) {
            case "blur":
                $('div').text("Blured"); // modify text to display status
                break;
            case "focus":
                $('div').text("Focused"); // modify text to display status
                break;
        }
    }

    $(this).data("prevType", e.type);
})