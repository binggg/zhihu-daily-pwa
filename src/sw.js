import { imgURLFilter } from './filters'
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

self.addEventListener('message', function (event) {
  const {
    data: {
      type,
      icon
    }
  } = event

  switch (type) {
    case 'finish_offline':
      self.self.registration.showNotification('知乎日报 PWA', {
        icon,
        body: '离线完成 ✅, 没网时也可以愉快地阅读了～ '
      })
      break
  }
})

self.addEventListener('push', function (event) {
  console.log('push')
// event.waitUntil(
//   self.self.registration.showNotification("发布新文章啦", {
//     body: "有新文章发布啦,点击查看。"
//   })
// )
})

self.addEventListener('notificationclick', function (event) {
  console.log('[Service Worker] Notification click Received.')

  event.notification.close()

  event.waitUntil(
    clients.openWindow('https://zh.zhaobing.site')
  )
})
self.addEventListener('notificationclose', console.log)

self.addEventListener('error', console.log)
self.addEventListener('unhandledrejection', console.log)

self.addEventListener('beforeinstallprompt', console.log)

/**
 * 定时通知用户
 */
const timePoints = [ 8, 12, 22]
setInterval(checkUpdate, 60 * 60 * 1000)

function checkUpdate () {
  var nowHour = new Date().getHours()

  if (timePoints.indexOf(nowHour)) {
    fetch('https://zh.zhaobing.site/api/zhihu/4/news/latest')
      .then(res => res.json())
      .then((data) => {
        let icon = ''
        let body = '📰 为您推荐的日报新鲜出炉啦'
        try {
          let story = data.stories[0]
          icon = imgURLFilter(story.images[0])
          body = story.title
        } catch (e) {}
        return { icon, body }
      })
      .then(({ icon, body }) => {
        self.registration.showNotification('知乎日报 PWA', {
          body,
          icon
        })
      })
  }
}
