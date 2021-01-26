import { withRouter } from 'next/router';
import Link from 'next/link'
import axois from 'axios'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';



const Xiaojiejie  = ({router, list = ['学习', '健身', '哈哈']}) => {

  return (
    <>
      <div>{router.query.name}来了</div>
      <div>{list}</div>
      <Link href='/'>返回首页</Link>
    </>
  )
}

// Xiaojiejie.getInitialProps = async () => {
//   console.log('loadGetInitialProps');
//   const promise = new Promise((resole) => {
//     // axois('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
//     // .then((res => {
//     //   console.log(res);
//     // })).catch(error => {
//     //   console.log(error);
//     // })
//     resole(['1', '2'])
//   })
//   return await promise
// }

export default withRouter(Xiaojiejie)