//获取元素
// 文本框
const tx = document.querySelector('#tx')
// 发布按钮
const button = document.querySelector('.wrapper button')
// 文字信息
const text = document.querySelector('.text')
// 当前时间
const time = document.querySelector('.time')
// 发布内容区域
const list = document.querySelector('.list')
// 文字0/200的区域
const total = document.querySelector('.total')

//函数功能：发布评论
function fabu() {
    //检测用户输入的内容左右两端是否带有空格，若有空格，发布时自动取消左右两端的空格
    //若用户发布的内容为空，则自动取消该条评论的发送，并弹出提示框：请勿发送空白评论！
    if (tx.value.trim() === '') {
        tx.value = ''
        total.innerHTML = '0/200字'
        alert('请勿发送空白评论！')
        return
    }

    //创建新的元素节点
    const div = document.createElement('div')

    //修改元素节点的内容
    div.className = 'item'
    div.innerHTML = `
        <i class="avatar"></i>
        <div class="info">
            <p class="name">浩平凡的梦</p>
            <p class="text">${tx.value}</p>
            <p class="time">${new Date().toLocaleString()}</p>
        </div>
    `
    //清空用户输入的内容
    tx.value = ''
    total.innerHTML = `${tx.value.length}/200字`
    //将用户输入的内容追加到评论区里
    list.append(div)
}

//鼠标点击发布，调用发布函数
button.addEventListener('click', () => {
    fabu()
})

//输入框获得焦点，右下角自动显示字数
tx.addEventListener('focus', function () {
    total.style.opacity = 1
})

//输入框失去焦点，右下角字数显示自动消失
tx.addEventListener('blur', function () {
    total.style.opacity = 0
})
//用户输入时，实时显示输入字数
tx.addEventListener('input', () => {
    total.innerHTML = `${tx.value.length}/200字`
})