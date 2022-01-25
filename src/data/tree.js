import {
   HomeIcon,
   UserIcon,
   CogIcon,
   UserCircleIcon,
   ShieldCheckIcon,
   LockOpenIcon,
   DeviceMobileIcon,
} from "@heroicons/react/outline";

const treeData = [
   {
      label: "Home",
      id: "1a5d",
      Icon: HomeIcon,
      to: "/",
   },
   {
      label: "Profile",
      Icon: UserIcon,
      id: "6a8d",
      to: "/profile",
   },
   {
      label: "Settings",
      Icon: CogIcon,
      id: "6n55",
      to: "/settings",
      children: [
         {
            label: "Account",
            Icon: UserCircleIcon,
            id: "4cdd",
            to: "account",
         },
         {
            label: "Security",
            Icon: ShieldCheckIcon,
            id: "1o8n",
            to: "security",
            children: [
               {
                  label: "Credentials",
                  Icon: LockOpenIcon,
                  id: "4ddo",
                  to: "credentials",
               },
               {
                  label: "2-FA",
                  Icon: DeviceMobileIcon,
                  id: "6od6",
                  to: "2fa",
               },
            ],
         },
      ],
   },
];

export default treeData;
