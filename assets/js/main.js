window.addEventListener("load", function(){
    
    let title = this.document.querySelectorAll(".header-question"); //Da bi moglo da se klikne i na strelicu
    let isClicked = false;
    
    let rembemer = "" // Pamti string
    let font = "";
    let msg;
    let arrow;
    
    title.forEach(t => {
        t.addEventListener("click", showMsg);
    });
    
    
    function showMsg()
    {
        
        if(isClicked === true && rembemer !== this.parentElement.lastElementChild.innerHTML)
        {
            msg.style.height = "0";
            arrow.style.transform = "rotateZ(0deg)";
            font.style.fontWeight = "500";
            font.style.color = "";
            setTimeout(changeVisibility(isClicked, msg), 100);
        }
        if(isClicked === true && rembemer === this.parentElement.childNodes[3].innerHTML)
        {
            msg.style.height = "0";
            arrow.style.transform = "rotateZ(0deg)";
            font.style.fontWeight = "500";
            font.style.color = "";
            setTimeout(changeVisibility(isClicked, msg), 100);
            isClicked = false
        }
        else
        {
            font = this.firstElementChild;
            arrow = this.lastElementChild;
            msg = this.parentElement.childNodes[3];
            rembemer = this.parentElement.childNodes[3].innerHTML;
        
            msg.style.height = "55px"; //22px
            arrow.style.transform = "rotateZ(180deg)";
            font.style.color = "#1E1F36";
            font.style.fontWeight = "900";
            setTimeout(changeVisibility(isClicked, msg), 100);
            
            isClicked = true;
        }
        
        
        
    }
    function changeVisibility(visible, element)
    {
        return visible === true ? element.classList.add("visible") : element.classList.remove("visible");
    }
});