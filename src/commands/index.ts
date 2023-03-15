//@ts-nocheck
import type grapesjs from "grapesjs";
import { RequiredPluginOptions } from "..";

import openImport from "./openImport";
import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear,
  cmdSvelteWayCodeEditor,
  cmdSvelteWayPageManager,
  cmdSvelteWayStore,
  cmdSvelteWayMethods,
} from "./../consts";

export default (editor: grapesjs.Editor, config: RequiredPluginOptions) => {
  const { Commands } = editor;
  const txtConfirm = config.textCleanCanvas;
  Commands.add(cmdImport, openImport(editor, config));
  Commands.add(cmdDeviceDesktop, {
    run: (ed) => ed.setDevice("Desktop"),
    stop: () => {},
  });
  Commands.add(cmdDeviceTablet, {
    run: (ed) => {
      const currentDevice = window.localStorage.getItem("device");
      if (!currentDevice) {
        window.localStorage.setItem("device", "Tablet");
        ed.setDevice("Tablet");
      } else if (currentDevice == "Tablet") {
        window.localStorage.setItem("device", "Mobile");
        ed.setDevice("Mobile portrait");
      } else if (currentDevice == "Mobile") {
        window.localStorage.setItem("device", "Desktop");
        ed.setDevice("Desktop");
      } else if (currentDevice == "Desktop") {
        window.localStorage.setItem("device", "Tablet");
        ed.setDevice("Tablet");
      }
    },
  });
  Commands.add(cmdDeviceMobile, {
    run: (ed) => ed.setDevice("Mobile portrait"),
    stop: () => {},
  });
  Commands.add(
    cmdClear,
    (e) => confirm(txtConfirm) && e.runCommand("core:canvas-clear")
  );
  Commands.add(cmdSvelteWayCodeEditor, {
    run: (ed) => {
      ed.Modal.open({
        title: 'Svelteway Code Manager',
        content: `<h1>Hello My Good Code Editor World!</h1>`,
        attributes: { class: 'svelteway-code-manager' },
      });
    },
    stop: (ed) => {
      ed.Modal.close()
    }
  })
  Commands.add(cmdSvelteWayPageManager, {
    run: (ed) => {
      ed.Modal.open({
        title: 'Svelteway Page Manager',
        content: `<h1>Hello My Good Page Manager World!</h1>`,
        attributes: { class: 'svelteway-code-manager' },
      });
    },
    stop: (ed) => {
      ed.Modal.close()
    }
  })
  Commands.add(cmdSvelteWayStore, {
    run: (ed) => {
      ed.Modal.open({
        title: 'Svelteway Store Manager',
        content: `<h1>Hello My Good Store Manager World!</h1>`,
        attributes: { class: 'svelteway-code-manager' },
      });
    },
    stop: (ed) => {
      ed.Modal.close()
    }
  })
  Commands.add(cmdSvelteWayMethods, {
    run: (ed) => {
      ed.Modal.open({
        title: 'Svelteway Methods Manager',
        content: `<h1>Hello My Good Store Manager World!</h1>`,
        attributes: { class: 'svelteway-code-manager' },
      });
    },
    stop: (ed) => {
      ed.Modal.close()
    }
  })
};
