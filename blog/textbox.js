// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  function showFile() {
    var preview = document.getElementById("show-text");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    var textFile = /text.*/;

    if (file.type.match(textFile)) {
      reader.onload = function(event) {
        preview.innerHTML = event.target.result;
      };
    } else {
      alert("File type not supported");
    }
    reader.readAsText(file);
  }
} else {
  alert("Your browser is too old to support HTML5 File API");
}

function TextChange() {
  // $("#content").val("我要改变你的内容");
  document.getElementById("show-text").innerHTML = document.getElementById(
    "show-text"
  ).value;
}
