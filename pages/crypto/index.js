import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function cryptopage() {
  return (
    <Layout title = 'crypto'>
			<h1 className = 'mb-4 text-2xl text-center'>
        Crypto Test 
      </h1>
      <div className = 'mx-auto max-w-screen-sm'>
        <div className = 'button-link'>
          <Link href='crypto/hash'>
            <a className = 'text-xl'> Hash Function </a>
          </Link>
        </div>
        <div className = 'button-link'>
          <Link href='crypto/hmac'>
            <a className = 'text-xl'> Message Authentication Code (HMAC) </a>
          </Link>
        </div>
        <div className = 'button-link'>
          <Link href='crypto/pbkdf2'>
            <a className = 'text-xl'> Password-based key derivation function </a>
          </Link>
        </div>
        <div className = 'button-link'>
          <Link href='crypto/passwordHash'>
            <a className = 'text-xl'> Password Hash Salting </a>
          </Link>
        </div>
        <div className = 'button-link'>
          <Link href='crypto/aes'>
            <a className = 'text-xl'> AES encryption </a>
          </Link>
        </div>
        <div className = 'button-link'>
          <Link href='crypto/rsaenc'>
            <a className = 'text-xl'> RSA encryption </a>
          </Link>
        </div>
        <div className = 'button-link'>
          <Link href='crypto/rsasig'>
            <a className = 'text-xl'> RSA signature </a>
          </Link>
        </div>
        <div className = 'button-link'>
          <Link href='crypto/jwt'>
            <a className = 'text-xl'> JSON Web Token (JWT) </a>
          </Link>
        </div>
        <div className = 'button-link'>
          <Link href='crypto/cert'>
            <a className = 'text-xl'> Certificate </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}