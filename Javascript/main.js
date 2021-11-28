let s=0;

const text=document.querySelector(".text");
const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
   btn.addEventListener("click",function(e){
       const num=e.currentTarget.classList;
       if(num.contains("1")){
           s--;
       }
       else
          if (num.contains("2")) {
            s=0;
          }
          else
              if (num.contains("3")) {
            s++;
          }
        
        if(s>0){
           text.style.color="green";
        }
        if (s < 0) {
          text.style.color = "red";
        }
        if (s == 0) {
          text.style.color = "gray";
        }
        text.textContent=s;
       
       
   });
});