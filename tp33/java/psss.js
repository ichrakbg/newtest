var nom = document.getElementById("nom");
var CIN = document.getElementById("cin");
var valider = document.getElementById("valider");

function checklength (value, tlength){
    if(value.length < tlength){
        return false;
    }
    else if (value.length > tlength){
        return false;
    }
    else{
        return true;
    }
}


valider.addEventListener('click', function(){
    if((nom.value== null || nom.value=="") ||(cin.value==null || cin.value=="")) {
        alert('Tous les champs doivent être remplis obligatoirement');
    }
    if(isNaN(cin.value)== true){
        alert('Ce champs doit être obligatoirement numérique');
    }
    if(checklength(cin.value,8)== false){
        alert('Ce champs doit comporter uniquement 8 chiffres');
    }
})