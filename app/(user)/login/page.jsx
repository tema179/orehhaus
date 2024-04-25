"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation'
import { createUser, loginUser } from '@/actions/auth'
import Link from "next/link";
import useStorage from "@/hooks/useStorage";

export default function page() {
    const [error, setError] = useState({
        error: '',
        message: ''
    })
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })
    const router = useRouter()

    const onchange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const { set: setUser, get: getUser } = useStorage()

    const submit = async (e) => {
        e.preventDefault()
        const res = await loginUser(form)
        if (res.error) {
            setError(res)
        } else {
            setError({ error: '', message: '' })
            console.log(res)
            setUser(res)
            router.push('/')
        }

    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <form className="w-[250px] flex flex-col gap-2">
                <h1 className="text-[26px] font-semibold">Авторизация</h1>
                <Input className="text-md" placeholder="Введите почту" type="email" onChange={onchange} name="email" />
                <Input className="text-md" placeholder="Введите пароль" type="password" onChange={onchange} name="password" />
                <Button className="text-lg" onClick={submit}>Войти</Button>
                <span className="text-md">Нет аккаунта? <Link className="text-blue-500" href={'/register'}>Создать</Link></span>
                {error?.error ? (
                    <div>
                        <p className="text-rose-500" key={error}>{error.message}</p>
                    </div>
                ) : null
                }
            </form>
        </div>
    )
}

