'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FileText } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea"
import { getServiceById } from '@/actions/typeServices';
import { createPayment } from '@/actions/payments';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
export default function page() {
  const [loading, setIsLoading] = useState(false);
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [form, setForm] = useState({
    message: '',
    bill: '',
    name: '',
    phone: '',
    sum: '',
  })

  const { serviceId } = useParams()
  useEffect(() => {
    setIsLoading(true)
    getServiceById(serviceId)
      .then((service) => {
        console.log(service)
        setService(service)
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }, [serviceId])
  const onchange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const submit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccess(null)
    setError(null)
    const payment = {
      ...form,
      sum: parseFloat(form.sum),
      typeServicesId: serviceId
    }
    const res = await createPayment(payment)
    setIsLoading(false)
    if (!res) {
      setError({ error: true, message: 'Что-то пошло не так' })
      return
    } else {
      setForm({
        message: '',
        bill: '',
        name: '',
        phone: '',
        sum: '',
      })
      setSuccess('Оплата прошла успешно')
    }
    console.log(res)
  }

  return (
    <div className='bg-[#f3f4f5] min-h-full w-full py-20'>
      <Breadcrumb className='mb-4 px-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Домашняя</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/services">Услуги</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={"/services/" + service?.id}>{service?.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='min-h-full mx-auto max-w-[1200px] flex md:flex-row flex-col w-full justify-between gap-10 xl:px-0 px-4'>

        <div className="w-full flex flex-col gap-4 bg-white p-6 rounded-[12px]">
          <form className="md:w-[370px] w-auto flex flex-col gap-4 bg-white p-6 rounded-[12px]">
            <h1 className='text-2xl font-bold'>Оплата услуг <br /> {!loading && service?.title}</h1>
            <Input placeholder="ФИО" value={form.name} onChange={onchange} name="name" />
            <Input placeholder="Лицевой счет" value={form.bill} onChange={onchange} name="bill" />
            <Input placeholder="Телефон" value={form.phone} onChange={onchange} name="phone" />
            <Input placeholder="Сумма" value={form.sum} onChange={onchange} name="sum" />
            <Textarea name="message" value={form.message} onChange={onchange} placeholder="Оставьте свое сообщение." />
            <Button disabled={loading} onClick={submit}>Оплатить</Button>
            {error?.error ? (
              <div>
                <p className="text-rose-500" key={error}>{error.message}</p>
              </div>
            ) : null
            }
            {success ? (
              <div>
                <p className="text-green-500" key={success}>{success}</p>
              </div>
            ) : null
            }
            {loading ? <p>загрузка...</p> : null}
          </form>
        </div>
        <div className='flex flex-col gap-4 items-center bg-white p-6 rounded-[12px] md:w-[350px] lg:h-[550px]'>
          <div className='flex p-4 w-20 h-20 justify-center items-center bg-slate-200 rounded-[10px]'>
            <FileText className='w-8 h-8' />
          </div>
          <span className='text-lg font-medium'>Информация
            о платеже</span>
          <div>
            Срок зачисления: от 1 до 3 рабочих дней в зависимости от организации-получателя
            <br /><br />
            Квитанция в формате PDF предоставляется
            <br /><br />
            Безопасность операций подтверждена сертификатом соответствия PCI DSS.
            <br /><br />
            Телефон поддержки: <br /> +7 800 444 88 34
          </div>
        </div>
      </div>
    </div>

  )
}
