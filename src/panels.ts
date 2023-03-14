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
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  stroke="none">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
      `,
        },
        {
          id: cmdDeviceTablet,
          command: cmdDeviceTablet,
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  stroke="none">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
        </svg>
        `,
        },
        {
          id: cmdDeviceMobile,
          command: cmdDeviceMobile,
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  stroke="none">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
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
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  stroke="none" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
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
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  stroke="none">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        `,
        },
        {
          id: ful,
          command: ful,
          context: ful,
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  stroke="none" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <polyline points="16 4 20 4 20 8" />
          <line x1="14" y1="10" x2="20" y2="4" />
          <polyline points="8 20 4 20 4 16" />
          <line x1="4" y1="20" x2="10" y2="14" />
        </svg>`,
        },
        {
          id: "undo",
          command: () => editor.runCommand("core:undo"),
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  stroke="none">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
        `,
        },
        {
          id: "redo",
          command: () => editor.runCommand("core:redo"),
          label: `<svg  ${iconStyle} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  stroke="none">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
        </svg>`,
        },
        {
          id: cmdClear,
          command: () => editor.runCommand(cmdClear),
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  stroke="none">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
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
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  stroke="none" class="w-6 h-6">
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
