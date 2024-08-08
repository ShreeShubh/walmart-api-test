"use client"

import React, { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    yourBusiness: "",
    yourType: "",
    yourName: "",
    yourSector: "",
    yourState: "",
    yourCity: "",
    yourPhone: "",
    yourEmail: "",
    yourExporting: "",
    youreCommerce: "",
    selectedSource: "",
    otherSource: "",
    yourDate: "",
    utm_source: "abc",
    utm_medium: "abc",
    utm_campaign: "abc",
    utm_id: "abc",
    recaptchaToken: "abcd",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch("https://api.ivista.biz/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log("Form submitted successfully!")
        // Handle success (e.g., show a success message, clear the form, etc.)
      } else {
        console.error("Failed to submit the form")
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error:", error)
      // Handle error (e.g., show an error message)
    }
  }

  return (
    <form className="p-20 text-black" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          name="yourBusiness"
          value={formData.yourBusiness}
          onChange={handleChange}
          placeholder="Your Business"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="yourType"
          value={formData.yourType}
          onChange={handleChange}
          placeholder="Your Type"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="yourName"
          value={formData.yourName}
          onChange={handleChange}
          placeholder="Your Name"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="yourSector"
          value={formData.yourSector}
          onChange={handleChange}
          placeholder="Your Sector"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="yourState"
          value={formData.yourState}
          onChange={handleChange}
          placeholder="Your State"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="yourCity"
          value={formData.yourCity}
          onChange={handleChange}
          placeholder="Your City"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="yourPhone"
          value={formData.yourPhone}
          onChange={handleChange}
          placeholder="Your Phone"
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="yourEmail"
          value={formData.yourEmail}
          onChange={handleChange}
          placeholder="Your Email"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="yourExporting"
          value={formData.yourExporting}
          onChange={handleChange}
          placeholder="Are You Exporting?"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="youreCommerce"
          value={formData.youreCommerce}
          onChange={handleChange}
          placeholder="Are You Using eCommerce?"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="selectedSource"
          value={formData.selectedSource}
          onChange={handleChange}
          placeholder="Selected Source"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="otherSource"
          value={formData.otherSource}
          onChange={handleChange}
          placeholder="Other Source"
        />
      </div>

      <div className="mb-3">
        <input
          type="date"
          name="yourDate"
          value={formData.yourDate}
          onChange={handleChange}
          placeholder="Your Date"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="utm_source"
          value={formData.utm_source}
          onChange={handleChange}
          placeholder="UTM Source"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="utm_medium"
          value={formData.utm_medium}
          onChange={handleChange}
          placeholder="UTM Medium"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="utm_campaign"
          value={formData.utm_campaign}
          onChange={handleChange}
          placeholder="UTM Campaign"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="utm_id"
          value={formData.utm_id}
          onChange={handleChange}
          placeholder="UTM ID"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
