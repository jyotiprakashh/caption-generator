import React from 'react'
import PageHeader from '../components/PageHeader'

const page = () => {
  return (
    <div>
        <PageHeader h1T={'Check out our pricing'} h2T={'They are simple.'}/>
        <div className="bg-white text-slate-700 rounded-lg max-w-xs mx-auto p-4 text-center">
           <h3 className="font-bold text-3xl">Free</h3>
           <h4>₹0</h4>
        </div>
    </div>
  )
}

export default page