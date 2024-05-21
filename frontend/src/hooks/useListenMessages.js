import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
        //Question mark here help in case when our socket is empty so that out application dont crash
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});
        //This line is important as if this would not be there then we will listen notification sound not one time but equal to number of users on our app
		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;