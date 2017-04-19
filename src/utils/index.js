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

export function copyToClipboard (text) {
  let span = document.createElement('span')
  let result = false
  let range = document.createRange()

  span.innerText = text

  document.body.appendChild(span)

  range.selectNode(span)

  window.getSelection().addRange(range)

  try {
    result = document.execCommand('copy')
  } catch (err) {
    console.log(err)
  }

  window.getSelection().removeAllRanges()

  document.body.removeChild(span)

  return result
}
