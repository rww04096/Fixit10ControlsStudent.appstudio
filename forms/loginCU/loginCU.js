req =
btnFavFoods.onclick=function(){
  ChangeForm(favFoods)
}
btnLogin.onclick=function(){
  req = Ajax("http://radlab.creighton.egu/appstudio/authLDAP.php", "POST", "j_username=" + inpNetID.value) 
  
  if (req.status == 200) {
    lblFailure.hidden = false
    lblFailure.value = "Your LDAP return code was " + req.responseText
    ChangeForm(favFoods)
 } else {
    lblFailure.hidden = false
    lblFailure.value = "Error: " + req.status
  }
}