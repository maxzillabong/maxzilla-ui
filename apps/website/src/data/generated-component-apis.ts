// Auto-generated component API definitions
// Generated on 2025-09-15T07:21:12.183Z
// Run 'npm run generate:api-docs' to regenerate

export interface ComponentAPIData {
  properties: Property[]
  events: Event[]
  slots: Slot[]
  cssProperties: CSSProperty[]
  parts: Part[]
}

interface Property {
  name: string
  type: string
  default: string
  description: string
  category: string
}

interface Event {
  name: string
  description: string
  detail: string
}

interface Slot {
  name: string
  description: string
}

interface CSSProperty {
  name: string
  description: string
  default: string
}

interface Part {
  name: string
  description: string
}

export const generatedComponentAPIs: Record<string, ComponentAPIData> = {
  "accordion": {
    "properties": [
      {
        "name": "header",
        "type": "s",
        "default": "undefined",
        "description": "Header property",
        "category": "general"
      },
      {
        "name": "open",
        "type": "boolean",
        "default": "false",
        "description": "Open property",
        "category": "state"
      }
    ],
    "events": [
      {
        "name": "mz-change",
        "description": "Fired when change occurs",
        "detail": "Event"
      }
    ],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "alert": {
    "properties": [
      {
        "name": "variant",
        "type": "\"",
        "default": "undefined",
        "description": "Variant property",
        "category": "appearance"
      },
      {
        "name": "dismissible",
        "type": "boolean",
        "default": "false",
        "description": "Dismissible property",
        "category": "general"
      },
      {
        "name": "title",
        "type": "any",
        "default": "''",
        "description": "Title property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "icon",
        "description": "Icon slot"
      },
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "avatar": {
    "properties": [
      {
        "name": "src",
        "type": "any",
        "default": "''",
        "description": "Src property",
        "category": "general"
      },
      {
        "name": "alt",
        "type": "any",
        "default": "''",
        "description": "Alt property",
        "category": "general"
      },
      {
        "name": "initials",
        "type": "any",
        "default": "''",
        "description": "Initials property",
        "category": "general"
      },
      {
        "name": "size",
        "type": "S",
        "default": "undefined",
        "description": "Size property",
        "category": "appearance"
      },
      {
        "name": "shape",
        "type": "\"",
        "default": "undefined",
        "description": "Shape property",
        "category": "general"
      },
      {
        "name": "status",
        "type": "\"",
        "default": "undefined",
        "description": "Status property",
        "category": "general"
      },
      {
        "name": "interactive",
        "type": "boolean",
        "default": "false",
        "description": "Interactive property",
        "category": "general"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "undefined",
        "description": "Aria Label property",
        "category": "general"
      },
      {
        "name": "decorative",
        "type": "boolean",
        "default": "false",
        "description": "Decorative property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [
      {
        "name": "--avatar-size",
        "description": "Custom property for avatar size",
        "default": "inherit"
      },
      {
        "name": "--avatar-font-size",
        "description": "Custom property for avatar font size",
        "default": "inherit"
      },
      {
        "name": "--avatar-border-radius",
        "description": "Custom property for avatar border radius",
        "default": "inherit"
      },
      {
        "name": "--avatar-border-width",
        "description": "Custom property for avatar border width",
        "default": "inherit"
      },
      {
        "name": "--avatar-border-color",
        "description": "Custom property for avatar border color",
        "default": "inherit"
      }
    ],
    "parts": []
  },
  "badge": {
    "properties": [
      {
        "name": "variant",
        "type": "V",
        "default": "undefined",
        "description": "Variant property",
        "category": "appearance"
      },
      {
        "name": "size",
        "type": "S",
        "default": "undefined",
        "description": "Size property",
        "category": "appearance"
      },
      {
        "name": "dot",
        "type": "boolean",
        "default": "false",
        "description": "Dot property",
        "category": "general"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "undefined",
        "description": "Aria Label property",
        "category": "general"
      },
      {
        "name": "live",
        "type": "boolean",
        "default": "false",
        "description": "Live property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [
      {
        "name": "--badge-padding-x",
        "description": "Custom property for badge padding x",
        "default": "inherit"
      },
      {
        "name": "--badge-padding-y",
        "description": "Custom property for badge padding y",
        "default": "inherit"
      },
      {
        "name": "--badge-font-size",
        "description": "Custom property for badge font size",
        "default": "inherit"
      },
      {
        "name": "--badge-font-weight",
        "description": "Custom property for badge font weight",
        "default": "inherit"
      },
      {
        "name": "--badge-border-radius",
        "description": "Custom property for badge border radius",
        "default": "inherit"
      }
    ],
    "parts": []
  },
  "breadcrumb": {
    "properties": [
      {
        "name": "href",
        "type": "s",
        "default": "undefined",
        "description": "Href property",
        "category": "behavior"
      },
      {
        "name": "current",
        "type": "boolean",
        "default": "false",
        "description": "Current property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "button": {
    "properties": [
      {
        "name": "variant",
        "type": "V",
        "default": "undefined",
        "description": "Variant property",
        "category": "appearance"
      },
      {
        "name": "size",
        "type": "S",
        "default": "undefined",
        "description": "Size property",
        "category": "appearance"
      },
      {
        "name": "type",
        "type": "\"",
        "default": "undefined",
        "description": "Type property",
        "category": "behavior"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false",
        "description": "Disabled property",
        "category": "state"
      },
      {
        "name": "full-width",
        "type": "boolean",
        "default": "false",
        "description": "Full Width property",
        "category": "general"
      },
      {
        "name": "icon-only",
        "type": "boolean",
        "default": "false",
        "description": "Icon Only property",
        "category": "general"
      },
      {
        "name": "loading",
        "type": "boolean",
        "default": "false",
        "description": "Loading property",
        "category": "state"
      },
      {
        "name": "href",
        "type": "any",
        "default": "undefined",
        "description": "Href property",
        "category": "behavior"
      },
      {
        "name": "target",
        "type": "any",
        "default": "undefined",
        "description": "Target property",
        "category": "behavior"
      },
      {
        "name": "rel",
        "type": "any",
        "default": "undefined",
        "description": "Rel property",
        "category": "general"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "undefined",
        "description": "Aria Label property",
        "category": "general"
      },
      {
        "name": "aria-described-by",
        "type": "any",
        "default": "undefined",
        "description": "Aria Described By property",
        "category": "general"
      },
      {
        "name": "aria-pressed",
        "type": "any",
        "default": "undefined",
        "description": "Aria Pressed property",
        "category": "general"
      },
      {
        "name": "aria-expanded",
        "type": "any",
        "default": "undefined",
        "description": "Aria Expanded property",
        "category": "general"
      },
      {
        "name": "aria-controls",
        "type": "any",
        "default": "undefined",
        "description": "Aria Controls property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "start",
        "description": "Start slot"
      },
      {
        "name": "default",
        "description": "Default content slot"
      },
      {
        "name": "end",
        "description": "End slot"
      }
    ],
    "cssProperties": [
      {
        "name": "--button-height",
        "description": "Custom property for button height",
        "default": "inherit"
      },
      {
        "name": "--button-padding-x",
        "description": "Custom property for button padding x",
        "default": "inherit"
      },
      {
        "name": "--button-padding-y",
        "description": "Custom property for button padding y",
        "default": "inherit"
      },
      {
        "name": "--button-font-size",
        "description": "Custom property for button font size",
        "default": "inherit"
      },
      {
        "name": "--button-border-radius",
        "description": "Custom property for button border radius",
        "default": "inherit"
      },
      {
        "name": "--button-transition",
        "description": "Custom property for button transition",
        "default": "inherit"
      }
    ],
    "parts": []
  },
  "card": {
    "properties": [
      {
        "name": "elevation",
        "type": "C",
        "default": "undefined",
        "description": "Elevation property",
        "category": "general"
      },
      {
        "name": "variant",
        "type": "C",
        "default": "undefined",
        "description": "Variant property",
        "category": "appearance"
      },
      {
        "name": "interactive",
        "type": "boolean",
        "default": "false",
        "description": "Interactive property",
        "category": "general"
      },
      {
        "name": "loading",
        "type": "boolean",
        "default": "false",
        "description": "Loading property",
        "category": "state"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false",
        "description": "Disabled property",
        "category": "state"
      },
      {
        "name": "compact",
        "type": "boolean",
        "default": "false",
        "description": "Compact property",
        "category": "general"
      },
      {
        "name": "full-height",
        "type": "boolean",
        "default": "false",
        "description": "Full Height property",
        "category": "general"
      },
      {
        "name": "has-avatar",
        "type": "boolean",
        "default": "false",
        "description": "Has Avatar property",
        "category": "general"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "undefined",
        "description": "Aria Label property",
        "category": "general"
      },
      {
        "name": "aria-described-by",
        "type": "any",
        "default": "undefined",
        "description": "Aria Described By property",
        "category": "general"
      },
      {
        "name": "aria-labelled-by",
        "type": "any",
        "default": "undefined",
        "description": "Aria Labelled By property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "image",
        "description": "Image slot"
      },
      {
        "name": "header",
        "description": "Header slot"
      },
      {
        "name": "default",
        "description": "Default content slot"
      },
      {
        "name": "actions",
        "description": "Actions slot"
      },
      {
        "name": "footer",
        "description": "Footer slot"
      }
    ],
    "cssProperties": [
      {
        "name": "--card-background",
        "description": "Custom property for card background",
        "default": "inherit"
      },
      {
        "name": "--card-border",
        "description": "Custom property for card border",
        "default": "inherit"
      },
      {
        "name": "--card-border-radius",
        "description": "Custom property for card border radius",
        "default": "inherit"
      },
      {
        "name": "--card-padding",
        "description": "Custom property for card padding",
        "default": "inherit"
      },
      {
        "name": "--card-shadow",
        "description": "Custom property for card shadow",
        "default": "inherit"
      },
      {
        "name": "--card-transition",
        "description": "Custom property for card transition",
        "default": "inherit"
      }
    ],
    "parts": []
  },
  "checkbox": {
    "properties": [
      {
        "name": "checked",
        "type": "boolean",
        "default": "false",
        "description": "Checked property",
        "category": "state"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false",
        "description": "Disabled property",
        "category": "state"
      },
      {
        "name": "indeterminate",
        "type": "boolean",
        "default": "false",
        "description": "Indeterminate property",
        "category": "general"
      },
      {
        "name": "label",
        "type": "any",
        "default": "''",
        "description": "Label property",
        "category": "data"
      },
      {
        "name": "name",
        "type": "any",
        "default": "''",
        "description": "Name property",
        "category": "data"
      },
      {
        "name": "value",
        "type": "any",
        "default": "'on'",
        "description": "Value property",
        "category": "data"
      },
      {
        "name": "required",
        "type": "boolean",
        "default": "false",
        "description": "Required property",
        "category": "general"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "''",
        "description": "Aria Label property",
        "category": "general"
      },
      {
        "name": "aria-described-by",
        "type": "any",
        "default": "''",
        "description": "Aria Described By property",
        "category": "general"
      }
    ],
    "events": [
      {
        "name": "mz-change",
        "description": "Fired when change occurs",
        "detail": "Event"
      },
      {
        "name": "mz-input",
        "description": "Fired when input occurs",
        "detail": "Event"
      },
      {
        "name": "mz-focus",
        "description": "Fired when focus occurs",
        "detail": "Event"
      },
      {
        "name": "mz-blur",
        "description": "Fired when blur occurs",
        "detail": "Event"
      },
      {
        "name": "mz-keydown",
        "description": "Fired when keydown occurs",
        "detail": "Event"
      },
      {
        "name": "mz-keyup",
        "description": "Fired when keyup occurs",
        "detail": "Event"
      }
    ],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "container": {
    "properties": [
      {
        "name": "size",
        "type": "\"",
        "default": "undefined",
        "description": "Size property",
        "category": "appearance"
      },
      {
        "name": "centered",
        "type": "boolean",
        "default": "false",
        "description": "Centered property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "datepicker": {
    "properties": [
      {
        "name": "label",
        "type": "any",
        "default": "''",
        "description": "Label property",
        "category": "data"
      },
      {
        "name": "value",
        "type": "any",
        "default": "''",
        "description": "Value property",
        "category": "data"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "undefined",
        "description": "Aria Label property",
        "category": "general"
      },
      {
        "name": "aria-described-by",
        "type": "any",
        "default": "undefined",
        "description": "Aria Described By property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [],
    "cssProperties": [],
    "parts": []
  },
  "divider": {
    "properties": [
      {
        "name": "orientation",
        "type": "\"",
        "default": "undefined",
        "description": "Orientation property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [],
    "cssProperties": [],
    "parts": []
  },
  "drawer": {
    "properties": [
      {
        "name": "open",
        "type": "boolean",
        "default": "false",
        "description": "Open property",
        "category": "state"
      },
      {
        "name": "placement",
        "type": "\"",
        "default": "undefined",
        "description": "Placement property",
        "category": "general"
      },
      {
        "name": "closable",
        "type": "boolean",
        "default": "true",
        "description": "Closable property",
        "category": "general"
      },
      {
        "name": "no-close-button",
        "type": "boolean",
        "default": "false",
        "description": "No Close Button property",
        "category": "general"
      },
      {
        "name": "size",
        "type": "\"",
        "default": "undefined",
        "description": "Size property",
        "category": "appearance"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "''",
        "description": "Aria Label property",
        "category": "general"
      },
      {
        "name": "aria-described-by",
        "type": "any",
        "default": "''",
        "description": "Aria Described By property",
        "category": "general"
      }
    ],
    "events": [
      {
        "name": "mz-show",
        "description": "Fired when show occurs",
        "detail": "Event"
      },
      {
        "name": "mz-after-show",
        "description": "Fired when after show occurs",
        "detail": "Event"
      },
      {
        "name": "mz-drawer-open",
        "description": "Fired when drawer open occurs",
        "detail": "Event"
      },
      {
        "name": "mz-request-close",
        "description": "Fired when request close occurs",
        "detail": "Event"
      },
      {
        "name": "mz-hide",
        "description": "Fired when hide occurs",
        "detail": "Event"
      },
      {
        "name": "mz-drawer-close",
        "description": "Fired when drawer close occurs",
        "detail": "Event"
      },
      {
        "name": "mz-after-hide",
        "description": "Fired when after hide occurs",
        "detail": "Event"
      },
      {
        "name": "mz-drawer-closed",
        "description": "Fired when drawer closed occurs",
        "detail": "Event"
      },
      {
        "name": "mz-overlay-click",
        "description": "Fired when overlay click occurs",
        "detail": "Event"
      },
      {
        "name": "mz-close-button-click",
        "description": "Fired when close button click occurs",
        "detail": "Event"
      }
    ],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "form": {
    "properties": [],
    "events": [],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "grid": {
    "properties": [
      {
        "name": "span",
        "type": "any",
        "default": "12",
        "description": "Span property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "input": {
    "properties": [
      {
        "name": "value",
        "type": "any",
        "default": "''",
        "description": "Value property",
        "category": "data"
      },
      {
        "name": "placeholder",
        "type": "any",
        "default": "''",
        "description": "Placeholder property",
        "category": "data"
      },
      {
        "name": "type",
        "type": "\"",
        "default": "undefined",
        "description": "Type property",
        "category": "behavior"
      },
      {
        "name": "size",
        "type": "S",
        "default": "undefined",
        "description": "Size property",
        "category": "appearance"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false",
        "description": "Disabled property",
        "category": "state"
      },
      {
        "name": "error",
        "type": "boolean",
        "default": "false",
        "description": "Error property",
        "category": "general"
      },
      {
        "name": "success",
        "type": "boolean",
        "default": "false",
        "description": "Success property",
        "category": "general"
      },
      {
        "name": "name",
        "type": "any",
        "default": "''",
        "description": "Name property",
        "category": "data"
      },
      {
        "name": "label",
        "type": "any",
        "default": "''",
        "description": "Label property",
        "category": "data"
      },
      {
        "name": "helper-text",
        "type": "any",
        "default": "''",
        "description": "Helper Text property",
        "category": "general"
      },
      {
        "name": "required",
        "type": "boolean",
        "default": "false",
        "description": "Required property",
        "category": "general"
      },
      {
        "name": "full-width",
        "type": "boolean",
        "default": "false",
        "description": "Full Width property",
        "category": "general"
      },
      {
        "name": "pattern",
        "type": "any",
        "default": "''",
        "description": "Pattern property",
        "category": "general"
      },
      {
        "name": "autocomplete",
        "type": "any",
        "default": "''",
        "description": "Autocomplete property",
        "category": "general"
      },
      {
        "name": "min",
        "type": "any",
        "default": "undefined",
        "description": "Min property",
        "category": "general"
      },
      {
        "name": "max",
        "type": "any",
        "default": "undefined",
        "description": "Max property",
        "category": "general"
      },
      {
        "name": "min-length",
        "type": "any",
        "default": "undefined",
        "description": "Min Length property",
        "category": "general"
      },
      {
        "name": "max-length",
        "type": "any",
        "default": "undefined",
        "description": "Max Length property",
        "category": "general"
      },
      {
        "name": "step",
        "type": "any",
        "default": "undefined",
        "description": "Step property",
        "category": "general"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "default": "false",
        "description": "Readonly property",
        "category": "general"
      },
      {
        "name": "autofocus",
        "type": "boolean",
        "default": "false",
        "description": "Autofocus property",
        "category": "general"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "''",
        "description": "Aria Label property",
        "category": "general"
      },
      {
        "name": "aria-described-by",
        "type": "any",
        "default": "''",
        "description": "Aria Described By property",
        "category": "general"
      },
      {
        "name": "has-prefix",
        "type": "boolean",
        "default": "false",
        "description": "Has Prefix property",
        "category": "general"
      },
      {
        "name": "has-suffix",
        "type": "boolean",
        "default": "false",
        "description": "Has Suffix property",
        "category": "general"
      },
      {
        "name": "validation-type",
        "type": "any",
        "default": "undefined",
        "description": "Validation Type property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "prefix",
        "description": "Prefix slot"
      },
      {
        "name": "suffix",
        "description": "Suffix slot"
      }
    ],
    "cssProperties": [
      {
        "name": "--input-height",
        "description": "Custom property for input height",
        "default": "inherit"
      },
      {
        "name": "--input-padding-x",
        "description": "Custom property for input padding x",
        "default": "inherit"
      },
      {
        "name": "--input-padding-y",
        "description": "Custom property for input padding y",
        "default": "inherit"
      },
      {
        "name": "--input-font-size",
        "description": "Custom property for input font size",
        "default": "inherit"
      },
      {
        "name": "--input-border-radius",
        "description": "Custom property for input border radius",
        "default": "inherit"
      },
      {
        "name": "--input-border",
        "description": "Custom property for input border",
        "default": "inherit"
      },
      {
        "name": "--input-background",
        "description": "Custom property for input background",
        "default": "inherit"
      },
      {
        "name": "--input-transition",
        "description": "Custom property for input transition",
        "default": "inherit"
      }
    ],
    "parts": []
  },
  "loading": {
    "properties": [
      {
        "name": "overlay",
        "type": "boolean",
        "default": "false",
        "description": "Overlay property",
        "category": "general"
      },
      {
        "name": "size",
        "type": "\"",
        "default": "undefined",
        "description": "Size property",
        "category": "appearance"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "'Loading'",
        "description": "Aria Label property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [],
    "cssProperties": [],
    "parts": []
  },
  "modal": {
    "properties": [
      {
        "name": "open",
        "type": "boolean",
        "default": "false",
        "description": "Open property",
        "category": "state"
      },
      {
        "name": "title",
        "type": "any",
        "default": "''",
        "description": "Title property",
        "category": "general"
      },
      {
        "name": "size",
        "type": "\"",
        "default": "undefined",
        "description": "Size property",
        "category": "appearance"
      },
      {
        "name": "animation",
        "type": "\"",
        "default": "undefined",
        "description": "Animation property",
        "category": "general"
      },
      {
        "name": "no-close-on-backdrop",
        "type": "boolean",
        "default": "false",
        "description": "No Close On Backdrop property",
        "category": "general"
      },
      {
        "name": "no-close-button",
        "type": "boolean",
        "default": "false",
        "description": "No Close Button property",
        "category": "general"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "default": "false",
        "description": "Scrollable property",
        "category": "general"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "''",
        "description": "Aria Label property",
        "category": "general"
      },
      {
        "name": "aria-described-by",
        "type": "any",
        "default": "''",
        "description": "Aria Described By property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "title",
        "description": "Title slot"
      },
      {
        "name": "default",
        "description": "Default content slot"
      },
      {
        "name": "footer",
        "description": "Footer slot"
      }
    ],
    "cssProperties": [
      {
        "name": "--modal-backdrop",
        "description": "Custom property for modal backdrop",
        "default": "inherit"
      },
      {
        "name": "--modal-background",
        "description": "Custom property for modal background",
        "default": "inherit"
      },
      {
        "name": "--modal-border-radius",
        "description": "Custom property for modal border radius",
        "default": "inherit"
      },
      {
        "name": "--modal-shadow",
        "description": "Custom property for modal shadow",
        "default": "inherit"
      },
      {
        "name": "--modal-max-width",
        "description": "Custom property for modal max width",
        "default": "inherit"
      },
      {
        "name": "--modal-max-height",
        "description": "Custom property for modal max height",
        "default": "inherit"
      },
      {
        "name": "--modal-padding",
        "description": "Custom property for modal padding",
        "default": "inherit"
      }
    ],
    "parts": []
  },
  "navbar": {
    "properties": [
      {
        "name": "elevated",
        "type": "boolean",
        "default": "false",
        "description": "Elevated property",
        "category": "general"
      },
      {
        "name": "transparent",
        "type": "boolean",
        "default": "false",
        "description": "Transparent property",
        "category": "general"
      },
      {
        "name": "compact",
        "type": "boolean",
        "default": "false",
        "description": "Compact property",
        "category": "general"
      },
      {
        "name": "centered",
        "type": "boolean",
        "default": "false",
        "description": "Centered property",
        "category": "general"
      },
      {
        "name": "theme",
        "type": "\"",
        "default": "undefined",
        "description": "Theme property",
        "category": "appearance"
      },
      {
        "name": "mobile-menu-open",
        "type": "boolean",
        "default": "false",
        "description": "Mobile Menu Open property",
        "category": "general"
      }
    ],
    "events": [
      {
        "name": "mz-menu-toggle",
        "description": "Fired when menu toggle occurs",
        "detail": "Event"
      }
    ],
    "slots": [
      {
        "name": "logo",
        "description": "Logo slot"
      },
      {
        "name": "brand",
        "description": "Brand slot"
      },
      {
        "name": "nav",
        "description": "Nav slot"
      },
      {
        "name": "actions",
        "description": "Actions slot"
      },
      {
        "name": "avatar",
        "description": "Avatar slot"
      },
      {
        "name": "user",
        "description": "User slot"
      },
      {
        "name": "mobile-menu",
        "description": "Mobile menu slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "pagination": {
    "properties": [
      {
        "name": "total",
        "type": "any",
        "default": "0",
        "description": "Total property",
        "category": "general"
      },
      {
        "name": "page-size",
        "type": "any",
        "default": "10",
        "description": "Page Size property",
        "category": "general"
      },
      {
        "name": "current",
        "type": "any",
        "default": "1",
        "description": "Current property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [],
    "cssProperties": [],
    "parts": []
  },
  "popover": {
    "properties": [
      {
        "name": "placement",
        "type": "\"",
        "default": "undefined",
        "description": "Placement property",
        "category": "general"
      },
      {
        "name": "open",
        "type": "boolean",
        "default": "false",
        "description": "Open property",
        "category": "state"
      },
      {
        "name": "hover",
        "type": "boolean",
        "default": "false",
        "description": "Hover property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "trigger",
        "description": "Trigger slot"
      },
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "progress": {
    "properties": [
      {
        "name": "value",
        "type": "any",
        "default": "0",
        "description": "Value property",
        "category": "data"
      },
      {
        "name": "max",
        "type": "any",
        "default": "100",
        "description": "Max property",
        "category": "general"
      },
      {
        "name": "label",
        "type": "any",
        "default": "''",
        "description": "Label property",
        "category": "data"
      },
      {
        "name": "show-value",
        "type": "boolean",
        "default": "false",
        "description": "Show Value property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [],
    "cssProperties": [],
    "parts": []
  },
  "radio": {
    "properties": [
      {
        "name": "name",
        "type": "any",
        "default": "''",
        "description": "Name property",
        "category": "data"
      },
      {
        "name": "value",
        "type": "s",
        "default": "undefined",
        "description": "Value property",
        "category": "data"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "undefined",
        "description": "Aria Label property",
        "category": "general"
      },
      {
        "name": "aria-described-by",
        "type": "any",
        "default": "undefined",
        "description": "Aria Described By property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "select": {
    "properties": [
      {
        "name": "value",
        "type": "any",
        "default": "''",
        "description": "Value property",
        "category": "data"
      },
      {
        "name": "label",
        "type": "any",
        "default": "''",
        "description": "Label property",
        "category": "data"
      },
      {
        "name": "selected",
        "type": "boolean",
        "default": "false",
        "description": "Selected property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [],
    "cssProperties": [],
    "parts": []
  },
  "sidebar": {
    "properties": [
      {
        "name": "aria-label",
        "type": "any",
        "default": "undefined",
        "description": "Aria Label property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "header",
        "description": "Header slot"
      },
      {
        "name": "menu",
        "description": "Menu slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "stack": {
    "properties": [
      {
        "name": "direction",
        "type": "\"",
        "default": "undefined",
        "description": "Direction property",
        "category": "general"
      },
      {
        "name": "spacing",
        "type": "\"",
        "default": "undefined",
        "description": "Spacing property",
        "category": "general"
      },
      {
        "name": "align",
        "type": "\"",
        "default": "undefined",
        "description": "Align property",
        "category": "general"
      },
      {
        "name": "justify",
        "type": "\"",
        "default": "undefined",
        "description": "Justify property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "switch": {
    "properties": [
      {
        "name": "checked",
        "type": "boolean",
        "default": "false",
        "description": "Checked property",
        "category": "state"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false",
        "description": "Disabled property",
        "category": "state"
      },
      {
        "name": "label",
        "type": "any",
        "default": "''",
        "description": "Label property",
        "category": "data"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "''",
        "description": "Aria Label property",
        "category": "general"
      },
      {
        "name": "aria-described-by",
        "type": "any",
        "default": "''",
        "description": "Aria Described By property",
        "category": "general"
      }
    ],
    "events": [
      {
        "name": "mz-change",
        "description": "Fired when change occurs",
        "detail": "Event"
      },
      {
        "name": "mz-input",
        "description": "Fired when input occurs",
        "detail": "Event"
      },
      {
        "name": "mz-click",
        "description": "Fired when click occurs",
        "detail": "Event"
      },
      {
        "name": "mz-focus",
        "description": "Fired when focus occurs",
        "detail": "Event"
      },
      {
        "name": "mz-blur",
        "description": "Fired when blur occurs",
        "detail": "Event"
      },
      {
        "name": "mz-keydown",
        "description": "Fired when keydown occurs",
        "detail": "Event"
      },
      {
        "name": "mz-keyup",
        "description": "Fired when keyup occurs",
        "detail": "Event"
      }
    ],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "table": {
    "properties": [],
    "events": [],
    "slots": [
      {
        "name": "header",
        "description": "Header slot"
      },
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "tabs": {
    "properties": [
      {
        "name": "label",
        "type": "any",
        "default": "'Tab'",
        "description": "Label property",
        "category": "data"
      },
      {
        "name": "active",
        "type": "boolean",
        "default": "false",
        "description": "Active property",
        "category": "state"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "textarea": {
    "properties": [
      {
        "name": "label",
        "type": "any",
        "default": "''",
        "description": "Label property",
        "category": "data"
      },
      {
        "name": "placeholder",
        "type": "any",
        "default": "''",
        "description": "Placeholder property",
        "category": "data"
      },
      {
        "name": "rows",
        "type": "any",
        "default": "4",
        "description": "Rows property",
        "category": "general"
      },
      {
        "name": "value",
        "type": "any",
        "default": "''",
        "description": "Value property",
        "category": "data"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false",
        "description": "Disabled property",
        "category": "state"
      },
      {
        "name": "helper-text",
        "type": "any",
        "default": "''",
        "description": "Helper Text property",
        "category": "general"
      },
      {
        "name": "aria-label",
        "type": "any",
        "default": "undefined",
        "description": "Aria Label property",
        "category": "general"
      },
      {
        "name": "aria-described-by",
        "type": "any",
        "default": "undefined",
        "description": "Aria Described By property",
        "category": "general"
      },
      {
        "name": "aria-invalid",
        "type": "boolean",
        "default": "false",
        "description": "Aria Invalid property",
        "category": "general"
      },
      {
        "name": "aria-required",
        "type": "boolean",
        "default": "false",
        "description": "Aria Required property",
        "category": "general"
      }
    ],
    "events": [
      {
        "name": "mz-input",
        "description": "Fired when input occurs",
        "detail": "Event"
      },
      {
        "name": "mz-change",
        "description": "Fired when change occurs",
        "detail": "Event"
      },
      {
        "name": "mz-focus",
        "description": "Fired when focus occurs",
        "detail": "Event"
      },
      {
        "name": "mz-blur",
        "description": "Fired when blur occurs",
        "detail": "Event"
      },
      {
        "name": "mz-keydown",
        "description": "Fired when keydown occurs",
        "detail": "Event"
      },
      {
        "name": "mz-enter",
        "description": "Fired when enter occurs",
        "detail": "Event"
      },
      {
        "name": "mz-keyup",
        "description": "Fired when keyup occurs",
        "detail": "Event"
      }
    ],
    "slots": [],
    "cssProperties": [],
    "parts": []
  },
  "toast": {
    "properties": [
      {
        "name": "message",
        "type": "any",
        "default": "''",
        "description": "Message property",
        "category": "general"
      },
      {
        "name": "title",
        "type": "any",
        "default": "''",
        "description": "Title property",
        "category": "general"
      },
      {
        "name": "variant",
        "type": "\"",
        "default": "undefined",
        "description": "Variant property",
        "category": "appearance"
      },
      {
        "name": "duration",
        "type": "any",
        "default": "3000",
        "description": "Duration property",
        "category": "general"
      },
      {
        "name": "avatar",
        "type": "any",
        "default": "''",
        "description": "Avatar property",
        "category": "general"
      },
      {
        "name": "time",
        "type": "any",
        "default": "'just now'",
        "description": "Time property",
        "category": "general"
      },
      {
        "name": "closable",
        "type": "boolean",
        "default": "true",
        "description": "Closable property",
        "category": "general"
      },
      {
        "name": "theme",
        "type": "\"",
        "default": "undefined",
        "description": "Theme property",
        "category": "appearance"
      }
    ],
    "events": [
      {
        "name": "mz-show",
        "description": "Fired when show occurs",
        "detail": "Event"
      },
      {
        "name": "mz-after-show",
        "description": "Fired when after show occurs",
        "detail": "Event"
      },
      {
        "name": "mz-hide",
        "description": "Fired when hide occurs",
        "detail": "Event"
      },
      {
        "name": "mz-after-hide",
        "description": "Fired when after hide occurs",
        "detail": "Event"
      },
      {
        "name": "mz-action",
        "description": "Fired when action occurs",
        "detail": "Event"
      }
    ],
    "slots": [
      {
        "name": "icon",
        "description": "Icon slot"
      },
      {
        "name": "actions",
        "description": "Actions slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  },
  "toast-container": {
    "properties": [
      {
        "name": "duration",
        "type": "any",
        "default": "2500",
        "description": "Duration property",
        "category": "general"
      },
      {
        "name": "position",
        "type": "\"",
        "default": "undefined",
        "description": "Position property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [],
    "cssProperties": [],
    "parts": []
  },
  "tooltip": {
    "properties": [
      {
        "name": "text",
        "type": "any",
        "default": "''",
        "description": "Text property",
        "category": "general"
      },
      {
        "name": "placement",
        "type": "\"",
        "default": "undefined",
        "description": "Placement property",
        "category": "general"
      },
      {
        "name": "aria-described-by",
        "type": "any",
        "default": "undefined",
        "description": "Aria Described By property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": [
      {
        "name": "content",
        "description": "The content element"
      }
    ]
  },
  "tree": {
    "properties": [
      {
        "name": "label",
        "type": "any",
        "default": "''",
        "description": "Label property",
        "category": "data"
      },
      {
        "name": "expandable",
        "type": "boolean",
        "default": "false",
        "description": "Expandable property",
        "category": "general"
      },
      {
        "name": "selected",
        "type": "boolean",
        "default": "false",
        "description": "Selected property",
        "category": "general"
      }
    ],
    "events": [],
    "slots": [
      {
        "name": "label",
        "description": "Label slot"
      },
      {
        "name": "default",
        "description": "Default content slot"
      }
    ],
    "cssProperties": [],
    "parts": []
  }
}
