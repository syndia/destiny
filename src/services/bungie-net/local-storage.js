const INVENTORY = '$inventory'
const FILTERS = '$filters'
const ACCOUNT = '$account'
const LOCAL_STORAGE_AUTH = '$auth'

function get(key) {
  return Promise.resolve(JSON.parse(localStorage.getItem(key)))
}

function set(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
  return Promise.resolve(data)
}

function remove(key) {
  localStorage.removeItem(key)
  return Promise.resolve(`Deleted`)
}

module.exports = {
  get,
  set,
  remove,
}
