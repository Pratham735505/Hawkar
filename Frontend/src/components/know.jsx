import React from "react";

const Know = () =>{
    return <div className="items-center">

    <div className="text-center justify-center">
        <span className="text-black text-5xl font-bold font-['Montserrat']">
            Introducing<br/>
            </span>
            <span className="text-sky-500 text-5xl font-bold font-['Montserrat']">
                Hawkar</span>
    </div>



    <div className="text-center text-black font-normal font-['Montserrat']">
        Your one stop destination for all offline needs</div>

<button
  className="
    block mx-auto mt-6
    w-2/3 px-3 py-1 text-xl  /* 📱 default = mobile */
    border border-sky-500 text-sky-500
    font-bold font-['Montserrat'] rounded-md

    sm:w-1/2 sm:text-2xl      /* 📱+ tablets */
    md:w-1/3 md:text-3xl      /* 💻 desktop */
    cursor-pointer
    hover:underline
  "
>
  KNOW MORE
</button>




    </div>;
};


export default Know;