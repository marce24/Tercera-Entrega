const jwt = require ('jsonwebtoken')
const AuthConfig = require ('../infra/auth')

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado'})
    }
    
    try {
        const verified = jet.verify(token, AuthConfig.secret)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).json( {error: 'El Token no es válido'})
    }
}

module.exports = { verifyToken }