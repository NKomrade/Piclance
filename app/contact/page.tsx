"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetching the webhook URL from environment variables
  const webhookUrl = process.env.NEXT_PUBLIC_FEEDBACK_WEBHOOK_URL;

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { fullName, email, message } = formData;
    if (!fullName || !email || !message) {
      alert("Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      content: `**New Contact Form Submission**\n\n**Name:** ${fullName}\n**Email:** ${email}\n**Message:** ${message}`,
    };

    try {
      const response = await fetch(webhookUrl || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-cover bg-zinc-900 bg-center relative">

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen pt-20 pb-20">
        <div className="absolute inset-0 bg-zinc-900 opacity-70"></div>

        {/* Contact Form Section */}
        <div className="relative z-10 p-8 md:bg-black bg-opacity-60 rounded-lg max-w-3xl w-full text-white shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Contact Us</h2>
          <form className="space-y-4 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300"
                placeholder="Enter your mail ID"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-white hover:bg-black hover:text-white transition duration-300 font-bold text-black hover:shadow-lg transform hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
