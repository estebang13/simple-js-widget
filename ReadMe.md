Basic javascript widget.

Suppose bower and require.js are install in the computer
Install via bower the jquery, almond and requirejs-text
Then add modifications to embed.js file
Optimize css with command "r.js -o cssIn=css/style.css out=css/style.css"
Next use the command "r.js -o embed.build.js" to create the embed.min.js
Now the embed.min.js is ready for housting and the using the host website with the script and div above.

<div id="rodcoLink"></div>
<script>
(function (window, document) {
  var loader = function () {
    var script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
    script.src = "https://s3.amazonaws.com/estebancr/embed.min.js";
    tag.parentNode.insertBefore(script, tag);
  };
  window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
})(window, document);
</script>



We use wget https://raw.github.com/premasagar/cleanslate/master/cleanslate.css
to include css file that help with compatilibity of the host websites.

With the index.html you can test it.