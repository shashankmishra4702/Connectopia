// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;





// STARTER CODE FOR THIS FILE
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";


// ADDED SIDEBAR FUNCTIONALITY

const Sidebar = () => {
  // Define CSS animations
  const fadeInKeyframes = `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  // Inline styles for animations
  const conversationListStyle = {
    overflow: 'auto',
    animation: 'fadeIn 0.5s ease-in-out',
  };

  // Render Sidebar component
  return (
    <>
      {/* Inject CSS animation */}
      <style>{fadeInKeyframes}</style>
      <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <div className='divider px-3'></div>
        {/* Apply animation inline */}
        <div className="conversation-list" style={conversationListStyle}>
          <Conversations />
        </div>
        <LogoutButton />
      </div>
    </>
  );
};

export default Sidebar;


//className='border-r border-slate-500 p-4 flex flex-col'