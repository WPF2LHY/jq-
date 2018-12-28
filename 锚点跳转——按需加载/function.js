 /*循环*/
      function each(num,callback)
      {
      for(var i=0;i<num;i++)
      {
        callback(i);
      }
   }

   /*最大值*/
   function arrVal(a,type)
   {
     var type=type ||'max';
      var maxs=a[0];
   for(var i=0;i<a.length;i++)
   { 
      if(type=='max')
      {
        if(maxs<a[i])
        {
         maxs=a[i]
         }
      }
      else if(type=='min')
      {
          if(maxs>a[i])
          {
            maxs=a[i]
            }
      }
     
    }
    return maxs;
  }

/*数组排序*/
function arrOrder(arr,type)
{
  var type=type||'min';
  for(var i=0;i<arr.length;i++)
  {
    for(var j=i+1;j<arr.length;j++)
    {
      if(type=='min')
      {
        if(arr[i]>arr[j])
        {
             var temp=arr[i];
             arr[i]=arr[j];
             arr[j]=temp;
           }
      }
      else if(type=='max')
      {
        if(arr[i]<arr[j])
        {
             var temp=arr[i];
             arr[i]=arr[j];
             arr[j]=temp;
        }
      }         
    }
  }
  return arr;
}

// 第二种方法
 function arrSort(arr,callback)
 {
  for(var i=0;i<arr.length;i++)
  {
     for(var j=i+1;j<arr.length;j++)
     {
         if(callback(arr[i],arr[j]))
         {
            var temp=arr[i];
             arr[i]=arr[j];
             arr[j]=temp;
         }
     }
  }
  return arr;
 }

// 删除指定值
function arrDel(arr,val)
{
  var newarr=[];
  for(var i=0;i<arr.length;i++)
  {
         if(arr[i]!=val)
      {
          newarr.push(arr[i])
      }
  }
   return newarr;
}

// 删除重复值
function delRepeat(arr)
{
  var newarr=[]
  for(var i=0;i<arr.length;i++)
  {
    var flag=true;
    for(var j=i+1;j<arr.length;j++)
    {
      if(arr[i]==arr[j])
      {
        flag=false;
        break;
      }
    }
    if(flag)
    {
      newarr.push(arr[i]);
    }
  }
  return newarr;
 }
// dom中classname的兼容函数
function getClass(className,range){
      var range=range?range:document;
      if(document.getElementsByClassName){
        return range.getElementsByClassName(className)
      }else{
        var arr=[];
        var all=range.getElementsByTagName('*');
        for(var i=0;i<all.length;i++){
          if(checkClass(all[i].className,className)){
            arr.push(all[i]);
          }
        }
      }
      return arr;
  }
  function checkClass(obj,classname){
    var arr=obj.split(" ");
    for(var i=0;i<arr.length;i++){
      if(arr[i]==classname){
        return true;
      }
    }
    return false;
  }
  
  /*
       getContent(obj,[val])   获取或者设置对象的文本
       obj  指定的对象
       val  要设置的内容
  */
  function getContent(obj,val){
      if(obj.innerText){
        if(val==undefined){
          return obj.innerText;
        }else{
          obj.innerText=val;
        }
      }else{
        if(val==undefined){
          return obj.textContent;
        }else{
          obj.textContent=val;
        }
      }
    }

   /* getStyle(obj,attr);
  获取指定元素指定的样式
  obj   指定的元素
  attr  指定的样式
  */
  function getStyle(obj,attr){
        if(obj.currentStyle){
          return obj.currentStyle[attr];
        }else{
          return getComputedStyle(obj,null)[attr];
        }
      }

  /*
    $("")
    .one  获取类名
    #one  获取id
    div   获取标签
  // */
  // <div>

  function $(selecter,ranges){
    // 判断首字符  .  #
    // 正则表达式 /^[a-z][a-z1-6]{0,10}$/.test(selecter)
    var ranges=ranges?ranges:document;
    if(selecter.charAt(0)=="."){  
        return getClass(selecter.slice(1),ranges);
    }else if(selecter.charAt(0)=="#"){
    return document.getElementById(selecter.slice(1))
    }else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
   return ranges.getElementsByTagName(selecter);
    }
    else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
      return document.createElement(selecter.slice(1,-1));
    }
  }
/*getChilds(obj,[type]) 获取obj的元素节点
type  true 元素节点 false 有意义的文本
1.先获取obj的子节点
2.遍历 nodeType==1*/
function getChilds(obj,type) {
  var child = obj.childNodes;
  var type = type?type:false;
  var arr = [];
  if (type == true) {
    for (var i = 0; i < child.length; i++) {
      //不仅仅获取元素节点，还要获得有意义的文本
      if (child[i].nodeType == 1 || (child[i].nodeType == 3 && !(/^\s+$/.test(child[i].nodeValue)))) {
        arr.push(child[i]);
      }
    }
  } else if (type == false) {

    for (var i = 0; i < child.length; i++) {
      //只获取元素节点
      if (child[i].nodeType == 1) {
        arr.push(child[i]);
      }
    }
  }

  return arr;
}

/*获取第一个子节点 最后一个子节点 任意一个子节点*/
function firstChild(obj) {
  return getChilds(obj)[0];
}

function lastChild(obj) {
  var len = getChilds(obj).length;
  return getChilds(obj)[len - 1];
}

function ryChild(obj, num) {
  var len = getChilds(obj).length;
  if (num >= len) {
    return 'error';
  }
  return getChilds(obj)[num];
}


/*
  getNext1(obj);//获取下一个元素节点
*/
function getNext1(obj){
  var next=obj.nextSibling;
  if(next==null){
    return false;
  }
  while(next.nodeType==3||next.nodeType==8){
    next=next.nextSibling;
    if(next==null){
      return false;
    }
    
  }
  return next;
}

/*获取下一个元素节点或者有意义的文本*/
function getNext2(obj){
  var next=obj.nextSibling;
  if(next==null){
    return false;
  }
  while((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8){
    next=next.nextSibling;
    if(next==null){
      return false;
    }
  }
  return next;
}

function getNext(obj,type){
  var type=type?type:false;
  if(type==false){
    return getNext1(obj);
  }
  else if(type==true){
    return getNext2(obj);
  }
  return next;
}
/* 
  insertAfter(newobj,obj)//往一个节点的前面插一个对象
*/
function insertAfter(newobj,obj,type){
  var type=type?type:false;
  //获取obj的父元素
  var parent=obj.parentNode;
  //pos=getNext(obj);
  var pos=getNext(obj,type);
  //false appendChild  true insertBefore
  if(!pos){
    parent.appendChild(newobj);
  }
  else{
    parent.insertBefore(newobj,pos);
  }

}

/*线条特效*/
 function line(obj) {
  for (var i = 0; i < obj.length; i++) {
    obj[i].index = i;
    var widths = obj[i].offsetWidth; //获取宽度
    var heights = obj[i].offsetHeight;
    obj[i].onmouseover = function() {
      var top = $(".top", obj[this.index])[0];
      var bottom = $(".bottom", obj[this.index])[0];
      var left = $(".left", obj[this.index])[0];
      var right = $(".right", obj[this.index])[0];
      animate(top, {
        width: widths
      });
      animate(bottom, {
        width: widths
      });
      animate(left, {
        height: heights
      });
      animate(right, {
        height: heights
      });
    }
    obj[i].onmouseout = function() {
      var top = $(".top", obj[this.index])[0];
      var bottom = $(".bottom", obj[this.index])[0];
      var left = $(".left", obj[this.index])[0];
      var right = $(".right", obj[this.index])[0];
      animate(top, {
        width: 0
      });
      animate(bottom, {
        width: 0
      });
      animate(left, {
        height: 0
      });
      animate(right, {
        height: 0
      });
    }
  }
 }

// obi  对象。
// attr  属性

  // function animate(obj,attrobj,dur,callback){
  //   var time=0;
  //   var t=setInterval(function(){
  //     for(var i in attrobj){
  //       var cha=attrobj[i]-parseInt(getStle(obj,i))

  //       var speed=cha*60/dur;
  //       if(time>=dur){
  //         clearInterval(t)
  //         if(callback){
  //           callback();
  //         }
  //       }
  //       obj.style[i]=parseInt(getStyle(obj,i)+"px")
  //     }
  //     time+=60;
  //   },50)
  // }


