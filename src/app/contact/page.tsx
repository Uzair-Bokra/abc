// import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

// export default function Contact() {
//   return (
//     <div className="bg-black text-white min-h-screen px-6 py-10 lg:px-40">
//       <h1 className="text-4xl font-bold text-center text-[#FF9F0D] mb-10">Get in Touch</h1>
//       <div className="grid lg:grid-cols-2 gap-10">
//         {/* Contact Form */}
//         <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-5">Send Us a Message</h2>
//           <form className="space-y-5">
//             <div>
//               <label htmlFor="name" className="block text-sm mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Your Name"
//                 className="w-full px-4 py-3 rounded-full bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Your Email"
//                 className="w-full px-4 py-3 rounded-full bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm mb-2">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows= {4}
//                 placeholder="Your Email"
//                 className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 bg-[#FF9F0D] rounded-full text-white font-semibold hover:bg-orange-500 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Contact Details */}
//         <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-5">Contact Information</h2>
//           <p className="mb-5">
//             We’d love to hear from you! Reach out to us via the following contact information or fill out the form.
//           </p>
//           <div className="space-y-5">
//             <div className="flex items-center space-x-4">
//               <AiOutlinePhone className="text-[#FF9F0D] text-2xl" />
//               <span className="text-lg">+92 321 2098021</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <AiOutlineMail className="text-[#FF9F0D] text-2xl" />
//               <span className="text-lg">uzair.bokra@gmail.com</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <AiOutlineHome className="text-[#FF9F0D] text-2xl" />
//               <span className="text-lg">Gover House Karachi</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client"

import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai"
import { useState } from "react"
import { sendEmail } from "../actions/sendEmail"

export default function Contact() {
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = await sendEmail(new FormData(event.currentTarget))
    setFormStatus(result)
  }

  return (
    <div className="bg-[rgb(255,159,13)] text-white min-h-screen px-6 py-10 lg:px-40">
      <h1 className="text-4xl font-bold text-center text-[rgb(255,159,13)] mb-10">Get in Touch</h1>
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-5">Send Us a Message</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-full bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-full bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#FF9F0D] rounded-full text-white font-semibold hover:bg-orange-500 transition"
            >
              Send Message
            </button>
          </form>
          {formStatus && (
            <div className={`mt-4 p-3 rounded ${formStatus.success ? "bg-green-600" : "bg-red-600"}`}>
              {formStatus.message}
            </div>
          )}
        </div>

        {/* Contact Details */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-5">Contact Information</h2>
          <p className="mb-5">
            We&apos;d love to hear from you! Reach out to us via the following contact information or fill out the form.
          </p>
          <div className="space-y-5">
            <div className="flex items-center space-x-4">
              <AiOutlinePhone className="text-[#FF9F0D] text-2xl" />
              <span className="text-lg">+92 321 2098021</span>
            </div>
            <div className="flex items-center space-x-4">
              <AiOutlineMail className="text-[#FF9F0D] text-2xl" />
              <span className="text-lg">uzair.bokra@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <AiOutlineHome className="text-[#FF9F0D] text-2xl" />
              <span className="text-lg">Gover House Karachi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

