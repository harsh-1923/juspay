import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import { BellIcon, Refresh, Star } from "../IconSet";
import SidebarSwitcher from "../SidebarSwitcher/SidebarSwitcher";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./DashboardInfobar.css";
import { Drawer } from "vaul";

const DashboardInfobar = () => {
  return (
    <div className="dashboard-infobar-wrapper">
      <div className="">
        <SidebarSwitcher />
        <button className="infobar-button">
          <Star />
        </button>
        <Breadcrumb />
      </div>
      <div>
        <ThemeSwitcher />
        <button className="infobar-button">
          <Refresh />
        </button>
        <InfoPannelSwitcher />
      </div>
    </div>
  );
};

// const SidebarSwitcher = () => {
//   return (
//     <Drawer.Root direction="left">
//       <Drawer.Trigger className="infobar-button">
//         <Sidebar />
//       </Drawer.Trigger>
//       <Drawer.Portal>
//         <Drawer.Overlay className="fixed inset-0 bg-black/40" />
//         <Drawer.Content className="left-0 top-0 bottom-0 fixed z-10 flex outline-none">
//           <div className="bg-zinc-50 rounded-[16px] w-[250px] grow mt-2 ml-2 mb-2 p-5 flex flex-col">
//             <div className="max-w-md mx-auto">
//               <Drawer.Title className="font-medium mb-2 text-zinc-900">
//                 It supports all directions.
//               </Drawer.Title>
//               <Drawer.Description className="text-zinc-600 mb-2">
//                 This one specifically is not touching the edge of the screen,
//                 but that&apos;s not required for a side drawer.
//               </Drawer.Description>
//             </div>
//           </div>
//         </Drawer.Content>
//       </Drawer.Portal>
//     </Drawer.Root>
//   );
// };

const InfoPannelSwitcher = () => {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className="infobar-button">
        <BellIcon />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="right-0 top-0 bottom-0 fixed z-10 flex outline-none">
          <div className="bg-zinc-50 rounded-[16px] w-[250px] grow mt-2 mr-2 mb-2 p-5 flex flex-col">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-2 text-zinc-900">
                It supports all directions.
              </Drawer.Title>
              <Drawer.Description className="text-zinc-600 mb-2">
                This one specifically is not touching the edge of the screen,
                but that&apos;s not required for a side drawer.
              </Drawer.Description>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
export default DashboardInfobar;
