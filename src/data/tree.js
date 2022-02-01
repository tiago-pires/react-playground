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
      label: "France",
      id: "1a5d",
      Icon: HomeIcon,
      to: "/",
   },
   {
      label: "Brazil",
      Icon: UserIcon,
      id: "6a8d",
      to: "/profile",
   },
   {
      label: "Australia",
      Icon: CogIcon,
      id: "6n55",
      to: "/settings",
      children: [
         {
            label: "NSW",
            Icon: UserCircleIcon,
            id: "4cdd",
            to: "account",
         },
         {
            label: "QLD",
            Icon: ShieldCheckIcon,
            id: "1o8n",
            to: "security",
            children: [
               {
                  label: "Gold Coast",
                  Icon: LockOpenIcon,
                  id: "4ddo",
                  to: "credentials",
               },
               {
                  label: "Brisbane",
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
