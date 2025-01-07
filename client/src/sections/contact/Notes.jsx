import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const Notes = () => {
  const [copyMessages, setCopyMessages] = useState({
    vedas: false,
    tanias: false,
  });

  const handleCopy = (email, type) => {    
    navigator.clipboard.writeText(email).then(() => {
      setCopyMessages(prev => ({
        ...prev,
        [type]: true
      }));

      setTimeout(() => {
        setCopyMessages(prev => ({
          ...prev,
          [type]: false
        }));
      }, 2000)
    })
  }

  return (
    <aside className="screen800 blur-2 mx-auto p-4">
      <div className="flex flex-col items-end gap-2">
        <div className="flex flex-col items-start w-full">
          <h1 className="font-ff-3 text-3xl text-fc-3">
            Follow up with us
          </h1>
          <p className="font-ff-1 text-fc-3 text-lg">
            If you don&apos;t hear about us within two business days after submitting
            your inquiry, feel free to contact us directly at:
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 w-full">
          {/* vedas email */}
          <div className="flex gap-x-1 items-center">
            <button
              onClick={() => handleCopy('vedasfilms@gmail.com', 'vedas')}
              className="wh-fit text-acc-1"
            >
              <FaCopy size={16}/>
            </button>
            <p className="email">
              vedasfilms@gmail.com
            </p>

            {copyMessages.vedas && (
              <div
                className='show copy-message'
              >
                vedas email copied
              </div>
            )}
          </div>
          {/* tanias email */}
          <div className="flex gap-x-1 items-center">
            <button
              onClick={() => handleCopy('thaniagutti@gmail.com' , 'tanias')}
              className="wh-fit text-acc-1"
            >
              <FaCopy size={16}/>
            </button>
            <p className="email">
              thaniagutti@gmail.com
            </p>

            {copyMessages.tanias && (
              <div
                className='show copy-message'
              >
                tanias email copied
              </div>
            )}
          </div>
        </div>
        <div className="font-ff-1 text-fc-3 text-end flex gap-1 max-sm:flex-col">
          <p className="text-base">
            Thank You!
          </p>
          <p className="text-base">
            Can&apos;t wait to hear about you!
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Notes;
