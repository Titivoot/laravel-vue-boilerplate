import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const token: HTMLMetaElement | null = document.head!.querySelector('meta[name="csrf-token"]')

if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  // eslint-disable-next-line no-console
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}
