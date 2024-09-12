var counter=1;
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
},5000);

function myFunction() {
    document.getElementById('dropper').classList.toggle('show');
}
window.onclick = function(event) {
    if(!event.target.matches('.fa-bars')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
    }
}