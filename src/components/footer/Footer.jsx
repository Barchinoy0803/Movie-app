import React from 'react'
import footerlogo from "@/assets/footerlogo.svg"
import googleplaylogo from "@/assets/googleplaylogo.svg"
import appstorelogo from "@/assets/appstorelogo.svg"
import reclamalogo from "@/assets/reclamalogo.svg"
import kinologo from "@/assets/kinologo.svg"
import teatrlogo from "@/assets/teatrlogo.svg"
import phonelogo from "@/assets/phonelogo.svg"
import faqlogo from "@/assets/faqlogo.svg"
import concertlogo from "@/assets/consertlogo.svg"
import facebooklogo from "@/assets/facebooklogo.svg"
import instagramlogo from "@/assets/instagramlogo.svg"
import listlogo from "@/assets/listlogo.svg"
import youtubelogo from "@/assets/youtubelogo.svg"
import sportlogo from "@/assets/sportlogo.svg"

const Footer = () => {
  return (
    <footer className='container mx-auto py-[30px]'>
      <div className='grid grid-cols-3'>
        <div>
          <img className='mb-[48px]' src={footerlogo} alt="" />
          <div className='flex flex-col gap-2'>
            <img className='w-[150px]' src={googleplaylogo} alt="" />
            <img className='w-[150px]' src={appstorelogo} alt="" />
          </div>
        </div>
        <div>
        </div>




      </div>

    </footer>
  )
}

export default Footer