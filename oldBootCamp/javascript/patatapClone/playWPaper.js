alert("Connected");
for (var i=0; i<10; ++i) {
  for (var j=0; j<10; ++j) {

    new Path.Circle(new Point(i*100, j*100), 10).fillColor = 'rgb(10+20*i, 255, 20*j)';
  }
}