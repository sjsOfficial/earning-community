import AppDownload from '@/components/Home/AppDownload'
import HorizontalSlider from '@/components/HorizontalSlider'
import React from 'react'

export default function Profile() {
  return (
    <div className='container mx-auto'>
      <HorizontalSlider></HorizontalSlider>
      <AppDownload></AppDownload>
    </div>
  )
}
