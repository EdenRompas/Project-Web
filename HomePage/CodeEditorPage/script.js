function compile() {

    //get value
    var html = document.getElementById("html_code");
    var css = document.getElementById("css_code");
    var js = document.getElementById("js_code");
    var output = document.getElementById("output");

    //output
    output.contentDocument.body.innerHTML = html.value + "<style>" + css.value + "</style>";
    output.contentWindow.eval(js.value);
}