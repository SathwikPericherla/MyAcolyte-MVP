'use client'

import Image from 'next/image'
import totalpages from '@/public/totalpages.svg'
import annotations from '@/public/annotations.svg'
import { useSettings } from '@/context/SettingsContext'



export default function PDFCounter() {

const totalAnnotations=2
  const {currentPage,pages:totalPages,first} = useSettings()
  return (
   <div className='absolute bottom-5 group  w-[208px] h-[207px] '  style={{zIndex:100}}>
     {!first && (<div className="font-rubik group-hover:flex hidden absolute bottom-5 m-5  flex-col gap-2 p-2 text-sm">
      <div className="text-muted-foreground mb-3 text-[16px]">
       <span className='text-black'> Page: {currentPage} </span> /{totalPages}
      </div>
      <div className="flex flex-col gap-2 text-[15px]">
        <div className="flex items-center gap-2">
          <Image src={totalpages} alt='d' width={16} height={16} />
          <span className="text-purple-600">{totalPages} Pages</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={annotations} alt='d' width={16} height={16} />
          <span className="text-purple-600">{totalAnnotations} Annotations</span>
        </div>
      </div>
    </div>)}
   </div>
  )
}

