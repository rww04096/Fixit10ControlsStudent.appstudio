var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']
dessertVoting.onshow=function(){
    drpDesserts.clear()   
    for (i = 0; i <= dessertList.length - 1; i++) 
        drpDesserts.addItem(dessertList[i])
}
drpDesserts.onclick=function(x){
    if (typeof(x) == "object")   
      return                    
    else {  
       drpDesserts.value = x  
    lblReply.value = (`You picked ${x}- that is a great choice`)
    }
}
btnDescribeYou.onclick=function(){
  ChangeForm(describeYou)
}