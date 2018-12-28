window.onload=function()
{
	var obj=document.body.scrollTop?document.body:document.documentElement.scrollTop;//兼容性调试
	var scrollTop=obj.scrollTop;

	// 获取浏览器可视高度
	var ch=document.documentElement.clientHeight;
	var floor=$(".floor");
	var floorArr=[];
	
	for(var i=0;i<floor.length;i++)
		// 各个楼层距离页面顶端的距离
	{
		floorArr.push(floor[i].offsetTop);

	}
	// 楼层跳转
	// 滚动当前楼层对应的obj.onscrollTop

	var flag=true;  // 控制onscroll;
	var flag1=true;
	var item=$('.item');
	for(var i=0;i<item.length;i++)
	{
		item[i].index=i;
		item[i].onclick=function()
		{
			flag=false;
			for(var j=0;j<item.length;j++)
			{
				item[j].style.background="#666"
			}
				item[this.index].style.background="#"
			animate(document.body,{scrollTop:floorArr[this.index]},function(){flag=true;})
			animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){flag=true;})			
	}		
	}

	// 返回顶部


	// 获取当前滚轮滚动的距离
	window.onscroll=function()
	{//按需加载
		if(!flag) return;
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrollTop=obj.scrollTop;

	// 临界条件  可视窗口的高度+滚轮滚动的距离>=某个楼层的offsetTop
		for(var i=0;i<floorArr.length;i++)
		{
			if(ch+scrollTop>=floorArr[i]+200)
			{
			// 获取当前楼层下面的图片并且追加路径
			var imgs=$("img",floor[i]);
			for(var j=0;j<imgs.length;j++)
			{
				imgs[j].src=imgs[j].getAttribute("imgpath")
			}
		  }
		}

	// 楼层跳转滚动时按钮变色
		for(var i=0;i<floor.length;i++)
		{
			if(ch+scrollTop>=floorArr[i]+200)
			{
				for(var j=0;j<item.length;j++)
				{//获取当前楼层下的图片，追加路径
					item[j].style.background='#666'
				}
					item[i].style.background="red"

			}
			
		}
		// back 返回顶部
		var back=$('.back')[0]
		back.onclick=function()
		{
			animate(document.body,{scrollTop:0},function(){flag=true;})
			animate(document.documentElement,{scrollTop:0},  function(){flag=true;})
		}
		if(scrollTop>=floorArr[1]){
			back.style.display='block';
		}else{
			back.style.display='none';
		}

//出现搜索栏

  var search=$('.search')[0];
  if(scrollTop>=floorArr[1]){
  	animate(search,{top:0})
  }else{
  	animate(search,{top:-200})
  }

}

}
