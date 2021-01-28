import { ReactNode } from 'react'
import { Layout } from '../../components'

const AuthTemplate = ({ children }: { children: ReactNode}) => (
  <Layout>
    <main className="bg-gray-200 flex h-screen">
      <div className="m-auto bg-white px-10 py-16 rounded-lg">
        <div className="mx-8">
          { children }
        </div>
      </div>
    </main>
  </Layout>
)

export default AuthTemplate