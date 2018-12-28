window.onload=function(){
  	//获取浏览器的可是高度 
  	var ch=document.documentElement.clientHeight;
  	// 各个楼层距离页面的距离
    var two=$(".two");
    var twoArr=[];
    for(var i=0;i<two.length;i++){
    	twoArr.push(two[i].offsetTop)

    }
    window.onscroll=function(){
     // 湖区滚轮滚动的距离
     var obj=document.body.scrollTop?document.body:document.documentElement.scrollTop;
     // 临界条件 可视窗口的高度+滚轮滚动距离>=某个楼层的offsetTOP
     var scrollTop=obj.scrollTop;

     for(var i=0;i<twoArr.length;i++){

     	if(ch+scrollTop>=twoArr[i]+300){


     		var imgs=$("img",two[i]);

     		for(var j=0;j<imgs.length;j++){

     			imgs[j].src=imgs[j].getAttribute("imgpath")

     		}
     	 }
       }

    }

}