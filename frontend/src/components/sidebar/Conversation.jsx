
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
	
	return (
		<>

			{/* ADDED HOVER ANIMATIONS HERE */}

			<div
				className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer
					${isSelected ? "bg-orange-500" : "hover:bg-green-500"}
					transition-transform duration-300`}
				style={{
					transition: 'transform 0.3s, background-color 0.3s',
				}}
				onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
				onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
				onClick={() => setSelectedConversation(conversation)}
				>



				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>
			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
			
		</>
	);
};
export default Conversation;
