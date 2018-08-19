console.log('js is running');
window.onload = function() {
  var start = performance.now();
  var sum = 0;
  var avg = 0;
  var i = 0;

  function getRandomColor() {
    var color = '#';
    var letters = '0123456789ABCDEF';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function borderRadius() {
    var borderRadius = Math.floor(Math.random() * 100);
    if(borderRadius > 40){
      return borderRadius;
    }
    else {
      return 20;
    }
  }
  function top() {
      var top = Math.random() * 200;
      if (top > 150) {
        return 50;
      } else {
        return top;
      }
  }
  function left() {
      var left = Math.random() * 200;
      if (left > 150) {
        return 50;
      } else {
        return left;
      }
  }
  function width() {
    var width = Math.random() * 500;
    if(width > 40 && width < 400){
      return width;
    }
    else {
      return 40;
    }
  }
  function height() {
    var height= Math.random() * 500;
    if(height > 40 && height<300){
      return height;
    }
    else {
      return 40;
    }
  }
  function reappear() {
    document.getElementById('shape').style.top = top() + "px"; // chaning position
    document.getElementById('shape').style.left = left() + "px";
    document.getElementById('shape').style.width = width() + "px";
    document.getElementById('shape').style.height = height() + "px";
    document.getElementById('shape').style.borderRadius = borderRadius() + "%";
    document.getElementById('shape').style.display = "block";
    document.getElementById('shape').style.backgroundColor = getRandomColor();
    start = performance.now()
  }

  document.getElementById('shape').onclick = function() {
    console.log(i);
    var end = performance.now();
    var timeTaken = (end - start) / 1000;
    document.getElementById('shape').style.display = "none";
    document.getElementById('timeTaken').innerHTML = timeTaken;
    sum = sum + timeTaken;
    i++;
    if(i<20)
    {
      setTimeout(reappear, Math.random() * 500);
    }
    else{
      avg = sum / 20;
      alert(avg);
    }
  }

}
