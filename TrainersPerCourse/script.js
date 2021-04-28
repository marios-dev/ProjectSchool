var buttonedit=document.getElementById("edit");
buttonedit.addEventListener('click',function(){
    alert('Form has been edited');
});
var buttonupdate=document.getElementById("update");
buttonupdate.addEventListener('click',function(){
    alert('Form has been updated');
});
document.getElementById('myForm').addEventListener("submit",function(event){
    var trainerfirst=document.getElementById('trainerfirst');
    var trainerlast=document.getElementById('trainerlast');
    var coursetitle=document.getElementById('coursetitle');
    var emptyMessage="Please fill all the blanks";
    if(trainerfirst===""||trainerlast===""||coursetitle===""){
        document.getElementById("emptyinputs").innerHTML=emptyMessage;
        event.preventDefault();
    }else{
        document.getElementById("emptyinputs").innerHTML="";
        alert("Form has been submitted")
    }
})