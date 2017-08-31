$(function(){
	$(document).ready(function(){
			var $tab_li = $('.topWrap ul li');
			$tab_li.hover(function(){
				$(this).addClass('cur').siblings().removeClass('cur');
			});	
		});

});


function test1 () {
	var tempStr = document.getElementById('testA').value;
	if (tempStr === "用户名") {
		document.getElementById('testA').value = "";
	}
}
function test2 () {
	var tempStr = document.getElementById('testA').value;
	if (tempStr === "") {
		document.getElementById('testA').value = "用户名";
	}
}

function test3 () {
	var tempStr = document.getElementById('testB').placeholder;
	if (tempStr === "密码") {
		document.getElementById('testB').placeholder = "";
	}
}
function test4 () {
	var tempStr = document.getElementById('testB').placeholder;
	if (tempStr === "") {
		document.getElementById('testB').placeholder = "密码";
	}
}

function test5 () {
	var tempStr = document.getElementById('testC').value;
	if (tempStr === "输入您的手机号码") {
		document.getElementById('testC').value = "";
	}
}
function test6 () {
	var tempStr = document.getElementById('testC').value;
	if (tempStr === "") {
		document.getElementById('testC').value = "输入您的手机号码";
	}
}

function test7 () {
	var tempStr = document.getElementById('testD').value;
	if (tempStr === "输入手机验证码") {
		document.getElementById('testD').value = "";
	}
}
function test8 () {
	var tempStr = document.getElementById('testD').value;
	if (tempStr === "") {
		document.getElementById('testD').value = "输入手机验证码";
	}
}

function test9 () {
	var tempStr = document.getElementById('testE').placeholder;
	if (tempStr === "输入您的密码") {
		document.getElementById('testE').placeholder = "";
	}
}
function test10 () {
	var tempStr = document.getElementById('testE').placeholder;
	if (tempStr === "") {
		document.getElementById('testE').placeholder = "输入您的密码";
	}
}

function testa () {
	var tempStr = document.getElementById('testF').value;
	if (tempStr === "真实姓名") {
		document.getElementById('testF').value = "";
	}
}
function testb () {
	var tempStr = document.getElementById('testF').value;
	if (tempStr === "") {
		document.getElementById('testF').value = "真实姓名";
	}
}

function testc () {
	var tempStr = document.getElementById('testG').value;
	if (tempStr === "QQ号码") {
		document.getElementById('testG').value = "";
	}
}
function testd () {
	var tempStr = document.getElementById('testG').value;
	if (tempStr === "") {
		document.getElementById('testG').value = "QQ号码";
	}
}

function teste () {
	var tempStr = document.getElementById('testH').value;
	if (tempStr === "微信号（发红包使用）") {
		document.getElementById('testH').value = "";
	}
}
function testf () {
	var tempStr = document.getElementById('testH').value;
	if (tempStr === "") {
		document.getElementById('testH').value = "微信号（发红包使用）";
	}
}

function testg () {
	var tempStr = document.getElementById('testI').value;
	if (tempStr === "推荐人ID") {
		document.getElementById('testI').value = "";
	}
}
function testh () {
	var tempStr = document.getElementById('testI').value;
	if (tempStr === "") {
		document.getElementById('testI').value = "推荐人ID";
	}
}


$(function(){
	
	jQuery(".slideTxtBox_product").slide();
	
	jQuery(".slideTxtBox_gener").slide({trigger:"click"});
	
	jQuery(".slideTxtBox_cate").slide({trigger:"click"});
});




