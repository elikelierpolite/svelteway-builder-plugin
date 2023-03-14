//@ts-nocheck
import type grapesjs from "grapesjs";
import { RequiredPluginOptions } from ".";

import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear,
} from "./consts";

export default (editor: grapesjs.Editor, opts: RequiredPluginOptions) => {
  const { Panels } = editor;
  const config = editor.getConfig();
  const swv = "sw-visibility";
  const expt = "export-template";
  const osm = "open-sm";
  const otm = "open-tm";
  const ola = "open-layers";
  const obl = "open-blocks";
  const ful = "fullscreen";
  const prv = "preview";
  const iconStyle = 'style="display: block; max-width:22px"';

  // @ts-ignore
  config.showDevices = false;

  Panels.getPanels().reset([
    {
      id: "commands",
      buttons: [{}],
    },
    {
      id: "devices-c",
      buttons: [
        {
          id: cmdDeviceDesktop,
          command: cmdDeviceDesktop,
          active: true,
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <rect x="3" y="4" width="18" height="12" rx="1" />
          <line x1="7" y1="20" x2="17" y2="20" />
          <line x1="9" y1="16" x2="9" y2="20" />
          <line x1="15" y1="16" x2="15" y2="20" />
        </svg>`,
        },
        {
          id: cmdDeviceTablet,
          command: cmdDeviceTablet,
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <circle cx="12" cy="17" r="1" />
        </svg>`,
        },
        {
          id: cmdDeviceMobile,
          command: cmdDeviceMobile,
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <rect x="7" y="4" width="10" height="16" rx="1" />
          <line x1="11" y1="5" x2="13" y2="5" />
          <line x1="12" y1="17" x2="12" y2="17.01" />
        </svg>`,
        },
      ],
    },
    {
      id: "options",
      buttons: [
        {
          id: swv,
          command: swv,
          context: swv,
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-border-none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="4" y1="4" x2="4" y2="4.01" />
          <line x1="8" y1="4" x2="8" y2="4.01" />
          <line x1="12" y1="4" x2="12" y2="4.01" />
          <line x1="16" y1="4" x2="16" y2="4.01" />
          <line x1="20" y1="4" x2="20" y2="4.01" />
          <line x1="4" y1="8" x2="4" y2="8.01" />
          <line x1="12" y1="8" x2="12" y2="8.01" />
          <line x1="20" y1="8" x2="20" y2="8.01" />
          <line x1="4" y1="12" x2="4" y2="12.01" />
          <line x1="8" y1="12" x2="8" y2="12.01" />
          <line x1="12" y1="12" x2="12" y2="12.01" />
          <line x1="16" y1="12" x2="16" y2="12.01" />
          <line x1="20" y1="12" x2="20" y2="12.01" />
          <line x1="4" y1="16" x2="4" y2="16.01" />
          <line x1="12" y1="16" x2="12" y2="16.01" />
          <line x1="20" y1="16" x2="20" y2="16.01" />
          <line x1="4" y1="20" x2="4" y2="20.01" />
          <line x1="8" y1="20" x2="8" y2="20.01" />
          <line x1="12" y1="20" x2="12" y2="20.01" />
          <line x1="16" y1="20" x2="16" y2="20.01" />
          <line x1="20" y1="20" x2="20" y2="20.01" />
        </svg>`,
        },
        {
          id: prv,
          context: prv,
          command: () => editor.runCommand(prv),
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="12" cy="12" r="2" />
          <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
        </svg>`,
        },
        {
          id: ful,
          command: ful,
          context: ful,
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>`,
        },
        {
          id: "undo",
          command: () => editor.runCommand("core:undo"),
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
        </svg>`,
        },
        {
          id: "redo",
          command: () => editor.runCommand("core:redo"),
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-forward-up" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1" />
        </svg>`,
        },
        {
          id: cmdClear,
          command: () => editor.runCommand(cmdClear),
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>`,
        },
      ],
    },
    {
      id: "views",
      buttons: [
        {
          id: osm,
          command: osm,
          active: true,
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>`,
        },
        {
          id: otm,
          command: otm,
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
      </svg>`,
        },
        {
          id: ola,
          command: ola,
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
      </svg>`,
        },
        {
          id: obl,
          command: obl,
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
      </svg>`,
        },
      ],
    },
  ]);

  const openBl = Panels.getButton("views", obl);
  editor.on("load", () => openBl?.set("active", true));

  // On component change show the Style Manager
  opts.showStylesOnChange &&
    editor.on("component:selected", () => {
      const openSmBtn = Panels.getButton("views", osm);
      const openLayersBtn = Panels.getButton("views", ola);

      // Don't switch when the Layer Manager is on or
      // there is no selected component
      if (
        (!openLayersBtn || !openLayersBtn.get("active")) &&
        editor.getSelected()
      ) {
        openSmBtn?.set("active", true);
      }
    });
};
