import messagebird from 'messagebird'

const { messagebird_access_key, my_phone_no } = process.env;

const client = messagebird(messagebird_access_key)

const sendMessage = async message => {
    return new Promise((resolve, reject) => {
        client.messages.create(message, (err, result) => err ? reject(err) : resolve(result))
    })
}

export default async messageBody => {
    const message = {
        originator: 'CrossFit Amsterdam',
        recipients: my_phone_no,
        body: messageBody,
    }
    sendMessage(message)
}