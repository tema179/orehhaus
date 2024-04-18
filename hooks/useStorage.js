import React from 'react'

export default function useStorage(key = 'auth') {

  return {
    get: () => {
      return JSON.parse(localStorage.getItem(key))
    },

    set: (value) => {
      localStorage.setItem(key, JSON.stringify(value))
    },
    clear() {
      localStorage.removeItem(key)
    }
  }
}

