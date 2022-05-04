function isAlphabet( x)
{
	return ( (x >= 'A' && x <= 'Z') ||
			(x >= 'a' && x <= 'z') );
}
function swap(str,a,b)
{
	var c="";
	for(var i=0;i<str.length;i++)
	{
		if(i==a)
		c= c+ str[b];
		else
			if(i==b)
				c=c+str[a];
			else
			c=c+str[i];
			
	}
	return c;
}
	

function reverse( str)
{
	// Initialize left and right pointers
	var r = str.length - 1, l = 0;

	// Traverse string from both ends until
	// 'l' and 'r'
	while (l < r)
	{
		// Ignore special characters
		if (!isAlphabet(str[l]))
			l++;
		else if(!isAlphabet(str[r]))
			r--;

		else // Both str[l] and str[r] are not spacial
		{
			str=swap(str,l, r);
			l++;
			r--;
		}
	}
	document.write("Output string: "+ str +"<br>");
}


	var str= "B,!,F,D,C,E,A,2";
	document.write( "Input string: " + str +"<br>");
	reverse(str);