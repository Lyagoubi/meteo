  
	  	function showCity(sel)
	  	{
	  		
	  		

			var opt=sel.getElementsByTagName("option" );
            
            for (var i=0; i<opt.length; i++) {
              
              var x=document.getElementById(opt[i].value);
              if (x) x.style.display="none";
            
            }
            var cat = document.getElementById(sel.value);
            if (cat) cat.style.display="block";
        }
	  			
	  		

	  		

	  		
	  		
