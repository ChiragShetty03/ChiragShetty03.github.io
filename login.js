function validation(){
var name= document.getElementById("t2").value;
var email= document.getElementById("t1").value;
		
		
       
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if (name=='')
		{
			alert('Please enter your name');
			return false;
		}
		else if (!letters.test(name))
		{
			alert('Name field required only alphabet characters');
			return false;
		}
		else if (email=='')
		{
			alert('Please enter your user email id');
			return false;
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
			return false;
		}
		
		
		
		else
		{				                            
               alert('Thank You for Registration ');
			  return true;
		}
	}