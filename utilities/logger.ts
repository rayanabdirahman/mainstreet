import consola from 'consola'

const logger = {
  success: (message: string) => consola.success({ badge: true, message: `client: ${message}` }),
  error: (message: string) => consola.error({ badge: true, message: `client: ${message}` })
}

export default logger
