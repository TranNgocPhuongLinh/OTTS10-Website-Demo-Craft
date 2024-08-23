$(document).ready(function(){
    $("#content").addClass("hide-content");
    $("#loading").show();

    $('#header').load('/header-footer/header.html', function() {
        // callback function
    });
    $('#sidebar-container').load('sidebar.html', function() {
        // callback function
    });
    $('#footer').load("/header-footer/footer.html", function() {
        // callback function
    });
    $('#contacts').load('/html/contact.html', function() {
        // callback function
    });
    $('#loading').load('/html/loading.html', function() {
        // callback function
    });

    $.when(
        $('#header').load('/header-footer/header.html'),
        $('#sidebar-container').load('sidebar.html'),
        $('#footer').load("/header-footer/footer.html"),
        $('#contacts').load('/html/contact.html'),
        $('#loading').load('/html/loading.html')
    ).done(function() {
        setTimeout(function() {
            $("#loading").hide();
            $("#content").removeClass("hide-content");
        }, 2000);
    });

    $('a').on('click', function() {
        $("#content").addClass("hide-content");
        $("#loading").show();
    });
});