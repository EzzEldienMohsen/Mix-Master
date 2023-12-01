import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  About,
  HomeLayout,
  Landing,
  CockTail,
  Error,
  NewSletter,
  SinglePageError,
} from './Pages'
import { loader as LandingLoader } from './Pages/Landing'
import { loader as LoaderCocktail } from './Pages/CockTail'
import { action as newsLetterAction } from './Pages/NewSletter'
var queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})
var router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: LandingLoader(queryClient),
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        element: <CockTail />,
        loader: LoaderCocktail(queryClient),
      },
      {
        path: 'newsletter',
        element: <NewSletter />,
        action: newsLetterAction,
      },
      {
        path: 'about',
        element: (
          <div>
            <About />
          </div>
        ),
      },
    ],
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default App
