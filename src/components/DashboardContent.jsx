import TabBar from "./TabBar";
import Sidebar from "./SideBar";

const DashboardContent = ({ title, children }) => {
  return (
    <div className="flex flex-col min-h-screen pt-300 pb-19 pl-200 pr-200 md:pb-26.5 xl:ml-75 xl:pl-500 xl:pr-500 xl:pt-400 xl:pb-400">
      <header className="mb-400">
        <h1 className="text-preset-1">{title}</h1>
      </header>
      <main className="flex-1">{children}</main>
      <Sidebar />
      <TabBar />
    </div>
  );
};

export default DashboardContent;
