function submit_details()
{
        var name=document.getElementById("name").value;
        var mail=document.getElementById("mail").value;
        var subject=document.getElementById("subject").value;
        var comment=document.getElementById("comment").value;
   
        if(name,mail,subject,comment==null || name,mail,subject,comment=='')
        {
         alert('Please! Fill Required Information')
        }
        else
        {
         alert('Thank You!')
        }
}                     