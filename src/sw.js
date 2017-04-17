// self.addEventListener('push', event => {
//   var dataPromise
//   if (data in event) {
//     dataPromise = Promise.resolve(event.data.json())
//   } else {
//     dataPromise = fetch('notification/end/point/data.json')
//       .then(response => {
//         return response.json()
//       })
//   }

//   event.waitUntil(
//     dataPromise
//       .then(msgData => {
//         // Now tell the user.
//         return self.registration.showNotification(msgData.title, {
//           // Whether you show data and how much you show depends on
//           // content of the data itself.
//           body: event.data.body,
//           icon: 'images/icon.png'
//         })
//       })
//   )
// })

self.addEventListener('offline', console.log)
self.addEventListener('online', console.log)

self.addEventListener('message', console.log)

self.addEventListener('push', function (event) {
  console.log('push')
  // event.waitUntil(
  //   self.self.registration.showNotification("发布新文章啦", {
  //     body: "有新文章发布啦,点击查看。"
  //   })
  // )
})
self.addEventListener('notificationclick', console.log)
self.addEventListener('notificationclose', console.log)

self.addEventListener('error', console.log)
self.addEventListener('unhandledrejection', console.log)

self.addEventListener('beforeinstallprompt', console.log)
