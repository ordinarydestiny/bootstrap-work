// 导航栏的样式操作
let nav = $('#wrap nav>.nav>li');
// console.log(nav)
// 获取视图信息
let show_message = $('#wrap .message .show #rotation-content .content_all')
// 默认从索引值为0开始
let num = 0;
// 悬浮每一个跳转到当前所需要的
nav.each((index,item) => {
    item.onmouseover = () => {
        // 前面显示的文字
        if(index < 4){
            $(nav[num]).toggleClass('add_color');
            num = index
            $('#wrap .message .show #rotation-content .content_all').css({transform:`translateX(calc(${index} * (-100% / 4))`});
            $(nav[num]).toggleClass('add_color');
            $('.text').css({transform:`translateX(calc(${num} * (-100% / 4))`});
            // 清空定时器
            clearInterval(time_message)
            // 重新加载定时器
            time_message = setInterval(()=>{
                show();
            },3000)
        }else{
            // 点击更多则跳转另一个页面
            // 这里默认不跳转
        }
    }
});

// 每次也是默认向右
let time_message = setInterval(()=>{
    show();
},3000)
// 右侧定时器
function show(){
    // 移除对应样式
    $(nav[num]).toggleClass('add_color');
    num++
    // 判断极端情况
    if(num > 3){
        num = 0
    }
    // 添加对应样式
    $('#wrap .message .show .content .content_all').css({transform:`translateX(calc(${num} * (-100% / 4))`});
    $('.text').css({transform:`translateX(calc(${num} * (-100% / 4))`});
    $(nav[num]).toggleClass('add_color');
}


// 移入暂停
$('.content_all').mouseenter(() => {
    // 清空定时器
    clearInterval(time_message)
})  

// 继续轮播
$('.content_all').mouseleave(() => {
    // 重新加载定时器
    time_message = setInterval(()=>{
       show();
    },3000)
})  


// 主页功能
let btnLogin = document.querySelector('#go-login')
$('#go-login').click(() => {
    location.href = './login.html'
})

// 赛事轮播
// 默认第一个
let eventIndex = 0
let eventShow = document.querySelectorAll('#title>a')
eventShow.forEach((item,index) => {
    item.onmouseenter = () => {
        eventShow[eventIndex].classList.remove('a-hover')
        eventIndex = index
        eventShow[eventIndex].classList.add('a-hover')
    }
    
})
$('#title>a').each((index,item) => {
    $(item).mouseenter(() => {
        $('#event-show').css({
            transform:`translateX(-${764.97 * index}px)`,
        })
    })
})