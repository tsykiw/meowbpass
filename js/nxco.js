// Petanikode
$("#antiadblock").remove();

// MEOWNIME
$("a").click(function(event) {
    var href = $(this).attr('href');
    if (href.match('flashtik')) {
        // alert("Bypass URL?");
        var text = href.match(/[flashtik]\w+/g);
        var DecryptedURL = atob(text[2]);
        console.log(DecryptedURL);
        window.open(DecryptedURL);
    } else if(href.match('moneyseason')) {
		var text = href.match(/[moneyseason]\w+/g);
        var DecryptedURL = atob(text[2]);
        console.log(DecryptedURL);
        window.open(DecryptedURL);
	}
});


