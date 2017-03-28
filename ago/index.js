// debugger;
// var fn = null;
// function foo() {
//     var a = 2;
//     function innnerFoo() {
//         console.log(c); // 在这里，试图访问函数bar中的c变量，会抛出错误
//         console.log(a);
//     }
//     fn = innnerFoo; // 将 innnerFoo的引用，赋值给全局变量中的fn
// }
//
// function bar() {
//     var c = 100;
//     fn(); // 此处的保留的innerFoo的引用
// }
//
// foo();
// bar();


// (function () {
//     var a = 10;
//     var b = 20;
//
//     function add(num1, num2) {
//         var num1 = !!num1 ? num1 : a;
//         var num2 = !!num2 ? num2 : b;
//
//         return num1 + num2;
//     }
//
//     window.add = add;
// })();
//
// add(10, 20);


// for (var i=1; i<=5; i++) {
//   (function (i) {setTimeout( function timer() {
//       console.log(i);
//   }, i*1000 )})(i);
// }

// var a, i = 10000;
// (function (dddd, cccc) {
//   debugger;
//     var a = 10;
//     var b = 20;
//
//     function add(num1, num2) {
//         var num1 = !!num1 ? num1 : a;
//         var num2 = !!num2 ? num2 : b;
//
//         return num1 + num2;
//     }
//
//     window.add = add;
// })(a, i);

// setTimeout(function() { console.log(a); }, 0);
// var a = 10;
// console.log(b);
// console.log(fn);
// var b = 20;
// function fn() { setTimeout(function() { console.log('setTImeout 10ms.'); }, 10); }
// fn.toString = function() { return 30; }
// console.log(fn);
// setTimeout(function() { console.log('setTimeout 20ms.'); }, 20);
// fn();


// function exam(a, b, c, d, e) {
//
//     // 先看看函数的自带属性 arguments 什么是样子的
//     console.log(arguments);
//
//     // 使用call/apply将arguments转换为数组, 返回结果为数组，arguments自身不会改变
//     var arg = [].slice.call(arguments);
//
//     console.log(arg);
// }
//
// exam(2, 8, 9, 10, 3);

function getXMLHttpRequest() {
    var xhr;
    if(window.ActiveXObject) {
           xhr= new ActiveXObject("Microsoft.XMLHTTP");
    }else if (window.XMLHttpRequest) {
           xhr= new XMLHttpRequest();
    }else {
           xhr= null;
    }
    return xhr;
}

function post() {
    debugger;
    var xhr = getXMLHttpRequest();
    xhr.open("post","http://local.backend.quqi.com/api/dingding/sendLinkMsg");
    var data ={
        "object_kind": "push",
        "event_name": "push",
        "before": "0000000000000000000000000000000000000000",
        "after": "e83cf7d80a6fb6bfd1b06a37971fa6874e22fa10",
        "ref": "refs/heads/5.1.2",
        "checkout_sha": "e83cf7d80a6fb6bfd1b06a37971fa6874e22fa10",
        "message": null,
        "user_id": 7,
        "user_name": "澶忚鏄",
        "user_email": "xiajianming@quqi.com",
        "user_avatar": "http: //git.quqi.com/uploads/user/avatar/7/avatar.png",
        "project_id": 20,
        "project": {
            "name": "backend-operation-backend-server",
            "description": "杩愯惀鍚庡彴鏈嶅姟鍣╘r\n",
            "web_url": "http: //git.quqi.com/backend/backend-operation-backend-server",
            "avatar_url": null,
            "git_ssh_url": "git@git.quqi.com: backend/backend-operation-backend-server.git",
            "git_http_url": "http: //git.quqi.com/backend/backend-operation-backend-server.git",
            "namespace": "backend",
            "visibility_level": 0,
            "path_with_namespace": "backend/backend-operation-backend-server",
            "default_branch": "master",
            "homepage": "http: //git.quqi.com/backend/backend-operation-backend-server",
            "url": "git@git.quqi.com: backend/backend-operation-backend-server.git",
            "ssh_url": "git@git.quqi.com: backend/backend-operation-backend-server.git",
            "http_url": "http: //git.quqi.com/backend/backend-operation-backend-server.git"
        },
        "commits": [],
        "total_commits_count": 0,
        "repository": {
            "name": "backend-operation-backend-server",
            "url": "git@git.quqi.com: backend/backend-operation-backend-server.git",
            "description": "杩愯惀鍚庡彴鏈嶅姟鍣╘r\n",
            "homepage": "http: //git.quqi.com/backend/backend-operation-backend-server",
            "git_http_url": "http: //git.quqi.com/backend/backend-operation-backend-server.git",
            "git_ssh_url": "git@git.quqi.com: backend/backend-operation-backend-server.git",
            "visibility_level": 0
        }
    }
    // var data = {
    //     "event_name": "push",
    //     "before": "95790bf891e76fee5e1747ab589903a6a1f80f22",
    //     "after": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
    //     "ref": "refs/heads/master",
    //     "checkout_sha": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
    //     "user_id": 4,
    //     "user_name": "John Smith",
    //     "user_email": "john@example.com",
    //     "user_avatar": "https://s.gravatar.com/avatar/d4c74594d841139328695756648b6bd6?s=8://s.gravatar.com/avatar/d4c74594d841139328695756648b6bd6?s=80",
    //     "project_id": 15,
    //     "project":{
    //         "name":"Diaspora",
    //         "description":"",
    //         "web_url":"http://example.com/mike/diaspora",
    //         "avatar_url":null,
    //         "git_ssh_url":"git@example.com:mike/diaspora.git",
    //         "git_http_url":"http://example.com/mike/diaspora.git",
    //         "namespace":"Mike",
    //         "visibility_level":0,
    //         "path_with_namespace":"mike/diaspora",
    //         "default_branch":"master",
    //         "homepage":"http://example.com/mike/diaspora",
    //         "url":"git@example.com:mike/diaspora.git",
    //         "ssh_url":"git@example.com:mike/diaspora.git",
    //         "http_url":"http://example.com/mike/diaspora.git"
    //     },
    //     "repository":{
    //         "name": "Diaspora",
    //         "url": "git@example.com:mike/diaspora.git",
    //         "description": "",
    //         "homepage": "http://example.com/mike/diaspora",
    //         "git_http_url":"http://example.com/mike/diaspora.git",
    //         "git_ssh_url":"git@example.com:mike/diaspora.git",
    //         "visibility_level":0
    //     },
    //     "commits": [
    //         {
    //           "id": "b6568db1bc1dcd7f8b4d5a946b0b91f9dacd7327",
    //           "message": "Update Catalan translation to e38cb41.",
    //           "timestamp": "2011-12-12T14:27:31+02:00",
    //           "url": "http://example.com/diaspora/commits/b6568db1bc1dcd7f8b4d5a946b0b91f9dacd7327",
    //           "author": {
    //             "name": "Jordi Mallach",
    //             "email": "jordi@softcatala.org"
    //           }
    //         },
    //         {
    //           "id": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
    //           "message": "fixed readme",
    //           "timestamp": "2012-01-03T23:36:29+02:00",
    //           "url": "http://example.com/diaspora/commits/da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
    //           "author": {
    //             "name": "GitLab dev user",
    //             "email": "gitlabdev@dv6700.(none)"
    //           }
    //         }
    //      ],
    //     "total_commits_count": 0
    // };

    data = JSON.stringify( data )
    xhr.send(data);

    // var data2 = data.toString();
    // xhr.send(data2);
    xhr.onreadystatechange= function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
                alert("returned:"+ xhr.responseText);
        }
    };
}

post();
