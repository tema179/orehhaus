"use client"
import { getAllServices } from "@/actions/typeServices";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Home() {
  const [services, setServices] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllServices()
      .then((services) => {
        console.log(services)
        setServices(services)
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="flex min-h-screen flex-col gap-2 py-20 mx-auto max-w-[1200px] relative px-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Домашняя</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/services">Услуги</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className='text-3xl font-semibold mb-2'>Услуги</h2>
      {!loading && (
        <div className="flex gap-4 flex-wrap w-full ">
          {
            services.map((service) => (
              <Link href={`/services/${service.id}`} key={service.id} className="flex flex-col items-center justify-between p-4 lg:w-[30%] sm:w-[47%] w-[100%] bg-[#f3f4f5] rounded-[12px] gap-2 ">
                <div className="w-full flex items-center justify-between gap-2">
                  <div className="p-2 bg-gray-200 rounded-[12px]">
                    <Image
                      src={service.photo || ''}
                      alt={service.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <span className="text-lg font-semibold">
                    {service.title}
                  </span>
                </div>
                <p>{service.description}</p>
              </Link>
            ))
          }
        </div>
      )}
      {loading &&
        <div className="flex gap-4 flex-wrap w-full  ">
          {
            [...Array(4)].map((_, index) => (
              <SkeletonService key={index} />
            ))
          }
        </div>
      }
    </main>
  );
}

export function SkeletonService() {
  return (
    <div className="flex flex-col items-center justify-between p-4 lg:w-[30%] sm:w-[47%] w-[100%] bg-[#f3f4f5] rounded-[12px] gap-2 ">
      <div className="w-full flex items-center justify-between gap-2 space-y-4">
        <div className="p-2 bg-gray-200 rounded-[12px]">
          <Skeleton className="h-[50px] w-[50px]" />
        </div>
        <Skeleton className="text-lg font-semibold h-4 w-full" />
      </div>
      <Skeleton className="h-14 w-full">Описание...</Skeleton>
    </div>
  )
}
