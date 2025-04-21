// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className='text-center py-8 text-sm text-muted-foreground'> 
//         © 2025 TuneBridge. Made with ❤️ for music lovers.
//     </footer>
//   )
// }

// export default Footer
import { TextScramble } from "components/motion-primitives/text-scramble";
export function TextScrambleBasic() {
  return (
    <TextScramble className='font-mono text-sm uppercase items-center justify-center text-center py-8 text-muted-foreground'>
       © 2025 TuneBridge. Made with ❤️ for music lovers by Manjunath.
    </TextScramble>
  );
}
