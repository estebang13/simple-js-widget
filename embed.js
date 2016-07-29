require(["jquery","text!css/style.css"], function($,css) {
    "use strict";
    $(function() {
        var $style = $("<style></style>", {type: "text/css"});
        $style.text(css);
        $("head").append($style);
        $("#rodcoLink").append("<a class='rodco_link w-button' href='http://rodcocr.com/'' target='_blank'></a>");
    });
});