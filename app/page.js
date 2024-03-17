"use client"
import { getAllServices } from "@/actions/typeServices";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { refresh } from "@/actions/auth";
import useStorage from "@/hooks/useStorage";

export default function Home() {
  const [services, setServices] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredServices, setFilteredServices] = useState(services);

  const onchange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setFilteredServices(services)
    }
    else {
      setFilteredServices(services.filter(service => service.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }
  }

  useEffect(() => {
    setFilteredServices(services)
  }, [services])

  const { set: setUser, get: getUser, clear } = useStorage()

  useEffect(() => {
    setIsLoading(true);
    // const user1 = getUser()
    // console.log(user1, 'user1')

    getAllServices()
      .then((services) => {
        setServices(services)
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center lg:px-2 p-4 mx-auto max-w-[1200px] py-20 lg:py-20 ">
      <h2 className="text-3xl font-semibold mb-4">Список услуг</h2>
      <div className="w-full bg-[#f3f4f5] p-3 mb-10 flex flex-col gap-2 rounded-[12px]">
        <span className="text-lg font-semibold">Поиск по услугам</span>
        <div className="w-full flex items-center relative">
          <Input value={search} onChange={onchange} className="w-full text-lg p-6" placeholder="Введите название услуги..." />
          <Search className="absolute right-6" />
        </div>
      </div>
      {!loading && (
        <div className="flex gap-4 flex-wrap w-full">
          {
            filteredServices.map((service) => (
              <Link href={`/services/${service.id}`} key={service.id} className="flex flex-col items-center justify-between p-4 lg:w-[32%] sm:w-[47%] w-[100%] bg-[#f3f4f5] rounded-[12px] gap-2 lg:hover:translate-y-[-15px] transition-all lg:hover:shadow-md">
                <div className="w-full flex items-center justify-between gap-2">
                  <div className="p-2 bg-gray-200 rounded-[12px] ease-in-out delay-350">
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

    </main>
  );
}
