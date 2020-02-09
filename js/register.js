function checkTel(){
	var textTel=document.getElementById("telBox").value;
	if(textTel=="请输入手机号码"||textTel==""){alert("手机号不能为空！");}
		else if (textTel.length!=11) {alert("请输入正确的手机号！");}
		    else {alert("注册成功！");window.open("homePage.html","_top");}
}
function fade()
{
	var textTel=document.getElementById("telBox").value;
	if(textTel=="请输入手机号码")document.getElementById("telBox").value="";
}
function appear()
{
	if(document.getElementById("telBox").value=="")document.getElementById("telBox").value="请输入手机号码";
}