var buttonedit=document.getElementById("edit");
buttonedit.addEventListener('click',function(){
    alert('Trainer has been edited');
});

var buttonupdate=document.getElementById("update");
buttonupdate.addEventListener('click',function(){
    alert('Trainer has been updated');
});
document.getElementById('myForm').addEventListener('submit',function(event){
    var trainerfirst=document.getElementById("trainerfirst");
    var trainerlast=document.getElementById("trainerlast");
    var subject=document.getElementById("subject");
    var emptyMessage="Please fill all the blanks";
    if(trainerfirst.value===""||trainerlast.value===""||subject.value===""){
      document.getElementById("emptyinputs").innerHTML=emptyMessage;
      event.preventDefault();  
    }else{
        document.getElementById("emptyinputs").innerHTML="";
        alert("Trainer has been added")
    }
});