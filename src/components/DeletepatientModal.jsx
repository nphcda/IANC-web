import React from "react";
import { motion } from "framer-motion";

const DeletepatientModal = ({ setShowdelete, deletePatient }) => {
  return (
    <div className="h-screen w-screen fixed z-[777] bg-[rgba(0,0,0,0.3)] flex items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="w-[90%] md:w-[70%] lg:w-[50%] min-h-[200px] flex flex-col items-center justify-center rounded-lg bg-white shadow-md"
      >
        <div className="flex w-full items-center justify-center">
          <div className="w-[80px] h-[80px] flex items-center justify-center">
            <img
              src="/images/Logo.png"
              alt="logo"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
        <div className="">
          <p className="text-[18px]">
            Are you sure you want to Delete Patient Records?
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <button
              onClick={() => setShowdelete(false)}
              className="border border-[#5a5b5c] min-w-[100px] text-[#5a5b5c] p-2 font-[500]"
            >
              Exit
            </button>
            <button
              onClick={deletePatient}
              className="text-white bg-primary70 min-w-[100px] p-2 font-[500]"
            >
              Confirm
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DeletepatientModal;
