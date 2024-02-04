"use server"
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { v4 as uuidv4 } from 'uuid';


export async function generateToken() {
  return uuidv4()
}

export async function createToken(userData) {
  try {
    const isExist = await findToken(userData.id)
    if (isExist) {
      return isExist
    }
    const token = await generateToken()
    const newToken = await db.token.create({
      data: {
        token,
        userId: userData.id,
        // user: userData
      },
    });
    return token;
  } catch (e) {
    console.log(e, 'token create failed');
    return false
  }
}

export async function findToken(userId) {
  try {
    const token = await db.token.findFirst({
      where: {
        userId: userId,
      },
    });
    return token.token;
  } catch (e) {
    console.log(e, 'token find failed');
    return false
  }
}