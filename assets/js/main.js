window.addEventListener("load", function(){
    
    let title = this.document.querySelectorAll(".title");
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
        if(isClicked === true && rembemer == this.parentElement.parentElement.lastElementChild.innerHTML)
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
            rembemer = this.parentElement.parentElement.lastElementChild.innerHTML;
            
            font = this;
    
            msg = this.parentElement.parentElement.lastElementChild;
            arrow = this.parentElement.lastElementChild;

            // console.log(arrow);

            msg.style.height = "40px"; //22px
            arrow.style.transform = "rotateZ(180deg)";
            this.style.color = "#1E1F36";
            this.style.fontWeight = "900";
            setTimeout(changeVisibility(isClicked, msg), 100);
            
            isClicked = true;
        }
        
        // console.log(this);

        // msg.style.transform = "translateY(0px)";
        
    }

    function changeVisibility(visible, element)
    {
        return visible === true ? element.classList.add("visible") : element.classList.remove("visible");
    }

});