"use server"
import { db } from "@/lib/db";

export const getAllServices = async () => {
  try {
    const services = await db.typeServices.findMany({
    });
    return services
  } catch (e) {
    console.log(e, 'service get failed');
    return []
  }
}

export const getServiceById = async (id) => {
  try {
    const service = await db.typeServices.findUnique({
      where: {
        id
      }
    });
    return service
  } catch (e) {
    console.log(e, 'service get failed');
    return null
  }
}