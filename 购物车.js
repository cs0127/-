var checkWhole = document.getElementById("checkWhole");
var checkItems = document.getElementsByName("checkItems");
checkWhole.onclick = function(){
    if (checkWhole.checked == true) {
        for (i = 0; i < checkItems.length; i++) {
            checkItems[i].checked = true;
        }
    }else {
        for (i = 0; i < checkItems.length; i++) {
            checkItems[i].checked = false;
        }
    }
}