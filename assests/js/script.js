function myFunction() {
    var angleSize = Number(document.getElementById("angleSize").value);
    var angleName = document.getElementById('angleName');
    var angle = document.getElementById('angle');
  
    if (angleSize >= 1 && angleSize <= 89) {
      angleName.innerHTML = "Acute angle";
      angle.className = 'acute-angle';
    } 
    else if (angleSize === 90) {
      angleName.innerHTML = "Right angle";
      angle.className = 'right-angle';
    } 
    else if (angleSize >= 91 && angleSize <= 179) {
      angleName.innerHTML = "Obtuse angle";
      angle.className = 'obtuse-angle';
    } 
    else if (angleSize === 180) {
      angleName.innerHTML = "Straight line";
      angle.className = 'straight-line';
    } 
    else if (angleSize === 360){
      angleName.innerHTML = "Circle";
      angle.className = 'circle';
    } 
    else if(angleSize > 180 && angleSize < 360){
      angleName.innerHTML = "Reflex-angle";
      angle.className = 'reflex-angle';
    }
    else {
      angle.className = 'angle';
      angleName.innerHTML = "";
      angle.innerHTML = "";
    }
  }
  