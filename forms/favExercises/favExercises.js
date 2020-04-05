var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
selExercises.clear()   
   
    for (i = 0; i <= exercises.length - 1; i++) 
        selExercises.addItem(exercises[i])
}

btnSubmit1.onclick=function(){
  let message = " " 
  for (i = 0; i <= selExercises.text.length - 1; i++)
     message = """ + selExercises.text[i] + """ + ", "
  
  if message = coreExercises {
    NSB.MsgBox("You chose the situps and planks - those are the two core exercises")
  } else {
    NSB.MsgBox("You did not pick the two core exercises")
  }
}