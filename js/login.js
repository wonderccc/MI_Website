function checkUserPsw()
{
	var textUser=document.getElementById("user").value;
	var textPsw=document.getElementById("psw").value;
	if(textUser=="邮箱/会员账号/手机号"||textUser==""){alert("用户名不能为空！");}
	else if(textUser.length<3){alert("用户名不符合规范！");}
	     else if(textPsw=="请输入密码"||textPsw==""){alert("密码不能为空！");}
	          else if(textPsw.length<8){alert("密码不符合规范！");}
	               else {alert("登录成功！");window.open("homePage.html","_top");}
}
function fade1()
{
	document.getElementById("user").value="";
}
function fade2()
{
	document.getElementById("psw").value="";
}
function appear()
{
	if(document.getElementById("user").value=="")document.getElementById("user").value="邮箱/会员账号/手机号";
	if(document.getElementById("psw").value=="")document.getElementById("psw").value="请输入密码";
}