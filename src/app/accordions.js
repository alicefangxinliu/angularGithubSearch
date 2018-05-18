var accordions = 
    document.getElementsByClassName("accordion");

    console.log ("The script is working");
for (var i = 0; i <accordions.length; i++){
    accordions[i].onclick = function togglePanel(){
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            //accordion is open, we need to close it
            content.style.maxHeight = 0;
        }
        else{
            //it is closed
            content.style.maxHeight=content.scollHeight+ "px";
        }
    }
}