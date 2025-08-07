import { Metadata } from 'next'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contact Us - InnovatUp',
  description: 'Get in touch with the InnovatUp team. We\'d love to hear from you!',
}

export default function ContactPage() {
  return <Contact />
}
