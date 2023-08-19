// SearchBar will be client rendered --> due to useSearchParams
// import { Suspense } from 'react'
// import SearchBar from './search-bar'
 
// // This component passed as a fallback to the Suspense boundary
// // will be rendered in place of the search bar in the initial HTML.
// // When the value is available during React hydration the fallback
// // will be replaced with the `<SearchBar>` component.
// function SearchBarFallback() {
//   return <>placeholder</>
// }
 
// export default function Page() {
//   return (
//     <>
//       <nav>
//         <Suspense fallback={<SearchBarFallback />}>
//           <SearchBar />
//         </Suspense>
//       </nav>
//       <h1>Dashboard</h1>
//     </>
//   )
// }


// When using dynamic rendering, the client component will be both statically rendered and client rendered
import Links from '../components/links'
import SearchBar from './search-bar'
 
export const dynamic = 'force-dynamic'
 
export default function Page() {
  return (
    <>
      <nav>
        <SearchBar />
      </nav>
      <h1>Dashboard</h1>
      <Links />
    </>
  )
}