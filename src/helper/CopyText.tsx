import { useEffect, useState } from "react";

export default function useCopyText() {
  const [success, setSuccess] = useState(false);
  useEffect(()=>{
   const timer = setInterval(()=>{
     setSuccess(false);
   },3000)
   return () => clearInterval(timer)
  }, [success])
  const handleCopy = async () => {
    try {
      const textToCopy = import.meta.env.VITE_APP_OUTLOOK;
      await navigator.clipboard.writeText(textToCopy);
      setSuccess(true); 
    } catch (error) {
      setSuccess(false); 
      console.error("Failed to copy text:", error);
    }
  };

  return { handleCopy, success };
}
