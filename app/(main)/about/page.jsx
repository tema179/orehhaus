import React from 'react'

export default function page() {
  return (
    <div className='py-20 min-h-full px-4 mx-auto max-w-[1200px]'>
      <h2 className='text-3xl font-semibold'>О сервисе</h2>
      <h3 className='text-2xl font-medium py-2'>Коммунальные Услуги Колузаево – Ваш Надежный Партнер в Управлении Коммунальными Услугами</h3>
      <div className='text-lg py-2'>
        Сервис круглосуточно доступен на сайте. <br /> <br />
        Коммунальные Услуги Колузаево – это современный сервис для управления коммунальными услугами вашего города. С его помощью вы сможете легко контролировать все коммунальные процессы и получать актуальную информацию по услугам в удобное для вас время. <br /> <br />
        <ul className='list-disc px-6'>
          <li>Простой поиск услуг и начислений по адресу, ЕЛС или названию поставщика.</li>
          <li>Возможность добавлять несколько адресов и совершать оплату по ним.</li>
          <li>Передача показаний счетчиков</li>
          <li>Подтверждение платежей квитанциями, которые в любой момент можно сохранить или отправить на свою электронную почту.</li>
        </ul>
      </div>
      <h3 className='text-2xl font-medium py-2'>Надежность</h3>
      <div className='text-lg py-2'>
        Мы понимаем, что для наших клиентов надежность сервиса является одним из самых важных аспектов. Поэтому мы придаем особое внимание обеспечению стабильной работы и безопасности всех наших систем. Вот почему "Коммунальные Услуги Колузаево" являются надежным партнером для управления вашими коммунальными услугами: <br /> <br />
        <ul className='list-disc px-6'>
          <li>Мы инвестируем в современные технологии и обеспечиваем надежность нашей инфраструктуры. Наша система построена на высококлассных серверах, которые гарантируют стабильную работу сервиса 24/7.</li>
          <li>Безопасность ваших данных – наш главный приоритет. Мы применяем передовые методы шифрования, чтобы гарантировать конфиденциальность всех ваших персональных данных и финансовых транзакций.</li>
          <li>Мы регулярно создаем резервные копии всех данных, чтобы обеспечить их безопасность и возможность быстрого восстановления в случае необходимости.</li>
        </ul>
      </div>
    </div>
  )
}
