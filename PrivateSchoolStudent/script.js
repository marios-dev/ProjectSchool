var buttonedit=document.getElementById("edit");
buttonedit.addEventListener('click',function(){
    alert('Student has been edited');
});

var buttonupdate=document.getElementById("update");
buttonupdate.addEventListener('click',function(){
    alert('Student has been updated');
});
document.getElementById('myForm').addEventListener('submit',function(event){
    var studentfirst=document.getElementById('studentfirst');
    var studentlast=document.getElementById('studentlast');
    var dob=document.getElementById('dob');
    var tuitionfees=document.getElementById('tuitionfees');
    var emptyMessage="Please fill all the blanks";
    if(studentfirst===""||studentlast===""||dob===""||tuitionfees===""){
        document.getElementById('emptyMessage').innerHTML=emptyMessage;
        event.preventDefault();
    }else{
        document.getElementById('emptyMessage').innerHTML="";
        alert("Student has been Added");
    }
});