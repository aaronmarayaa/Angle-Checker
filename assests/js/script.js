function myFunction() {
    var grade = Number(document.getElementById("result1").value);
    var textMarginAngles = document.getElementById('textMargin_angles');
    var angle = document.getElementById('angle');
  
    if (grade >= 1 && grade <= 89) {
      textMarginAngles.innerHTML = "Acute angle";
      angle.className = 'acute-angle';
    } else if (grade === 90) {
      textMarginAngles.innerHTML = "Right angle";
      angle.className = 'right-angle';
    } else if (grade >= 91 && grade <= 179) {
      textMarginAngles.innerHTML = "Obtuse angle";
      angle.className = 'obtuse-angle';
    } else if (grade === 180) {
      textMarginAngles.innerHTML = "Straight line";
      angle.className = 'straight-line';
    } else {
      angle.className = 'angle';
      textMarginAngles.innerHTML = "";
      angle.innerHTML = "";
    }
  }
  