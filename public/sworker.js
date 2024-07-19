self.addEventListener('install',e=>{
    e.waitUntil(
        caches.open("static").then((cache)=>{
            return cache.addAll(['./','./style.css','./images/64.webp','./images/512.jpg'])
        })
    )

})


self.addEventListener('fetch',e=>{
    e.respondeWith(
        caches.match(e.request).then((response)=>{
            return response || fetch(e.request)
        })
    )
})