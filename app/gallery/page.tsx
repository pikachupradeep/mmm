import GalleryHeader from '@/components/gallery/GalleryHeader'
import GalleryHero from '@/components/gallery/GalleryHero'
import AutoPlay from '@/components/ImageCarousel'
import React from 'react'

const Gallery = () => {
  return (
    <div className='mt-28 px-4 sm:px-0'>
      <div className="">
        <GalleryHeader />
      </div>
      <div className="">
        <AutoPlay />
      </div>
      <div className="">
        <GalleryHero />
      </div>

    </div>
  )
}

export default Gallery