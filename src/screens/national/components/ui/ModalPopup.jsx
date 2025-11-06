import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const ModalPopup = ({ isOpen, onOpenChange, children, onClose }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <Dialog.Content className="fixed w-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EEFFF9] p-6 rounded-lg">
          <div className="mt-4 max-h-screen overflow-y-scroll">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalPopup;
