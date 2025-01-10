
export default function OpenMenu({isMenuOpen}: {isMenuOpen: boolean}) {
  return (
   <svg
   xmlns="http://www.w3.org/2000/svg"
   className="h-6 w-6"
   fill="none"
   viewBox="0 0 24 24"
   stroke="currentColor"
 >
   <path
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={2}
     d={
       isMenuOpen
         ? "M6 18L18 6M6 6l12 12"
         : "M4 6h16M4 12h16M4 18h16"
     }
   />
 </svg>
  )
}
