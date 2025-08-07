'use client'; // Only if this component will use client-side interactivity in Next.js 13+

import Image from 'next/image';

export default function GalleryHero() {
  return (
    <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
      <div className=" px-4 md:px-8">
        {/* Header */}
        <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
           

            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              This is a section of some simple filler text, also known as placeholder text.
              It shares some characteristics of a real written text.
            </p>
          </div>

          <a
            href="#"
            className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            More
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {[
            {
              label: 'sample1',
              src: '/carousel/img6.png',
              span: 'col-span-1',
            },
            {
              label: 'sample2',
              src: '/carousel/img2.png',
              span: 'md:col-span-2',
            },
            {
              label: 'sample3',
              src: '/carousel/img3.png',
              span: 'md:col-span-2',
            },
            {
              label: 'sample4',
              src: '/carousel/img4.png',
              span: 'col-span-1',
            },
          ].map(({ label, src, span }, i) => (
            <a
              key={i}
              href="#"
              className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${span}`}
            >
              <img
                src={src}
                loading="lazy"
                alt={label}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
