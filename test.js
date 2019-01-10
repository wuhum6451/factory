function test()
{
	var xhr=new XMLHttpRequest();
	xhr.open("GET","./test.txt");
	xhr.onload=function(){
	    console.log(xhr.responseText);
	}
	//xhr.send();
}