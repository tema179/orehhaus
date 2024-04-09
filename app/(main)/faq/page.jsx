import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export default function page() {
  return (
    <div className='py-20 min-h-full px-4 mx-auto max-w-[1200px]'>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">Какие услуги можно оплатить?</AccordionTrigger>
          <AccordionContent>
            Через сайт вы можете совершать практически все повседневные платежи: оплатить услуги ЖКХ, интернет, услуги домофона, ТВ, телефонной связи и многие другие.
            <br />
            Заплатить за детский сад, школу, вуз или дополнительное образование. Оплатить штрафы, налоги.
            <br />
            Поиск услуг ЖКХ или поставщиков таких услуг осуществляется по адресу, можно найти поставщика услуг по названию, ИНН.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">Какие способы оплаты доступны на сайте?</AccordionTrigger>
          <AccordionContent>
            Вы можете рассчитываться банковской картой МИР или картами Visa, Mastercard, Maestro, выпущенными банками России.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">Почему оплачивать безопасно?</AccordionTrigger>
          <AccordionContent>
            Мы работаем только с проверенными и надежными платежными системами, которые обеспечивают безопасность ваших финансовых транзакций.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">Как я могу зарегистрироваться на вашем сайте?</AccordionTrigger>
          <AccordionContent>
            Для регистрации на нашем сайте нажмите на кнопку "Регистрация" в правом верхнем углу страницы и заполните необходимые поля в форме регистрации. После завершения регистрации вы получите уведомление на указанный вами адрес электронной почты с дальнейшими инструкциями.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">Что делать, если у меня возникли проблемы с оплатой или сервисом?</AccordionTrigger>
          <AccordionContent>
            Если у вас возникли проблемы с оплатой или сервисом, пожалуйста, свяжитесь с нашей службой поддержки. Вы можете отправить запрос через форму обратной связи на нашем сайте или позвонить по указанному номеру телефона. Наша команда поддержки будет рада помочь вам в решении любых проблем.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left">Как я могу отменить подписку на рассылку новостей?</AccordionTrigger>
          <AccordionContent>
            Для отмены подписки на рассылку новостей зайдите в свой личный кабинет и выберите раздел "Настройки" или "Управление подпиской". Там вы найдете опцию отмены подписки на рассылку новостей. Следуйте инструкциям на экране, чтобы подтвердить отмену подписки.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-left">Как я могу узнать о текущих акциях и специальных предложениях?</AccordionTrigger>
          <AccordionContent>
            Чтобы быть в курсе текущих акций и специальных предложений, подпишитесь на нашу рассылку новостей или следите за обновлениями на нашем сайте и в социальных сетях. Мы регулярно информируем наших клиентов о новых акциях, скидках и специальных предложениях.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-left">Как я могу связаться с представителем вашей компании для консультации?</AccordionTrigger>
          <AccordionContent>
            Для получения консультации вы можете связаться с нами по телефону, электронной почте или через форму обратной связи на нашем сайте. Наши представители будут рады помочь вам с любыми вопросами или проблемами, связанными с нашим сервисом.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="text-left">Какие способы оплаты вы принимаете?</AccordionTrigger>
          <AccordionContent>
            Мы принимаем различные способы оплаты, включая банковские карты, электронные кошельки, банковские переводы и другие. Вы можете выбрать удобный для вас способ оплаты при оформлении заказа или оплате услуг в личном кабинете.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className="text-left">Как я могу отследить статус моего заказа или заявки?</AccordionTrigger>
          <AccordionContent>
            Для отслеживания статуса вашего заказа или заявки зайдите в свой личный кабинет и перейдите в раздел "Мои заказы" или "Мои заявки". Там вы найдете информацию о текущем статусе и обновлениях по вашему заказу или заявке.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
