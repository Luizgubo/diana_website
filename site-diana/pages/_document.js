import Document, { Html, Head, Main, NextScript } from 'next/document'
import {AuthProvider, useAuth} from '../contexts/AuthContext'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <AuthProvider>
          <body className='bg-neutral-800' style={{backgroundColor:"#211f20"}}>
            <Main />
            <NextScript />
          </body>
        </AuthProvider>
      </Html>
    )
  }
}

export default MyDocument