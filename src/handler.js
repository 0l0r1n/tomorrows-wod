import fetch from './fetch'
import notify from './notify'

const execute = async (event, context, callback) => {
  try {
    const messageBody = await fetch()
    console.log(messageBody)
    notify(messageBody)
    callback(null, { statusCode: 204 })
  } catch(e) {
    callback(e)
  }
}

export { execute }