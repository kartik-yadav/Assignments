(function clock() {
  var greeting;
  var d = new Date();
  var h = d.getHours();

  var mnh = h;
  if (h > 12) {
    h = h - 12;
  }
  if (h < 10) {
    h = "0" + h;
  }
 
  var m = d.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }

  var s = d.getSeconds();
  if (s < 10) {
    s = "0" + s;
  }

  setTimeout(clock, 1000);
 
  var mn;
  if (mnh >= 12) {
    mn = "pm";
  } else {
    mn = "am";
  }

  if (mnh > 4 && mnh < 12) {
    greeting = "Good Morning";
  } else if (12 <= mnh && mnh < 17) {
    greeting = "Good Afternoon";
  } else if (mnh >= 17 && mnh < 22) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  var tDate = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();

  var monArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  document.getElementById("greeting").innerText = greeting;
  document.getElementById("time").innerText = h + ":" + m + ":" + s + " " + mn;
  document.getElementById("date").innerText =
    tDate + " " + monArr[month] + " " + year;
})();
