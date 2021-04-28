var buttonedit=document.getElementById("edit");
buttonedit.addEventListener('click',function(){
    alert('Assignment has been edited');
});
var buttonupdate=document.getElementById("update");
buttonupdate.addEventListener('click',function(){
    alert('Assignment has been updated');
});

document.getElementById('myForm').addEventListener('submit',function(event){
    var assignmenttitle=document.getElementById("assignmenttitle");
    var assignmentdesc=document.getElementById("assignmentdesc");
    var assignmentsubdate=document.getElementById("assignmentsubdate");
    var oralmark=document.getElementById("oralmark");
    var totalmark=document.getElementById("totalmark");
    var emptyMessage="Please fill all the blanks";
    if(assignmenttitle===""||assignmentdesc===""||assignmentsubdate===""||oralmark===""||totalmark===""){
        document.getElementById('emptyinputs').innerHTML=emptyMessage;
        event.preventDefault();
    }else{
        document.getElementById('emptyinputs').innerHTML="";
        alert("Assignment has been added");
    }
});

