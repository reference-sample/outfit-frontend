// stores/user.ts

import { defineStore } from 'pinia'

export interface UserInfo {
  userId: number
  username: string
  nickname: string
  email: string
}

export const useUserStore = defineStore(
  'user',
  {
    state: () => ({
      user: null as UserInfo | null,
    }),

    getters: {
      isLogin: (state) => !!state.user,

      userId: (state) => state.user?.userId,

      username: (state) =>
        state.user?.username ?? '',

      nickname: (state) =>
        state.user?.nickname ?? '',
    },

    actions: {
      setUser(user: UserInfo) {
        console.info("user:", user);
        this.user = user
      },

      clearUser() {
        this.user = null
      },
    },

    // 就这一句
    persist: true,
  }
)