var buttonedit=document.getElementById("edit");
buttonedit.addEventListener('click',function(){
    alert('Assignment has been edited');
});
var buttonupdate=document.getElementById("update");
buttonupdate.addEventListener('click',function(){
    alert('Assignment has been updated');
});
document.getElementById('emptyinputs').addEventListener('submit',function(){
    var student=document.getElementById('student');
    var coursetitle=document.getElementById('coursetitle');
    var assignmenttitle=document.getElementById('assignmenttitle');
    var emptyMessage="Please fill all the blanks";
    if(student===""||coursetitle===""||assignmenttitle===""){
        document.getElementById('emptyinputs').innerHTML=emptyMessage;
        event.preventDefault();
    }else{
        document.getElementById('emptyinputs').innerHTML="";
        alert("Form has been updated");
    }
});