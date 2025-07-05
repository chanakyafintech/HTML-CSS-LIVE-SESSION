var settingMenu = document.querySelector(".setting-menu");

function settingsMenuToggle(){
    settingMenu.classList.toggle("setting-menu-height");
    
}

var darkBtn = document.getElementById("dark-btn");
darkBtn.onclick = function() {
    document.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-theme");

     

};

