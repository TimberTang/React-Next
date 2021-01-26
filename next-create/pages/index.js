import React from "react";
import Link from "next/link";
import Router from "next/router";

const Home = () => {

// routeChangeStart
// routeChangeComplete
// beforeHistoryChange
// routeChangeError
// hashChangeStart
// hashChangeComplete
    Router.events.on('routeChangeStart', () => {
        console.log('1, routeChangeStart-> 路由变化参数为');
    })
    Router.events.on('routeChangeComplete', () => {
        console.log('2, routeChangeComplete-> 路由变化结束');
    })

    Router.events.on('beforeHistoryChange', () => {
        console.log('3, beforeHistoryChange-> 路由发生之前');
    })
    Router.events.on('routeChangeError', () => {
        console.log('4, routeChangeError-> 路由发生错误');
    })

    Router.events.on('hashChangeStart', () => {
        console.log('5, hashChangeStart-> hash变化之前');
    })

    Router.events.on('hashChangeComplete', () => {
        console.log('6, hashChangeComplete-> hash变化之后');
    })

    

    function gotoXiaojiejie() {
        Router.push({
            pathname: "/xiaojiejie",
            query: {
                name: "结衣来啦",
            },
        });
    }
    return (
        <>
            <div>我是首页</div>
            <div>
                <Link
                    href={{ pathname: "/xiaojiejie", query: { name: "结衣" } }}
                >
                    <a>结衣</a>
                </Link>
                <br></br>
                <Link href="/xiaojiejie?name=度多">
                    <a>多多</a>
                </Link>
                <div>
                    <button onClick={gotoXiaojiejie}>选择结衣</button>
                </div>
                {/* <div>
                    <Link href='/#timbertang'>timber</Link>
                </div> */}
                <Link href='/timber'>timber</Link>
            </div>
            {/* <Link href='/TimberA'>去TimberA页面</Link>
      <br/>
      <Link href='/TimberB'><a>去TimberB页面</a></Link> */}
            {/* <div>
        <button onClick={gotoA}>TimberA</button>
      </div> */}
        </>
    );
};

export default Home;
