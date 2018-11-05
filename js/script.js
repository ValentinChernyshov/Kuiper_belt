if (screen.width >= '1280') {
  document.getElementById("myBtn").addEventListener("click", openclose);    
    var menuState = 0
    function openclose(){
      if(menuState === 1){
         menuState = 0;
         document.getElementById("mySidenav").style.left = "0px";
         document.getElementById("main").style.marginLeft = "316px";
      }
      else {
         menuState = 1;
         document.getElementById("mySidenav").style.left= "-316px";
         document.getElementById("main").style.marginLeft = "0";
      }
    } 
} else if (screen.width >= '768') {
    document.getElementById("myBtn").addEventListener("click", openclose);    
    var menuState = 1
    function openclose(){
      if(menuState === 1){
         menuState = 0;
         this.style.left = "316px";
         document.getElementById("mySidenav").style.left = "0px";
//         document.getElementById("main").style.marginLeft = "316px";
      }
      else {
         menuState = 1;
         this.style.left = "0";
         document.getElementById("mySidenav").style.left = "-316px";
//         document.getElementById("main").style.marginLeft = "0";
      }
    } 
} else if (screen.width >= '200') {
      document.getElementById("myBtn").addEventListener("click", openclose);    
    var menuState = 1
    function openclose(){
      if(menuState === 1){
         menuState = 0;
         this.style.left = "75%";
         document.getElementById("mySidenav").style.left = "0px";
      }
      else {
         menuState = 1;
         this.style.left = "0";
         document.getElementById("mySidenav").style.left = "-316px";
      }
    } 
}






//submenu opening
$(".submenu").click(function(){
    $(this).find('ul').toggle();
    $(this).find('i').toggleClass("rotate");
});