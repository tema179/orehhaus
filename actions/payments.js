"use server"
import { db } from "@/lib/db";


export const getAllPayments = async (phone) => {
  try {
    const payments = await db.payments.findMany({
      phone
    });
    return payments
  } catch (e) {
    console.log(e, 'payment get failed');
    return []
  }
}

export const getPaymentById = async (id) => {
  try {
    const payment = await db.payments.findUnique({
      where: {
        id
      }
    });
    return payment
  } catch (e) {
    console.log(e, 'payment get failed');
    return null
  }
}

export const createPayment = async (data) => {
  try {
    const { phone, message, sum, name, bill, typeServicesId } = data

    if (!phone || !sum || !name || !bill || !typeServicesId) {
      return null
    }


    const payment = await db.payments.create({
      data: {
        phone,
        message,
        sum,
        name,
        bill,
        typeServicesId
      }
    });
    return payment
  } catch (e) {
    console.log(e, 'payment create failed');
    return null
  }
}