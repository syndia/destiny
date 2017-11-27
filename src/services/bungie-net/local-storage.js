const INVENTORY = '$inventory'
const FILTERS = '$filters'
const LOCAL_STORAGE_ACCOUNT = '$account'
const LOCAL_STORAGE_AUTH = '$auth'

function get(key, defaultValue) {
  const value = localStorage.getItem(key)

  if (!value) {
    return defaultValue
  }

  try {
    return JSON.parse(value) || defaultValue
  } catch (error) {
    console.error(`Unable to retrieve ${key} from local storage as JSON:`)
    console.error(error)

    return defaultValue
  }
}

function set(key, data) {
  const stringifiedData = JSON.stringify(data)
  localStorage.setItem(key, stringifiedData)
}

function remove(key) {
  localStorage.removeItem(key)
}

module.exports = {
  get,
  set,
  remove,
}
