export default defineNuxtRouteMiddleware((to) => {
  const path = to.path
  
  if (!/^\/varauskalenteri/.test(path)) {
    return
  }
  
  return navigateTo(`https://old.teekkarienautokerho.fi${path}`, {
    external: true
  })
  
})