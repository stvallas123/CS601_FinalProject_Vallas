let currentPanel = 0;

function MovePanel(direction)
{
    let panels = document.getElementsByClassName("panels");
    let nextPanel = currentPanel + direction;

    //wrap the panels 
    if (nextPanel < 0){
        nextPanel = 2;
    }
    else if (nextPanel > 2){
        nextPanel = 0;
    }

    panels[0].style.display = "none";
    panels[1].style.display = "none";
    panels[2].style.display = "none";

    panels[nextPanel].style.display = "block";
    currentPanel = nextPanel
}

function ready(fn){
    if (document.readyState!== 'loading'){
        fn();
    }
    else{
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    let panels = document.getElementsByClassName("panels");
    panels[0].style.display = "block";
    panels[1].style.display = "none";
    panels[2].style.display = "none";

})