import React from 'react'

export default function page() {
  return (
    <div className='py-20 min-h-full px-4 mx-auto max-w-[1200px]'>
      <h2 className='text-3xl font-semibold'>Контакты</h2>
      <div className='text-lg py-2'>
        <span>Если у вас возникли вопросы, связанные с использованием сервиса, вы можете обратиться по телефону 8-800-444-88-34</span>
        <br />
        <span className='mt-4'>
          Также вы можете написать в Обратную связь или на koluzaevo@yandex.ru
        </span>
      </div>
      <div className='text-lg py-2 flex md:flex-row flex-col gap-6 justify-between'>
        <div className='text-lg'>
          <h3 className='text-2xl font-medium py-2'>Связаться с Нами</h3>
          <span className='font-semibold'>Адрес Офиса:</span>
          <br />
          <span className='mt-4'>Ул. Степная, д.21, Колузаево, Ростовская обл., 346741</span>
          <br />
          <span className='font-semibold'>Телефон:</span>
          <br />
          <span className='mt-4'>8-800-444-88-34</span>
          <br />
          <span className='font-semibold'>Электронная Почта:</span>
          <br />
          <span className='mt-4'>info@koluzaevo.ru</span>
          <br />
          <span className='font-semibold'>Рабочие Часы:</span>
          <br />
          <span className='mt-4'>Понедельник – Пятница: 9:00 – 18:00</span>
          <br />
          <span className='mt-4'>Суббота – Воскресенье: Выходной</span>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
            Яндекс Карты
          </a>
          <a href="https://yandex.ru/maps/11029/rostov-oblast/house/stepnaya_ulitsa_21/Z0AYcwNjT0IAQFptfX13cXRqbA==/?l=stv%2Csta&ll=39.543677%2C47.160898&utm_medium=mapframe&utm_source=maps&z=16.89" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
            Степная улица, 21 — Яндекс Карты
          </a>
          <iframe src="https://yandex.ru/map-widget/v1/?l=stv%2Csta&ll=39.543677%2C47.160898&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyNTMzMDg1NTAzEs4B0KDQvtGB0YHQuNGPLCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0JDQt9C-0LLRgdC60LjQuSDRgNCw0LnQvtC9LCDQldC70LjQt9Cw0LLQtdGC0LjQvdGB0LrQvtC1INGB0LXQu9GM0YHQutC-0LUg0L_QvtGB0LXQu9C10L3QuNC1LCDRhdGD0YLQvtGAINCa0L7Qu9GD0LfQsNC10LLQviwg0KHRgtC10L_QvdCw0Y8g0YPQu9C40YbQsCwgMjEiCg26LB5CFcKkPEI%2C&z=16.89" frameBorder="1" allowFullScreen="true" style={{ position: 'relative' }}
            className='md:w-[400px] lg:w-[560px] h-[400px] w-full'></iframe>
        </div>
      </div>
    </div>
  )
}
