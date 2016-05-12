function ajax_get_jsonForNav(){
        var results = document.getElementById("results");
        var hr = new XMLHttpRequest();
        hr.open("GET", "../json/nav.json", true);
        hr.setRequestHeader("Content-type", "application/json", true);
        hr.onreadystatechange = function() {
            if(hr.readyState == 4 && hr.status == 200) {
                var data = JSON.parse(hr.responseText);
                $('#nav1').append("<a href='#'>"+data.menuItem1.label+"</a><span>|</span>");
                $('#nav2').append("<a href='#'>"+data.menuItem2.label+"</a><span>|</span>");
                $('#nav3').append("<a href='#'>"+data.menuItem3.label+"</a><span>|</span>");
                $('#nav4').append("<a href='#'>"+data.menuItem4.label+"</a><span>|</span>");
            }
        }
        hr.send(null);
        //results.innerHTML = "requesting...";
    }
        
    function ajax_get_jsonForActivities(){
        var results = document.getElementById("results");
        var hr = new XMLHttpRequest();
        hr.open("GET", "../json/news.json", true);
        hr.setRequestHeader("Content-type", "application/json", true);
        hr.onreadystatechange = function() {
            if(hr.readyState == 4 && hr.status == 200) {
                var data = JSON.parse(hr.responseText);
                $('#newsDesc').append(data.news.description);
                $('#papersDesc').append(data.papers.description);
                $('#blogDesc').append(data.blog.description);
                $('#newsImg').append("<img src='"+data.news.imageUrl+"' alt='News'>");
                $('#papersImg').append("<img src='"+data.papers.imageUrl+"' alt='Papers'>");
                $('#blogImg').append("<img src='"+data.papers.imageUrl+"' alt='Blog'>");
                //$('#reportsTable tbody').append("<tr class='evenTr'><td>Dec</td><td>LLP</td><td>Done</td></tr>");
            }
        }
        hr.send(null);
        //results.innerHTML = "requesting...";
    }
    
    function ajax_get_jsonForCarousel(){
        var results = document.getElementById("results");
        var hr = new XMLHttpRequest();
        hr.open("GET", "../json/carousel.json", true);
        hr.setRequestHeader("Content-type", "application/json", true);
        hr.onreadystatechange = function() {
            if(hr.readyState == 4 && hr.status == 200) {
                var data = JSON.parse(hr.responseText);
                $('#carousel_ul').append("<li><a href='#'><img src='"+data.slides1.imageUrl+"'/></a><div class='SlideShowDateTxt'>"+data.slides1.date+"</div><div class='slideShowTitle'>"+data.slides1.title+"</div></li>");
                $('#carousel_ul').append("<li><a href='#'><img src='"+data.slides2.imageUrl+"'/></a><div class='SlideShowDateTxt'>"+data.slides2.date+"</div><div class='slideShowTitle'>"+data.slides2.title+"</div></li>");
                $('#carousel_ul').append("<li><a href='#'><img src='"+data.slides3.imageUrl+"'/></a><div class='SlideShowDateTxt'>"+data.slides3.date+"</div><div class='slideShowTitle'>"+data.slides3.title+"</div></li>");
            }
        }
        hr.send(null);
    }
        
    function ajax_get_jsonForReports(){
        var results = document.getElementById("results");
        var hr = new XMLHttpRequest();
        hr.open("GET", "../json/reports.json", true);
        hr.setRequestHeader("Content-type", "application/json", true);
        hr.onreadystatechange = function() {
            if(hr.readyState == 4 && hr.status == 200) {
                var data = JSON.parse(hr.responseText);
                
                $('#reportsTable tbody').append("<tr class='oddTr'><td>Jan</td><td>"+data.Jan.task+"</td><td>"+data.Jan.status+"</td></tr>");
                $('#reportsTable tbody').append("<tr class='evenTr'><td>Feb</td><td>"+data.Feb.task+"</td><td>"+data.Feb.status+"</td></tr>");
                $('#reportsTable tbody').append("<tr class='oddTr'><td>March</td><td>"+data.March.task+"</td><td>"+data.March.status+"</td></tr>");
                $('#reportsTable tbody').append("<tr class='evenTr'><td>April</td><td>"+data.April.task+"</td><td>"+data.April.status+"</td></tr>");
                $('#reportsTable tbody').append("<tr class='oddTr'><td>May</td><td>"+data.May.task+"</td><td>"+data.May.status+"</td></tr>");
                $('#reportsTable tbody').append("<tr class='evenTr'><td>June</td><td>"+data.June.task+"</td><td>"+data.June.status+"</td></tr>");
                $('#reportsTable tbody').append("<tr class='oddTr'><td>July</td><td>"+data.July.task+"</td><td>"+data.July.status+"</td></tr>");
                $('#reportsTable tbody').append("<tr class='evenTr'><td>Aug</td><td>"+data.Aug.task+"</td><td>"+data.Aug.status+"</td></tr>");
                $('#reportsTable tbody').append("<tr class='oddTr'><td>Sept</td><td>"+data.Sept.task+"</td><td>"+data.Sept.status+"</td></tr>");
               $('#reportsTable tbody').append("<tr class='evenTr'><td>Oct</td><td>"+data.Oct.task+"</td><td>"+data.Oct.status+"</td></tr>");
                $('#reportsTable tbody').append("<tr class='oddTr'><td>Nov</td><td>"+data.Nov.task+"</td><td>"+data.Nov.status+"</td></tr>");
                $('#reportsTable tbody').append("<tr class='evenTr'><td>Dec</td><td>"+data.Dec.task+"</td><td>"+data.Dec.status+"</td></tr>");
            }
        }
        hr.send(null);
        //results.innerHTML = "requesting...";
    }

function validate()
{
 
   if(document.myForm.Name.value == "")
   {
     alert("Please provide your name!");
     document.myForm.Name.focus() ;
     return false;
   }
   if(document.myForm.email.value == "")
   {
     alert("Please provide your Email!" );
     document.myForm.email.focus() ;
     return false;
   }
   if(document.myForm.telephone.value == "" ||isNaN(document.myForm.telephone.value ) ||
           document.myForm.telephone.value.length != 10 )
   {
     alert("Please provide a your phone in the format ##########." );
     document.myForm.telephone.focus() ;
     return false;
   }
  if(document.myForm.dob.value != "") 
  {
      if(regs = document.myForm.dob.value.match(re))
       {
        // day value between 1 and 31
        if(regs[1] < 1 || regs[1] > 31)
         {
          alert("Invalid value for day: " + regs[1]);
          document.myForm.dob.focus();
          return false;
        }
        // month value between 1 and 12
        if(regs[2] < 1 || regs[2] > 12)
         {
          alert("Invalid value for month: " + regs[2]);
          document.myForm.dob.focus();
          return false;
        }
        // year value between 1902 and 2013
        if(regs[3] < 1902 || regs[3] > (new Date()).getFullYear())
         {
          alert("Invalid value for year: " + regs[3] + " - must be between 1902 and " + (new Date()).getFullYear());
         document.myForm.dob.focus();
          return false;
        }
      }
       else 
      {
        alert("Invalid date format: " +  document.myForm.dob.value);
        document.myForm.dob.focus();
        return false;
      }
    }
   if(document.myForm.dob.value == "") 
    {
        alert("Please provide your Date of Birth!" );
      document.myForm.dob.focus() ;
       return false;
    }

   return( true );
}

ajax_get_jsonForCarousel();
ajax_get_jsonForNav();
ajax_get_jsonForActivities();
ajax_get_jsonForReports();