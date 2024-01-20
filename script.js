function mydata()
{
    a=document.getElementById("clientname").value;
    b=document.getElementById("clientemail").value;
    if(a==""|| b =="")
    {
        alert("this field is mandatory")
    return false;
    }
    else
    return true;

}
console.log('script running');
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('sidebar').classList.toggle('sidebargo');
    if (document.querySelector('.sidebar').classList.contains('sidebargo')){
         document.querySelector('.ham').style.display = 'inline'
         document.querySelector('.cross').style.display = 'none'
}
else {
        document.querySelector('.ham').style.display = 'none'
        document.querySelector('.cross').style.display = 'inline'
    }
})
