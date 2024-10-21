import React from 'react'

const Button = ({handleSubscription}) => {
  return (
    <>
       <button  onClick={handleSubscription} className="inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded text-lg">Button</button>
    </>
  )
}

export default Button