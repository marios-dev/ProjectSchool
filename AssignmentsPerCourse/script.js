var buttonedit=document.getElementById("edit");
buttonedit.addEventListener('click',function(){
    alert('Assignment has been edited');
});
var buttonupdate=document.getElementById("update");
buttonupdate.addEventListener('click',function(){
    alert('Assignment has been updated');
});
document.getElementById('emptyinputs').addEventListener('submit',function(event){
    var assignmenttitle=document.getElementById('assignmenttitle');
    var coursetitle=document.getElementById('coursetitle');
    var emptyMessage="Please fill the blanks";
    if(assignmenttitle===""||coursetitle===""){
        document.getElementById('emptyinputs').innerHTML=emptyMessage;
        event.preventDefault();
    }else{
        document.getElementById('emptyinputs').innerHTML="";
        alert('Form has been added');
    }
});
