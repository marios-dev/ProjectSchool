var buttonedit=document.getElementById("edit");
buttonedit.addEventListener('click',function(){
    alert('Course has been edited');
});

var buttonupdate=document.getElementById("update");
buttonupdate.addEventListener('click',function(){
    alert('Course has been updated');
});
document.getElementById('myForm').addEventListener('submit',function(event){
    var coursetitle=document.getElementById('coursetitle');
    var coursestream=document.getElementById('coursestream');
    var coursetype=document.getElementById('coursetype');
    var startdate=document.getElementById('startdate');
    var enddate=document.getElementById('enddate');
    var emptyMessage="Please fill all the blanks";
    if(coursetitle===""||coursestream===""||coursetype===""|| startdate===""||enddate===""){
        document.getElementById('emptyinputs').innerHTML=emptyMessage;
        event.preventDefault();
    }else{
        document.getElementById('emptyinputs').innerHTML="";
        alert("Course has been added");
    }
});