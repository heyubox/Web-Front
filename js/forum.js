var weekArray = ['周一', '周二', '周三', '周四', '周五']
localStorage.setItem('weekDay', JSON.stringify(weekArray));
weekArray = JSON.parse(localStorage.getItem('weekDay'));
var obj3 = [
    [{
            "user": 1,
            "time": 2,
            "content": "到此一游"
        },
        {
            "user": "sub1",
            "time": 2,
            "content": "到此一游"
        }, {
            "user": "sub2",
            "time": 2,
            "content": "到此一游"
        }
    ],
    [{
            "user": 1,
            "time": 2,
            "content": "到此一游"
        },
        {
            "user": "sub1",
            "time": 2,
            "content": "到此一游"
        }, {
            "user": "sub2",
            "time": 2,
            "content": "到此一游"
        }
    ]
];
localStorage.setItem("all", JSON.stringify(obj3));
test = JSON.parse(localStorage.getItem("all") || '[]'); //返回对象数组
console.log(test[0])
console.log(test[1])
var userhas=document.cookie;
if(userhas){
    user=userhas.slice(9)

}

function addComment(user,time,text=" "){
    var newComment=[{
        "user":user,
        "time":time,
        "content":text
    },];
    var allcomment = JSON.parse(localStorage.getItem("all") || '[]')
    allcomment.push(newComment)
    localStorage.setItem("all", JSON.stringify(allcomment));


}

$(document).ready(function () {
    var username=$("input");
    username[0].value=user;
    $("#comment").click(function () {
        if(!userhas){
            alert("请先登录")
            return;
        }

        text = $("textarea");
        text = text[0].value;
        time=Date();
        addComment(user,time,text);
    })

    $("#login").click(function(){
        var username=$("input");
        username=username[0].value;
        document.cookie="username="+username;
    })
})