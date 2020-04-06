hmbMenu.onclick=function(s){    
    if (typeof(s) == "object")
       return
    switch(hmbMenu.selection) {
        case 'Login':
            ChangeForm(loginCU);
            break;
        case 'Favorite Foods':
            ChangeForm(favFoods);
            break;
        case 'Dessert Voting':
            ChangeForm(dessertVoting);
            break;
        case 'Describe You':
            ChangeForm(describeYou);
            break;
        case 'Fav Exercises':
            ChangeForm(favExercises);
            break;
        }
}
