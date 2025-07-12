import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './views/App.tsx'

type Message = {
    email: string
    name: string
    subject: string
    preview: string  
}

let log = (message: unknown) => console.log('[CRXJS]', message)

function readFeed() {

let feed = Array.from(document.querySelectorAll("#MailList > div > div > div > div > div > div > div > div"))

let messages: Message[] = []

feed.forEach(el => {
  const message = {
    email: '',
    name: '',
    subject: '',
    preview: ''
  }

  const sender = el.querySelector<HTMLSpanElement>("div.JBWmn.gy2aJ.CYQyC.Ejrkd > span")
  const subject = el.querySelector<HTMLSpanElement>("div > div > div > div > div.XG5Jd.TszOG > div.S2NDX > div.zht_v.Q19mi > div > span")
  const preview = el.querySelector<HTMLSpanElement>("div > div > div > div > div.XG5Jd.TszOG > div.S2NDX > div.tAtdo.XG5Jd > div > div > span")

  if (!sender || !subject || !preview) return


  message.email = sender.title
  message.name = sender.innerText
  message.subject = subject.innerText
  message.preview = preview.innerText

  messages.push(message)
})

log(messages)
}

readFeed()

const container = document.createElement('div')
container.id = 'crxjs-app'
document.body.appendChild(container)
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
