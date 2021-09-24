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
            // msg.style.height = "0";
            // arrow.style.transform = "rotateZ(0deg)";
            // font.style.fontWeight = "500";
            // font.style.color = "";
            // setTimeout(changeVisibility(isClicked, msg), 100);
            changeCSStyle(msg, arrow, font, false);
        }
        if(isClicked === true && rembemer === this.parentElement.childNodes[3].innerHTML)
        {
            // msg.style.height = "0";
            // arrow.style.transform = "rotateZ(0deg)";
            // font.style.fontWeight = "500";
            // font.style.color = "";
            // setTimeout(changeVisibility(isClicked, msg), 100);
            isClicked = false
            changeCSStyle(msg, arrow, font, false);
        }
        else
        {
            font = this.firstElementChild;
            arrow = this.lastElementChild;
            msg = this.parentElement.childNodes[3];
            rembemer = this.parentElement.childNodes[3].innerHTML;
        
            // msg.style.height = "55px"; //22px
            // arrow.style.transform = "rotateZ(180deg)";
            // font.style.color = "#1E1F36";
            // font.style.fontWeight = "900";
            // setTimeout(changeVisibility(isClicked, msg), 100);
            
            isClicked = true;
            changeCSStyle(msg, arrow, font, isClicked);
        }
        
        
        
    }
    function changeVisibility(visible, element)
    {
        return visible === true ? element.classList.add("visible") : element.classList.remove("visible");
    }

    function changeCSStyle(message, arrow, font, isClicked)
    {
        if(isClicked === true)
        {
            message.style.height = "55px";
            arrow.style.transform = "rotateZ(180deg)";
            font.style.color = "#1E1F36";
            font.style.fontWeight = "900";
            setTimeout(changeVisibility(isClicked, message), 100);
                
            isClicked = true;
            return [message, arrow, font, isClicked];
        }
        else
        {
            message.style.height = "0";
            arrow.style.transform = "rotateZ(0deg)";
            font.style.color = "";
            font.style.fontWeight = "500";
            setTimeout(changeVisibility(isClicked, message), 100);

            isClicked = false
        }
    }
});