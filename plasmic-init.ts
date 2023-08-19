import {
  PlasmicCanvasContext,
  initPlasmicLoader,
} from "@plasmicapp/loader-nextjs";
import SplineComponent from "./components/SplineComponent";
import Loader from "./components/Loader";
import SocialProvider from "./components/SocialProvider";
import MenuViewerMobile from "./components/MenuViewerMobile";
import { NavMenu } from "./components/NavMenu/NavMenu";
import NavLink from "./components/NavLink";
import Footer from "./components/Footer";
import MenuViewer from "./components/MenuViewer/MenuViewer";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "3kyUmnLZcf7zNa3ZS6ECYP",
      token:
        "5ktSYu3QqM4tlBNzGHiM2Z20ufXKmNJFjSlsLKyTQwLOd1vDeHsGDZ3slVyAMsGDpKI7ztaHF8lwyPEkHHaA",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
PLASMIC.registerComponent(SplineComponent, {
  name: "SplineComponent",
  props: { className: "string", scene: "string" },
});
PLASMIC.registerComponent(Loader, {
  name: "Loader",
  props: { className: "string" },
});
PLASMIC.registerComponent(SocialProvider, {
  name: "SocialProvider",
  props: { className: "string", containerId: "string", feedId: "string" },
});
PLASMIC.registerComponent(MenuViewerMobile, {
  name: "MenuViewerMobile",
  props: { className: "string" },
});
PLASMIC.registerComponent(MenuViewer, {
  name: "MenuViewer",
  props: { className: "string" },
});
PLASMIC.registerComponent(NavLink, {
  name: "NavLink",
  props: { className: "string", path: "string", label: "string" },
});
PLASMIC.registerComponent(NavMenu, {
  name: "NavMenu",
  props: {
    menuColor: "string",
    children: {
      type: "slot",
      allowedComponents: ["NavLink"],
      defaultValue: [
        {
          type: "component",
          name: "NavLink",
          props: { path: "/", label: "Home" },
        },
      ],
    },
    brandImage: {
      type: "slot",
    },
  },
});
PLASMIC.registerComponent(Footer, {
  name: "Footer",
  props: {
    children: {
      type: "slot",
      allowedComponents: ["NavLink"],
      defaultValue: [
        {
          type: "component",
          name: "NavLink",
          props: { path: "/", label: "Home" },
        },
      ],
    },
    copyright: "string",
  },
});
