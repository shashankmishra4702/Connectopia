import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-primary-content transition-transform duration-300 ease-in-out hover:scale-104 hover:bg-secondary-content'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;