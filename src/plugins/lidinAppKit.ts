// import { defineNuxtPlugin } from '#app'
// import * as LidinAppKit from 'lidin-app-kit'
//
// export default defineNuxtPlugin((nuxtApp) => {
//   console.log('✅ Init Plugin LidinAppKit')
//
//   if (!LidinAppKit || Object.keys(LidinAppKit).length === 0) {
//     console.error('⚠️ LidinAppKit ne semble pas bien chargé')
//     return
//   }
//
//   // Enregistre les composants globalement
//   Object.entries(LidinAppKit).forEach(([name, component]) => {
//     console.log(`📌 Enregistrement du composant ${name}`)
//     nuxtApp.vueApp.component(name, component)
//   })
// })
