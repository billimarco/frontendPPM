$(document).ready(function(){
    let fixListOn=true;
    let stickyOn=false;
    let win = $(window);

    if (win.outerWidth() < 1400) {
        $("#logSubButtons").hide();
        $("#userButton").show();
    }else{
        $("#logSubButtons").show();
        $("#userButton").hide();
    }
    if(win.outerWidth()<1200){
        $("#searchIcon").hide();
        $("#searchInput").css({"border":"1px","border-style":"solid"});
        $("#searchButton").show();
    }
    else{
        $("#searchIcon").show();
        $("#searchInput").css({"border":"","border-style":""});
        $("#searchButton").hide();
    }
    if (win.outerWidth() < 992) {
        $("#brand-list").hide();
        $("#searchBar").prependTo("#three-lines-nav-content");
        $("#searchBar").addClass("spaceSeparator separator");
        $("#searchIcon").show();
        $("#searchIcon").addClass("bg-body-tertiary");
        $("#searchButton").hide();
    }else{
        $("#brand-list").show();
        $("#searchBar").appendTo("#header-top-left");
        $("#searchBar").removeClass("spaceSeparator separator");
        $("#searchIcon").removeClass("bg-body-tertiary");
    }
    if(win.outerWidth()<768){
        $("#header-bottom").hide();
        $("#header-navbar").hide();
        $("#header-fixed-list").prependTo("header");
        $("#header-fixed-list").addClass("separator");
        $("#header-fixed-list").css({"padding":"8px 0"});
        $("#header-fixed-title").show();
        if(stickyOn==false){
            $("#last-update").show();
        }
        $(".smartNav").show();
        $(".pcNav").hide();
        $("#three-lines-nav-content").addClass("threeLinesNavSmartContent container-fluid");
        $("#three-lines-nav-content").removeClass("container");
        $("#footer-top").addClass("row");
        $("#footer-top > div").addClass("align-items-center text-center");
        $("#footer-top-iva").removeClass("text-end");
        $("#footer-top-iva").css({"font-size":"0.625rem"});
        $("#footer-nav-content").addClass("row");
        $("#footer-nav-content").css({"border-top":"1px","border-top-style":"solid","border-color":"#ddd"});
        $("#footer-fixed-list").addClass("row");
        $("#footer-fixed-list").css({"background-color":"#f4f4f4"});
        $("#footer-fixed-list li").css({"padding":"4px"});
        $("#footer-fixed-list > nav").removeClass("footer-fixed-list-separator");
        $("#footer-bottom").addClass("row");
        $("#footer-bottom").css({"border-top":""});
        $("#main-top").hide();
        $("footer").css({"padding-bottom":"69px"})
        $("#smart-footer").show();
    }else{
        if(stickyOn==false){
            $("#header-bottom").show();
            $("#header-navbar").show();
            if(fixListOn) {
                $("#header-fixed-list").show();
                $("#header-fixed-title").hide();
            }else{
                $("#header-fixed-list").hide();
                $("#header-fixed-title").show();
            }
        }
        $("#header-fixed-list").prependTo("#header-top-center");
        $("#header-fixed-list").removeClass("separator");
        $("#header-fixed-list").css({"padding":""});
        $("#last-update").hide();
        $(".smartNav").hide();
        $(".pcNav").show();
        $("#three-lines-nav-content").removeClass("threeLinesNavSmartContent container-fluid");
        $("#three-lines-nav-content").addClass("container");
        $("#footer-top").removeClass("row");
        $("#footer-top > div").removeClass("align-items-center text-center");
        $("#footer-top-iva").addClass("text-end");
        $("#footer-top-iva").css({"font-size":""});
        $("#footer-nav-content").removeClass("row");
        $("#footer-nav-content").css({"border-top":"","border-top-style":"","border-color":""});
        $("#footer-fixed-list").removeClass("row");
        $("#footer-fixed-list").css({"background-color":""});
        $("#footer-fixed-list li").css({"padding":""});
        $("#footer-fixed-list > nav").addClass("footer-fixed-list-separator");
        $("#footer-bottom").removeClass("row");
        $("#footer-bottom").css({"border-top":"solid 1px black"});
        $("#main-top").show();
        $("footer").css({"padding-bottom":""})
        $("#smart-footer").hide();
    }

    $("#three-lines-nav").click(function(){
        if($(window).scrollTop()<$("header").outerHeight(true) && $(window).outerWidth()>768) {
            $("#header-fixed-list").toggle();
            $("#header-fixed-title").toggle();
        }
        if(fixListOn){
            fixListOn=false;
        }else{
            fixListOn=true;
        }
    });

    $("#searchBar").hover(function(){
        if($(window).outerWidth() > 992){
            $("#searchIcon").addClass("bg-body-tertiary")
        }
    },function(){
        if($(window).outerWidth() > 992){
            $("#searchIcon").removeClass("bg-body-tertiary")
        }
    })

    $("#searchInput").focus(function(){
        $(this).addClass("border shadow-none")
        $("#searchButton").addClass("d-flex")
    })

    $("#searchInput").blur(function(){
        $(this).removeClass("border shadow-none")
        $("#searchButton").removeClass("d-flex")
    })

    $(window).scroll(function(){
        if ($(window).scrollTop() > $("header").outerHeight(true)) {
            $("header").addClass("sticky-header");
            if($(window).outerWidth()>768){
                $("#header-bottom").hide();
                $("#header-navbar").hide();
                $("#header-fixed-list").hide();
                $("#header-fixed-title").show();
            }else{
                $("#header-fixed-list").hide();
                $("#last-update").hide();
            }
            stickyOn=true;
        } else {
            $("header").removeClass("sticky-header");
            if($(window).outerWidth()>768){
                $("#header-bottom").show();
                $("#header-navbar").show();
                if (fixListOn) {
                    $("#header-fixed-list").show();
                    $("#header-fixed-title").hide();
                } else {
                    $("#header-fixed-list").hide();
                    $("#header-fixed-title").show();
                }
            }else{
                $("#header-fixed-list").show();
                $("#last-update").show();
            }
            stickyOn=false;
        }
    })

    $(window).on('resize', function(){
        if (win.outerWidth() < 1400) {
            $("#logSubButtons").hide();
            $("#userButton").show();
        }else{
            $("#logSubButtons").show();
            $("#userButton").hide();
        }
        if(win.outerWidth()<1200){
            $("#searchIcon").hide();
            $("#searchInput").css({"border":"1px","border-style":"solid"});
            $("#searchButton").show();
        }
        else{
            $("#searchIcon").show();
            $("#searchInput").css({"border":"","border-style":""});
            $("#searchButton").hide();
        }
        if (win.outerWidth() < 992) {
            $("#brand-list").hide();
            $("#searchBar").prependTo("#three-lines-nav-content");
            $("#searchBar").addClass("spaceSeparator separator");
            $("#searchIcon").show();
            $("#searchIcon").addClass("bg-body-tertiary");
            $("#searchButton").hide();
        }else{
            $("#brand-list").show();
            $("#searchBar").appendTo("#header-top-left");
            $("#searchBar").removeClass("spaceSeparator separator");
            $("#searchIcon").removeClass("bg-body-tertiary");
        }
        if(win.outerWidth()<768){
            $("#header-bottom").hide();
            $("#header-navbar").hide();
            $("#header-fixed-list").prependTo("header");
            $("#header-fixed-list").addClass("separator");
            $("#header-fixed-list").css({"padding":"8px 0"});
            $("#header-fixed-title").show();
            if(stickyOn==false){
                $("#last-update").show();
            }
            $(".smartNav").show();
            $(".pcNav").hide();
            $("#three-lines-nav-content").addClass("threeLinesNavSmartContent container-fluid");
            $("#three-lines-nav-content").removeClass("container");
            $("#footer-top").addClass("row");
            $("#footer-top > div").addClass("align-items-center text-center");
            $("#footer-top-iva").removeClass("text-end");
            $("#footer-top-iva").css({"font-size":"0.625rem"});
            $("#footer-nav-content").addClass("row");
            $("#footer-nav-content").css({"border-top":"1px","border-top-style":"solid","border-color":"#ddd"});
            $("#footer-fixed-list").addClass("row");
            $("#footer-fixed-list").css({"background-color":"#f4f4f4"});
            $("#footer-fixed-list li").css({"padding":"4px"});
            $("#footer-fixed-list > nav").removeClass("footer-fixed-list-separator");
            $("#footer-bottom").addClass("row");
            $("#footer-bottom").css({"border-top":""});
            $("#main-top").hide();
            $("footer").css({"padding-bottom":"69px"})
            $("#smart-footer").show();
        }else{
            if(stickyOn==false){
                $("#header-bottom").show();
                $("#header-navbar").show();
                if(fixListOn) {
                    $("#header-fixed-list").show();
                    $("#header-fixed-title").hide();
                }else{
                    $("#header-fixed-list").hide();
                    $("#header-fixed-title").show();
                }
            }
            $("#header-fixed-list").prependTo("#header-top-center");
            $("#header-fixed-list").removeClass("separator");
            $("#header-fixed-list").css({"padding":""});
            $("#last-update").hide();
            $(".smartNav").hide();
            $(".pcNav").show();
            $("#three-lines-nav-content").removeClass("threeLinesNavSmartContent container-fluid");
            $("#three-lines-nav-content").addClass("container");
            $("#footer-top").removeClass("row");
            $("#footer-top > div").removeClass("align-items-center text-center");
            $("#footer-top-iva").addClass("text-end");
            $("#footer-top-iva").css({"font-size":""});
            $("#footer-nav-content").removeClass("row");
            $("#footer-nav-content").css({"border-top":"","border-top-style":"","border-color":""});
            $("#footer-fixed-list").removeClass("row");
            $("#footer-fixed-list").css({"background-color":""});
            $("#footer-fixed-list li").css({"padding":""});
            $("#footer-fixed-list > nav").addClass("footer-fixed-list-separator");
            $("#footer-bottom").removeClass("row");
            $("#footer-bottom").css({"border-top":"solid 1px black"});
            $("#main-top").show();
            $("footer").css({"padding-bottom":""})
            $("#smart-footer").hide();
        }
    });
});