// site.js
(function () {

    
    ////using jQuery instead of standard declaration.  $ and the word jQuery are interchangeable
    //var ele = $("#username");
    //ele.text("Ralph Beard");
    ////var ele = document.getElementById("username");
    ////ele.innerHTML = "Ralph Beard";

    //var main = $("#main");
    //main.on("mouseenter", function (){
    ////main.onmouseenter = function () {
    //    main.style = "background-color: #888;";
    //    //main.style.backgroundColor = "#888";
    //});

    //main.on("mouseleave", function () {
    //    main.style = "";
    //});

    ////unordered list, menu, list item, anchor
    //var menuItems = $("ul.menu li a");
    //menuItems.on("click", function () {
    //    var me = $(this);
    //    alert(me.text());
    //});

    var $sidebarAndWrapper = $("#sidebar,#wrapper");
    var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        } else {
            $icon.addClass("fa-angle-left");
            $icon.removeClass("fa-angle-right");
        }
    });
    

})();