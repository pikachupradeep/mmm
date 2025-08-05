import GalleryHeader from '@/components/gallery/GalleryHeader'
import GalleryHero from '@/components/gallery/GalleryHero'
import InfiniteImageCarousel from '@/components/ImageCarousel'
import React from 'react'

const Gallery = () => {
  return (
    <div className='mt-20'>
      <div className="">
        <GalleryHeader />
      </div>
      <div className="">
        <InfiniteImageCarousel />
      </div>
      <div className="">
        <GalleryHero />
      </div>

    </div>
  )
}

export default Gallery