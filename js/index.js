var resultCheckEl = document.getElementById("result-check")

resultCheckEl.addEventListener("click", function() {
    if (localStorage.getItem("superheroName") === null)
    {
      resultCheckEl.setAttribute("href", "index.html")
    }
    else 
    {
      resultCheckEl.setAttribute("href", "results.html")
    }


});