window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop &gt; 20 || document.documentElement.scrollTop &gt; 20) {
        document.getElementById(&quot;myBtn&quot;).style.display = &quot;block&quot;;
    } else {
        document.getElementById(&quot;myBtn&quot;).style.display = &quot;none&quot;;
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
