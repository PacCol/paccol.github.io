$(".code-demo").each(function() {
    var html = $(this).find(".demo").html();
    html = html.replaceAll('<', '&lt;').replaceAll('>', '&gt;');

    var tabNumber = html.split("&lt;")[0].length;
    var lines = html.split("\n");

    var formattedHtml = "";

    for (let i = 0; i < lines.length; i++) {
        formattedHtml += lines[i].substr(tabNumber - 1) + "\n";
    }

    $(this).find(".code").html(`<pre><code class="language-html">${formattedHtml}</code></pre>`);

    console.log(formattedHtml);
});

hljs.highlightAll();