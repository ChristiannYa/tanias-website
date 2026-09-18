import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const Notes = () => {
    const [copyMessages, setCopyMessages] = useState({
        vedas: false,
        tanias: false,
    });

    const handleCopy = (email, type) => {
        navigator.clipboard.writeText(email).then(() => {
            setCopyMessages((prev) => ({
                ...prev,
                [type]: true,
            }));

            setTimeout(() => {
                setCopyMessages((prev) => ({
                    ...prev,
                    [type]: false,
                }));
            }, 2000);
        });
    };

    return (
        <aside className="screen800 mx-auto p-4">
            <div className="flex flex-col items-end gap-2">
                <div className="flex flex-col items-end gap-1 w-full">
                    {/* tanias email */}
                    <div className="flex gap-x-1 items-center">
                        <button
                            onClick={() =>
                                handleCopy("thaniagutti@gmail.com", "tanias")
                            }
                            className="wh-fit text-acc-1"
                        >
                            <FaCopy size={16} />
                        </button>
                        <p className="email">thaniagutti@gmail.com</p>

                        {copyMessages.tanias && (
                            <div className="show copy-message">
                                tanias email copied
                            </div>
                        )}
                    </div>
                </div>
                <div className="font-ff-1 text-fc-3 text-end flex gap-1 max-sm:flex-col">
                    <p className="text-base">Thank You!</p>
                    <p className="text-base">
                        Can&apos;t wait to hear about you!
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default Notes;
