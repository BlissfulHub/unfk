function myFunction() {
    document.getElementById("dropper").classList.toggle("show");
}
window.addEventListener("click", (e)=>{
    console.log(e.target.classList)
    if(!e.target.classList.contains("fa-bars")){
        document.getElementById("dropper").classList.remove("show");
    }
})