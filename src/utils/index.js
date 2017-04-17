export const padStr = (str, len, char = ' ', left = true) => {
  const strLen = String(str).length
  const chars = len - strLen > 0 ? String(char).repeat(len - strLen) : ''
  if (left) {
    return chars + str
  } else {
    return str + chars
  }
}

export function postMessage (msg) {
  const controller = navigator.serviceWorker.controller

  if (!controller) return

  controller.postMessage(msg)
}
