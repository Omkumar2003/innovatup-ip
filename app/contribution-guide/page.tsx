import { Metadata } from 'next'
import { ContributionGuide } from '@/components/contribution-guide'

export const metadata: Metadata = {
  title: 'Contribution Guide - InnovatUp',
  description: 'Learn how to contribute to InnovatUp projects and join our open-source community',
}

export default function ContributionGuidePage() {
  return <ContributionGuide />
}
