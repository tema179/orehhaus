"use server"
import { db } from "@/lib/db";


export const getAllReviews = async () => {
  try {
    const reviews = await db.reviews.findMany();
    return reviews
  } catch (e) {
    console.log(e, 'payment get failed');
    return []
  }
}

export const getReviewByPhone = async (phone) => {
  try {
    const review = await db.reviews.findMany({
      where: {
        phone
      }
    })
    return review
  } catch (e) {
    console.log(e, 'review get failed');
    return []
  }
}

export const createReview = async (data) => {
  try {
    const { phone, message, name } = data
    if (!phone || !message || !name) {
      return {
        error: 'All fields are required',
        message: 'Все поля обязательны к заполнению'
      }
    }
    const review = await db.reviews.create({
      data: {
        phone, message, name
      }
    })
    if (!review) {
      return {
        error: 'Something went wrong',
        message: 'Что-то пошло не так'
      }
    }
    return review
  } catch (e) {
    console.log(e, 'review create failed');
    return null
  }
}
