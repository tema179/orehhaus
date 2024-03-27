"use server"
import { db } from "@/lib/db";

export const getAllNews = async () => {
  try {
    const news = await db.news.findMany();
    return news
  } catch (e) {
    console.log(e, 'news get failed');
    return []
  }
}


export const getNewsById = async (id) => {
  try {
    const news = await db.news.findUnique({
      where: {
        id
      }
    });
    return news
  } catch (e) {
    console.log(e, 'news get failed');
    return null
  }
}

export const createNews = async (data) => {
  try {
    const { title, text, photo } = data
    if (!title || !text) {
      return null
    }
    const news = await db.news.create({
      data
    });
    return news
  } catch (e) {
    console.log(e, 'news create failed');
    return null
  }
}