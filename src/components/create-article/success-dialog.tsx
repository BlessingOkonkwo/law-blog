import { useEffect, useRef } from "react";
import Button from "../shared/controls/button";

interface IProps {
  openModal: boolean;
  closeModal: () => void;
}

const SuccessDialog = ({openModal, closeModal}: IProps) => {
    const modalRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (openModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [openModal]);
  return (
    <dialog onCancel={closeModal} ref={modalRef} className="rounded-lg border">
      <div className="rounded-lg border h-40 p-4 flex flex-col items-center justify-center gap-4">
        <p className="font-semibold text-[#6657e5]">
          Article submitted successfully
        </p>
        <Button
          size="sm"
          onClick={closeModal}
        >
          Close
        </Button>
      </div>
    </dialog>
  );
};

export default SuccessDialog;
