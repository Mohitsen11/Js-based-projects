 //Variables

 const openBtn = document.querySelector(".open-btn");
 const modalContainer = document.querySelector(".answer");
 const closeBtn = document.querySelector(".close-btn");

 //Add Eventlistener

 openBtn.addEventListener("click", function () {
   modalContainer.style.display = "block";
 });

 closeBtn.addEventListener("click", function () {
   modalContainer.style.display = "none";
 });

 window.addEventListener('click' , function(e){
   if(e.target === modalContainer){
       modalContainer.style.display = 'none';
   }
 })