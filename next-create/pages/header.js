import Head from 'next/head'
import MyHead from '../components/myHeader'
import '../public/test.css'
import { Button } from 'antd'

// babel-plugin-import 

// Next.js 不支持 css import , style jsx adtd css import
function Header() {
    return (
        <>
            <MyHead></MyHead>
            <div>TimberTang.com</div>
            <div>
                <Button>我是按钮</Button>
            </div>
        </>
    )
}

export default Header