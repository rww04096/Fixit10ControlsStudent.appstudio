let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]
let all = exercises.concat(coreExercises)
favExercises.onshow=function(){
  selExercises.clear()   
    for (i = 0; i <= all.length - 1; i++) {
        selExercises.addItem(all[i])
}
}
btnSubmit1.onclick=function(){
  if (selExercises.value == "situps,plank") {
    NSB.MsgBox("You chose situps and plank - the correct exercises")
  } else {
    NSB.MsgBox("You did not pick the two core exercises")
  }
}
btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}