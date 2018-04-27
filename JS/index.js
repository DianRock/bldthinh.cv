
// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "65%";
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

function runEXP() {
  var febar = document.getElementById("FEbar");
  var widthFE = 1;
  var idFE = setInterval(frame, 20);

  var bebar = document.getElementById("BEbar");
  var widthBE = 1;
  var idBE = setInterval(frame, 20);

  var swbar = document.getElementById("SWbar");
  var widthSW = 1;
  var idSW = setInterval(frame, 20);

  function frame() {
    if (widthFE >= 80) {
      clearInterval(idFE);
    } else {
      widthFE++; 
      febar.style.width = widthFE + '%'; 
      febar.innerHTML = widthFE * 1  + '%';
    }

    if (widthBE >= 50) {
      clearInterval(idBE);
    } else {
      widthBE++; 
      bebar.style.width = widthBE + '%';
      bebar.innerHTML = widthBE * 1  + '%';
    }

    if (widthSW >= 85) {
      clearInterval(idSW);
    } else {
      widthSW++; 
      swbar.style.width = widthSW + '%'; 
      swbar.innerHTML = widthSW * 1  + '%';
    }
  }
}
