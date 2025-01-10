import { useState } from 'react'
import { motion } from 'framer-motion'
import { Paperclip, User, Mail, MessageSquare } from 'lucide-react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { contact } from '../../config/constant'

export default function Contact() {
  const [attachment, setAttachment] = useState<File | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false) // Track submission state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Construct a mailto URL with the form data
    const { firstName, lastName, email, message } = formData
    const mailtoLink = `mailto:${contact.MAILTO}?subject=Message%20from%20${firstName}%20${lastName}&body=Email:%20${email}%0A%0AMessage:%20${message}`
    
    // Redirect to Gmail's compose screen with pre-filled details
    window.location.href = mailtoLink
    setIsSubmitted(true) // Mark as submitted
  }

  // Reset attachment and form state
  const handleAttachmentReset = () => {
    setAttachment(null)
    setIsSubmitted(false)
  }

  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }} // This allows the animation to re-trigger when it enters the viewport
      className="w-full max-w-2xl mx-auto p-6 mt-12"
    >
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          {contact.LETS_WORK_TOGETHER}
          <span className="text-[#64ffda]">.</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          {contact.OR}{' '}
          <a href={contact.MAILTO} className="text-[#64ffda] hover:underline">
            {contact.MY_CONTACT_INFO}
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Input
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="pl-10 bg-gray-50/50 dark:bg-white/90 h-12 text-black placeholder:text-black dark:text-black dark:placeholder:text-black"
              required
            />
            <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
          <div className="relative">
            <Input
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="pl-10 bg-gray-50/50 dark:bg-white/90 h-12 text-black placeholder:text-black dark:text-black dark:placeholder:text-black"
              required
            />
            <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <div className="relative">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="pl-10 bg-gray-50/50 dark:bg-white/90 h-12 text-black placeholder:text-black dark:text-black dark:placeholder:text-black"
            required
          />
          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>

        <div className="relative">
          <Textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="pl-10 min-h-[120px] bg-gray-50/50 dark:bg-white/90 text-black placeholder:text-black dark:text-black dark:placeholder:text-black"
            required
          />
          <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {!isSubmitted && ( // Show file input only if not submitted
            <Button
              type="button"
              variant="outline"
              className="px-6 h-12 py-3 bg-primary/20 dark:bg-white/10 rounded-full text-black dark:text-white font-medium dark:hover:bg-white/20 transition-colors"
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <Paperclip className="h-4 w-4" />
              Add attachment
            </Button>
          )}
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={(e) => setAttachment(e.target.files?.[0] || null)}
            disabled={isSubmitted} // Disable file input after submission
          />
          {attachment && !isSubmitted && (
            <div className="flex items-center space-x-2">
              <span>{attachment.name}</span>
              <Button
                type="button"
                variant="link"
                className="text-red-500"
                onClick={handleAttachmentReset}
              >
                Remove
              </Button>
            </div>
          )}
          <button
            type="submit"
            className="px-6 py-3 bg-primary dark:bg-[#67E8F9] text-white dark:text-black rounded-sm font-medium hover:opacity-90 transition-opacity"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  )
}
