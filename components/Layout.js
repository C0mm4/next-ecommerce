import Head from 'next/head'
import React from 'react'
import Link from 'next/link'


export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title ? title + ' - NextShop' : 'NextShop'}</title>
      	<meta name='description' content = 'Nextjs Ecommerce' />
				<link rel = 'icon' href = '/favicon.ico' />
      </Head>
      <div className='flex-min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 items-center px-4 justify-between shadow-md bg-slate-200'>
            <Link href='/'>
              <a className='text-lg font-bold'> Next Shop</a>
            </Link>
            <div>
         	  	<Link href='/Cart'>
        	    	<a className='p-2'>Cart</a>
      	      </Link>
   	        	<Link href ='/Login'>
  	          	<a className='p-2'>Login</a>
	          	</Link>
            </div>
          </nav>
        </header>
      </div>
      <main className='container m-auto mt-4 px-4'>{children}</main>
      <footer className='flex h-10 justify-center items-center shadow-inner bg-red-100'>
        <p>Copyright &copy; 2022 NextShop</p>
      </footer>
    </div>
  )
}
