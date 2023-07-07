import React from 'react'
import { SignUp } from "@clerk/nextjs";


const signup = () => {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='flex justify-center'>
          <SignUp/>
        </div>
      </div>

    </section>
  )
}

export default signup