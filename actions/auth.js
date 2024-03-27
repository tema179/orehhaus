"use server"
import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createToken, generateToken } from "./tokens";


export async function createUser(formData) {
  const { email, name, password } = formData;
  try {
    // Create the user in the database
    const isExist = await db.user.findUnique({
      where: {
        email,
      },
    })

    if (isExist) {
      return {
        error: 'e',
        message: "Такой пользователь уже существует",
      }
    }
    const user = await db.user.create({
      data: {
        email,
        name,
        password: await bcrypt.hash(password, 10),
      },
    });
    console.log(user, 'user')

    const token = await createToken({
      email, name, id: user.id
    })
    if (!token) {
      return {
        error: 'e',
        message: "Ошибка",
      }
    }

    const { password: _, ...rest } = user
    return {
      ...rest,
      token
    }
  } catch (e) {
    console.log(e)
    return {
      error: 'e',
      message: "Произошла ошибка при создании аккаунта",
    };
  }
}

export async function loginUser(formData) {
  const { email, password } = formData;
  try {
    const isExist = await db.user.findUnique({
      where: {
        email,
      },
    })

    if (!isExist) {
      return {
        error: 'e',
        message: "Неверный логин или пароль",
      }
    }

    const passValidate = await bcrypt.compare(password, isExist.password)
    if (!passValidate) {
      return {
        error: 'e',
        message: "Неверный логин или пароль",
      }
    }

    const token = await createToken(isExist)
    if (!token) {
      return {
        error: 'e',
        message: "Неверный логин или пароль",
      }
    }
    const { password: _, ...rest } = isExist
    return {
      ...rest,
      token
    }
  } catch (e) {
    console.log(e)
    return {
      error: 'e',
      message: "Произошла ошибка при создании аккаунта",
    };
  }
}

export async function logoutUser(token) {
  try {
    await db.token.deleteMany({
      where: {
        token
      }
    })
  } catch (e) {
    return {
      error: 'e',
      message: "Произошла ошибка при выходе",
    }
  }
  revalidatePath("/")
}

export async function refresh(token) {
  try {
    console.log(token, 'isLogin token')
    const tokenFromDB = await db.token.findFirst({
      where: {
        token
      }
    })
    console.log(tokenFromDB, 'tokenFromDB')

    const userId = tokenFromDB.userId

    const user = await db.user.findUnique({
      where: {
        id: userId
      }
    })
    console.log(user, 'user')
    const { password: _, ..._user } = user

    return _user
  } catch (e) {
    return null
  }
}
