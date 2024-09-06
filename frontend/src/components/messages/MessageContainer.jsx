import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {

    const { selectedConversation, setSelectedConversation } = useConversation();
	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
                <NoChatSelected/>
            ) : (
                <>
				{/* Header */}
				<div className='bg-slate-500 px-4 py-2 mb-2'>
					<span className='label-text text-black font-bold'>To:</span> <span className='text-black font-bold'>{selectedConversation.fullName}</span>
				</div>

				<Messages />
				<MessageInput />
			</>
            )}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-blue-200 to-purple-300'>
		<div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-blue-400 to-purple-400'>
		<div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-4 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30'>
			<p className='animate-fade-in'>Welcome 👋 {authUser.fullName} ❄</p>
			<p className='animate-fade-in'>Select a chat to start messaging</p>
			<div className="message highlight">
			<TiMessages className='text-4xl md:text-6xl text-center animate-bounce' />
			</div>
		</div>
		</div>
		</div>


	);
};
