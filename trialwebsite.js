function showTab(selected, total)
  {
    for(i = 1; i <= total; i += 1)
    {
      document.getElementById('tabs-' + i).style.display = 'none';
    }
  
    document.getElementById('tabs-' + selected).style.display = 'block';
  }


   /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  setInterval(showTime, 1000);
  function showTime() {
      let time = new Date();
      let hour = time.getHours();
      let min = time.getMinutes();
      let sec = time.getSeconds();
      am_pm = "AM";

      if (hour > 12) {
          hour -= 12;
          am_pm = "PM";
      }
      if (hour == 0) {
          hr = 12;
          am_pm = "AM";
      }

      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;

      let currentTime = hour + ":" 
          + min + ":" + sec + am_pm;

      document.getElementById("clock")
          .innerHTML = currentTime;
  }

  showTime();