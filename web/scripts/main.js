let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var btn = document.getElementById("bt1");  
    btn.onclick =function(){  
        alert("你点击了按钮哦！");  
	}

var btn = document.getElementById("btn_1");  
    btn.onclick =function(){  
        var myName = prompt('请输入你的名字。'); 
		
		if(!(!myName || myName === null)){
			let myHeading = document.querySelector('h1');
			myHeading.textContent = myName;
		}
	}
	
	
var img1 = document.getElementById("img1");
	img1.onclick = function(){
		var mySrc = img1.getAttribute("src");
		if(mySrc === "ico/1.bmp")
		{
			img1.setAttribute("src", "ico/2.bmp");
		}
		else
		{
			img1.setAttribute("src", "ico/1.bmp");
		}
	}
	

	
