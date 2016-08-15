var faces = ["😀"];
faces.forEach(function(entry) {
    console.log(entry + " was added to the list.");
    var div = document.getElementsByClassName('emoji-content');
    div.innerHTML += entry;
});
