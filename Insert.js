var faces = ["😀"];
faces.forEach(function(entry) {
    console.log(entry + " was added to the list.");
    var div = document.getElementByClassNames('emoji-content');
    div.innerHTML += entry;
});
