// Copy code JS - https://stackoverflow.com/questions/44908329/copy-text-innerhtml-of-element-to-clipboard

function copyCode(id_string) {
    const ltRegEx = /&lt;/g;
    const gtRegEx = /&gt;/g;

    const el = document.createElement("textarea");
    el.value = document.getElementById(id_string).innerHTML.replace(ltRegEx, '<').replace(gtRegEx, '>');
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Code has been copied to clipboard.");
}
