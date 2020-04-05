
btnFavExercises.onclick=function(){
  ChangeForm(favExercises)
}

rdoPersonality.onclick=function(){

   lblReturn.textContent = (`I agree- you are a ${$("input[name=rdoPersonality]:checked").prop("value")} person`)
}