import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state() {
    return {
      token: localStorage.getItem('token'),
      user: {}
    }
  },
  actions: {
    setToken(val) {
      this.token = val
      localStorage.setItem('token', val)
    }
  }
})