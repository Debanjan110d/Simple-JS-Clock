const clock = () => {
  a = new Date();
  h = a.getHours();
  m = a.getMinutes();
  s = a.getSeconds();

  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
};
setInterval(clock, 1000);
