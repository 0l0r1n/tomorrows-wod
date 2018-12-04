import h2p from 'html2plaintext'

export default post => {
    return h2p(post.content)
}