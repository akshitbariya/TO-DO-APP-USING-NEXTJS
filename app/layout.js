
import "../styles/app.scss"
import Header from './Header'
import { ContextProvider } from '@/components/Client'
export const metadata = {
  title: "Todo App",
  description: "This is a Todo App Project made for Next.js series",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <>
            <Header />
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  );
}