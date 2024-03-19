import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='w-full max-w-[1200px] mx-auto border-t shadow-sm bg-white flex items-center px-2'>
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Клиентам</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="/services" className="text-base text-gray-500 hover:text-gray-900">По свободным реквизитам</a></li>
                <li><a href="/services" className="text-base text-gray-500 hover:text-gray-900">Список услуг</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Актуальное</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="/news" className="text-base text-gray-500 hover:text-gray-900">Блог</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">О нас</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="/faq" className="text-base text-gray-500 hover:text-gray-900">Помощь</a></li>
                <li><a href="/about" className="text-base text-gray-500 hover:text-gray-900">О портале</a></li>
                <li><a href="/callback" className="text-base text-gray-500 hover:text-gray-900">Обратная связь</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Мы в соцсетях</h3>
              <div className="gap-5 flex items-center mt-4">
                <a href="https://vk.com" className="hover:scale-125 transition-all delay-100"><Image src='icons/vk.svg' width={30} height={30} /></a>
                <a href="https://ok.ru" className=" hover:scale-125 transition-all delay-100"><Image src='icons/ok.svg' width={30} height={30} /></a>
                <a href="https://instagram.com" className="hover:scale-125 transition-all delay-100"><Image src='icons/inst.svg' width={30} height={30} /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
