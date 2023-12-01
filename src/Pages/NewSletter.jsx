import axios from 'axios'
import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'
import Wrapper from '../assets/wrappers/ErrorPage'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'
export var action = async ({ request }) => {
  var formData = await request.formData()
  var element = Object.fromEntries(formData)
  try {
    var response = await axios.post(newsletterUrl, element)
    toast.success(response?.data?.msg)
    console.log(response)
    return redirect('/')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const NewSletter = () => {
  var navigation = useNavigation()
  var isSubmitting = navigation.state === 'submitting'
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      <div className="form-row">
        {/* name */}
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          required
        />
      </div>
      <div className="form-row">
        {/* lastName */}
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          required
        />
      </div>
      <div className="form-row">
        {/* email */}
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-input"
          required
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: '0.5rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'submitting' : 'submit'}
      </button>
    </Form>
  )
}

export default NewSletter
