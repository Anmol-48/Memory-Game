var images=["one","two","three","four","five","six","seven","eight"];
var count=[0,0,0,0,0,0,0,0];
var check=0;
var f=null;
var s=null;

var box=document.getElementsByTagName("img");
for(var i=0;i<16;i++)
{
    var rad=Math.floor(Math.random()*8);
    if(count[rad]<2){
        box[i].setAttribute("data-front",("public/"+images[rad]+".png"));
        console.log(images[rad]+".png"," ",i);
        count[rad]+=1;
    }
    else{
        i--;
    }
}
Array.from(box).forEach(b => {
   b.addEventListener("click",()=>{
        check++;
        var set=b.getAttribute("data-front");
        b.setAttribute("src",set);
        if(check==1)
        {
            f=b;
        }
        else{
            check=0;
            s=b;
            if(f.getAttribute("src")!=s.getAttribute("src"))
            {
                setTimeout(function() {
                    f.setAttribute("src", "question-sign.png");
                    s.setAttribute("src", "question-sign.png");
                }, 500);
            }
        }
   }); 
});
