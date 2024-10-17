import React from 'react'
import { useState } from 'react'

const SubscriptionForm = () => {
    const [email, setEmail] = useState('')
  return (
    <div>
        <input
         type="email"
         placeholder="Please enter your email"
         name="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         className="w-full p-2 border border-gray-300 rounded-md" 
        />
    </div>
  )
}

export default SubscriptionForm