window.onload=function () {
    //购物车移入事件
    let shop=document.getElementsByClassName("shop")[0];
    let shopCarbg=shop.querySelector("a")
    console.log(shopCarbg)
    let trolley=document.getElementsByClassName("trolley")[0];
    let car=shop.querySelector(".icon-gouwuche")
    console.log(car)
    shop.onmouseenter=function () {
        trolley.style.height="98px"
        trolley.style.boxShadow="0 2px 10px rgba(0,0,0,0.15)"
        shopCarbg.classList.add("changcarbg")
        car.style.color="#ff6700"
    };
    shop.onmouseleave=function () {
        trolley.style.height=0;
        shopCarbg.classList.remove("changcarbg")
        car.style.color="#b0b0b0"
    };
    //顶部选项卡
    let bigbox=document.getElementsByClassName("bigbox")[0];
    let navitem=bigbox.getElementsByClassName("navitem");
    let knowmore=bigbox.getElementsByClassName("knowmore");
    for (let i=0;i<navitem.length;i++){
        navitem[i].onmouseenter=function () {
            for(let j=0;j<navitem.length;j++){
                knowmore[j].style.display="none";
            }
            knowmore[i].style.borderTop="1px solid #e0e0e0" ;
            knowmore[i].style.display="block";
            knowmore[i].style.boxShadow="0px 5px 11px -3px rgba(0,0,0,0.3)";
            knowmore[i].style.height="230px";
        };
        navitem[i].onmouseleave=function () {
            knowmore[i].style.height="0px";
            knowmore[i].style.borderTop="none" ;
        }
    }
    //侧选项卡移入效果
    let aside=document.getElementsByClassName("aside")[0];
    let li1=aside.getElementsByTagName("li");
    let cardright=aside.getElementsByClassName("cardright");
    for (let i=0;i<li1.length;i++){
        li1[i].onmouseenter=function () {
            li1[i].className="change";
            cardright[i].style.display = "block";
        };
        li1[i].onmouseleave=function () {
            li1[i].className="";
            cardright[i].style.display= "none";
        }
    }
    //搜索框js
    let searchbox=document.querySelector(".searchbox")
    let search=searchbox.querySelector(".search-text")
    let action=searchbox.querySelector(".action")
    let wordBg=searchbox.querySelector(".search-hot-words")
    let lis=searchbox.querySelector(".list")
    search.onfocus=function(){
        searchbox.style.borderColor="#ff6700"
        action.style.borderColor="#ff6700"
        lis.style.display="block"
        lis.style.border="1px solid #ff6700"
        wordBg.style.display="none"

    }
    search.onblur=function(){
        searchbox.style.borderColor="#E0E0E0"
        action.style.borderColor="#E0E0E0"
        lis.style.display="none"
        lis.style.border=0
        wordBg.style.display="block"
        search.value=""

    }






    //轮播图js
    let banner=document.getElementsByClassName("banner")[0];
    let list=banner.querySelectorAll(".waper a");
    let width=parseInt(getComputedStyle(banner,null).width);
    let uiprev=banner.querySelector(".uiprev");
    let uinext=banner.querySelector(".uinext");
    let button=banner.querySelectorAll(".btn");
    let now=0;
    let next=0;
    let t=setInterval(move,3000);
    let flag=true;
    function move() {
        next++;
        if(next==list.length){
            next=0;
        }
        button[now].classList.remove("changcolor");
        button[next].classList.add("changcolor");
        list[next].style.left=width+"px";
        animate(list[now],{left:-width});
        animate(list[next],{left:0},function () {
            flag=true;
        });
        now=next;
    }
    //移入轮播图停止
    banner.onmouseenter=function(){
        clearInterval(t);
    }
    //移出轮播图继续
    banner.onmouseleave=function () {
        t=setInterval(move,3000);
    }
    //轮播图后退
    function move1() {
        next--;
        if(next<0){
            next=list.length-1;
        }
        button[now].classList.remove("changcolor");
        button[next].classList.add("changcolor");
        list[next].style.left=-width+"px";
        animate(list[now],{left:width});
        animate(list[next],{left:0},function () {
            flag=true;
        });
        now=next;
    }
    //点击前进按钮
    uinext.onclick=function () {
        if(flag==false){
            return ;
        }
        /* if(next==list.length-1){
            return;
        } */
        flag=false;
        move();
    };
    //点击后退事件
    uiprev.onclick=function () {
        if(flag==false){
            return ;
        }
        /* if(next==0){
            return;
        } */
        flag=false;
        move1();
    };
    //点击按钮事件
    /*for(let i=0;i<button.length;i++){
        button[i].onclick=function () {
            button[now].classList.remove("changcolor");
            button[i].classList.add("changcolor");
            if(i>now){
                list[i].style.left=width+"px";
                animate(list[now],{left:-width});
                animate(list[i],{left:0});
                now=i;
            }
            else if(i<now){
                list[i].style.left=-width+"px";
                animate(list[now],{left:width});
                animate(list[i],{left:0});
                now=i;
                }
                else{
                    return;
            }
        };
    }*/
    button.forEach(function (element,index) {
        element.onclick=function () {
            button[now].classList.remove("changcolor");
            if(index>now){
                list[index].style.left=width+"px";
                animate(list[now],{left:-width});
                animate(list[index],{left:0});
                element.classList.add("changcolor");
                now=index;
            }
            else if(index<now){
                list[index].style.left=-width+"px";
                animate(list[now],{left:width});
                animate(list[index],{left:0});
                element.classList.add("changcolor");
                now=index;
            }
            else{
                element.style.background="#fff";
            }
        };
    });
    //闪购轮播图
    /*let shops=document.getElementsByClassName("shops")[0];
    console.log(shops);
    let moveGo=document.getElementsByClassName("moveGo");
    console.log(moreGo);
    let moveback=document.getElementsByClassName("moveback");
    console.log(moreback);
    let listwidth=parseInt(getComputedStyle(shops,null).width);
    console.log(listwidth);
    let times=0;
    moveGo[0].onclick=function () {
        times++;
        if(times==2){
            times=1;
        }
        shops.style.WebkitTransform=`translate(${-listwidth/2*times}px)`;

    };
    moveback[0].onclick=function () {
        times--;
        if(times==-1){
            times=0;
        }
        shops.style.WebkitTransform=`translate(${-listwidth/2*times}px)`;

    };*/
    //用封装函数实现  为你推荐的轮播图
    function shangou(value,num) {
        let milist=value.querySelector(".item");
        let width=parseInt(getComputedStyle(milist,null).width);
        let moveGo=value.querySelector(".moveGo");
        let moveback=value.querySelector(".moveback");
        let time=0;
        moveGo.onclick=function(){
            time++;
            if(time==num){
                time=num-1;
            }
            milist.style.WebkitTransform=`translate(${-width/num*time}px)`
        }
        moveback.onclick=function () {
            time--;
            if(time==-1){
                time=0;
            }
            milist.style.WebkitTransform=`translate(${-width/num*time}px)`
        }
    }
    //倒计时
    let tuijian=document.getElementsByClassName("tuijian")[0];
    shangou(tuijian,4);
    let flashshop=document.getElementsByClassName("flashshop")[0];
    shangou(flashshop,2);
    let countdown=flashshop.querySelector(".countdown");
    let span=countdown.querySelectorAll("span")
    function daojishi() {
        let nowTime=new Date();
        let futureTime=new Date(2018,7,10,21);
        let time1=nowTime.getTime();
        let time2=futureTime.getTime();
        let arr=[];
        //距离倒计时相差的秒数
        let times=Math.floor((time2-time1)/1000);
        let month=Math.floor(times/(30*24*60*60));
        // arr.push(month);
        times=times-(month*(30*24*60*60));
        let day=Math.floor(times/(24*60*60));
        // arr.push(day);
        times=times-(day*(24*60*60));
        let hour=Math.floor(times/(60*60));
        if(hour<10){
            hour="0"+hour;
        }
        arr.push(hour);
        times=times-(hour*(60*60));
        let minut=Math.floor(times/60);
        if(minut<10){
            minut="0"+minut;
        }
        arr.push(minut);
        times=times-(minut*(60));
        let s=Math.floor(times%60);
        if(s<10){
            s="0"+s;
        }
        arr.push(s);
        return arr;
    }
    let arr1=daojishi();
    TimeGo();
    setInterval(TimeGo,1000);
    function TimeGo(){
        let arr=daojishi();
        span.forEach(function (element,index) {
            element.innerText=arr[index];
        })
    }
    //封装函数实现家电，智能...的选项卡
    function Tabs(item) {
        let list=item.getElementsByTagName("li");
        let navunder=item.getElementsByClassName("navunder");
        for (let i=0;i<list.length;i++){
            list[i].onmouseenter=function(){
                for(var j=0;j<list.length;j++){
                    navunder[j].style.display="none";
                    list[j].className="";
                }
                navunder[i].style.display="block";
                list[i].className="changecolor";
            }
        }
    }
    //家电选项卡
    let item1=document.getElementsByClassName("homeelec")[0];
    Tabs(item1);
    //智能选项卡
    let item2=document.getElementsByClassName("AI")[0];
    Tabs(item2);
    //搭配选项卡
    let item3=document.getElementsByClassName("dapei")[0];
    Tabs(item3);
    //配件选项卡
    let item4=document.getElementsByClassName("peijian")[0];
    Tabs(item4);
    //周边选项卡
    let item5=document.getElementsByClassName("zhoubian")[0];
    Tabs(item5);

    //内容的轮播图
    let list1=document.querySelector(".content li");
    let list2=document.querySelectorAll(".content li")[1];
    let list3=document.querySelectorAll(".content li")[2];
    let list4=document.querySelectorAll(".content li")[3];
    function movess(value) {
        let wapper=value.querySelector(".wapper");
        let item=value.querySelectorAll(".item");
        let go=value.querySelector(".Go");
        let back=value.querySelector(".back");
        let btn=value.querySelector(".btn");
        let btns=value.querySelectorAll(".spot");
        let width=parseInt(getComputedStyle(wapper,null).width);
        let now=0;
        let next=0;
        let t=setInterval(move,2000);
        function move() {
            next++;
            if(next==item.length){
                next=0;
            }
            for(let i=0;i<item.length;i++){
                btns[i].style.background="#8F8D88";
            }
            item[next].style.left=width+"px";
            animate(item[now],{left:-width});
            animate(item[next],{left:0},function () {
                flag=true;
            });
            btns[next].style.background="#fff";
            now=next;
        }

        value.onmouseenter=function(){
            clearInterval(t);
        }

        value.onmouseleave=function () {
            t=setInterval(move,3000);
        }

        function move1() {
            next--;
            if(next<0){
                next=item.length-1;
            }
            for(let i=0;i<item.length;i++){
                btns[i].style.background="#8F8D88";
            }
            item[next].style.left=-width+"px";
            animate(item[now],{left:width});
            animate(item[next],{left:0},function () {
                flag=true;
            });
            btns[next].style.background="#fff";
            now=next;
        }

        go.onclick=function () {
            if(flag==false){
                return ;
            }
            if(next==item.length-1){
                return;
            }
            flag=false;
            move();
        };
        back.onclick=function () {
            if(flag==false){
                return ;
            }
            if(next==0){
                return;
            }
            flag=false;
            move1();
        };
        btns.forEach(function (element,index) {
            element.onclick=function () {
                for(let i=0;i<btns.length;i++){
                    btns[i].style.background="#8F8D88";
                }
                if(index>now){
                    item[index].style.left=width+"px";
                    animate(item[now],{left:-width});
                    animate(item[index],{left:0});
                    element.style.background="#fff";
                    now=index;
                }
                else if(index<now){
                    item[index].style.left=-width+"px";
                    animate(item[now],{left:width});
                    animate(item[index],{left:0});
                    element.style.background="#fff";
                    now=index;
                }
                else{
                    element.style.background="#fff";
                }
            };
        });
    }
    movess(list1);
    movess(list2);
    movess(list3);
    movess(list4);
    //侧选项卡移入事件
    let rightBar=document.querySelector(".rightBar");
    let li=rightBar.querySelectorAll("li");
    let tip=document.querySelectorAll(".tips");
    li.forEach(function (element,index) {
        element.onmouseenter=function () {
            for(let i=0;i<tip.length;i++){
                tip[i].style.display="none";
            }
            tip[index].style.display="block";
        }
        element.onmouseleave=function () {
            tip[index].style.display="none";
        }
    })
    let backtop=document.querySelector(".backtop");
    let Up=backtop.querySelector(".btn");
    Up.onclick=function () {
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }
    let jiadian=document.querySelector(".homeelec");
    let hight=jiadian.offsetTop;
    window.onscroll=function () {
        let scrollH=document.body.scrollTop||document.documentElement.scrollTop;
        if(scrollH>hight){
            animate(backtop,{display:"block"});
        }
        if(scrollH<hight){
            animate(backtop,{display:"none"});
        }
    }
};


