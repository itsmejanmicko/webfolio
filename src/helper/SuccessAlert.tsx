import { AlertTitle } from "../components/ui/alert";


export default function SuccessAlert() {
  return (
    <div className="z-50 text-md fixed bottom-5 right-5 p-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded shadow-md">
    <AlertTitle>Email successfully copied to clipboard!</AlertTitle>
  </div>
  )
}
