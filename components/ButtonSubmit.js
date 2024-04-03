"use client";


import { useFormStatus } from "react-dom"; 
const ButtonSubmit = ({value}) => {

    const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
      {pending ? "하는 중.." : value }
    </button>
  );
};

export default ButtonSubmit;
