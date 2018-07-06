function GoToPage(form)
{
var loop;

for(loop=0; loop < 9; loop++)
    {
    
      if(document.listofURLs.name[loop].selected== true)

    location.href=document.listofURLs.name[loop].value;
   <!-- document.write("<INPUT TYPE=button value="Go There" name="Go There" onClick="URL:" + location.href>-->
    }
}

