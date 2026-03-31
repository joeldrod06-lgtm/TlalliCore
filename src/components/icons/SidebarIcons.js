import { defineComponent, h } from 'vue'

function createIcon(paths) {
  return defineComponent({
    render() {
      return h(
        'svg',
        {
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          'aria-hidden': 'true',
        },
        paths.map((attrs) => h('path', attrs)),
      )
    },
  })
}

const stroke = {
  stroke: 'currentColor',
  'stroke-width': '1.8',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
}

export const DashboardIcon = createIcon([
  { d: 'M4 5.5h7v5H4z', ...stroke },
  { d: 'M13 5.5h7v8h-7z', ...stroke },
  { d: 'M4 12.5h7V19H4z', ...stroke },
  { d: 'M13 15.5h7V19h-7z', ...stroke },
])

export const CropIcon = createIcon([
  { d: 'M12 20c0-6.5 2.5-10.5 7-13', ...stroke },
  { d: 'M12 20c0-5.5-2.2-9.2-7-11.5', ...stroke },
  { d: 'M12 20V8', ...stroke },
  { d: 'M8 10c1.2 1.4 2.7 2.2 4 2.4', ...stroke },
])

export const SensorIcon = createIcon([
  { d: 'M12 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z', ...stroke },
  { d: 'M12 3v5', ...stroke },
  { d: 'M5.6 6.6l3.5 3.5', ...stroke },
  { d: 'M3 13h5', ...stroke },
  { d: 'M15 10l3.4-3.4', ...stroke },
  { d: 'M16 13h5', ...stroke },
])

export const AlertIcon = createIcon([
  { d: 'M12 4l8 14H4L12 4Z', ...stroke },
  { d: 'M12 9v4', ...stroke },
  { d: 'M12 16h.01', ...stroke },
])

export const InventoryIcon = createIcon([
  { d: 'M5 7.5L12 4l7 3.5L12 11L5 7.5Z', ...stroke },
  { d: 'M5 7.5V16.5L12 20l7-3.5V7.5', ...stroke },
  { d: 'M12 11v9', ...stroke },
])

export const ProductionIcon = createIcon([
  { d: 'M5 18V9', ...stroke },
  { d: 'M12 18V5', ...stroke },
  { d: 'M19 18v-6', ...stroke },
  { d: 'M4 18h16', ...stroke },
])

export const SalesIcon = createIcon([
  { d: 'M5 16l4-4l3 3l6-7', ...stroke },
  { d: 'M14 8h4v4', ...stroke },
  { d: 'M5 20h14', ...stroke },
])

export const SparkIcon = createIcon([
  { d: 'M12 3l1.7 4.8L19 9.5l-4 2.9l1.4 4.9L12 14.6l-4.4 2.7L9 12.4L5 9.5l5.3-1.7L12 3Z', ...stroke },
])

export const SettingsIcon = createIcon([
  { d: 'M12 9.2a2.8 2.8 0 1 0 0 5.6a2.8 2.8 0 0 0 0-5.6Z', ...stroke },
  { d: 'M19 12a7 7 0 0 0-.1-1.1l2-1.5l-2-3.5l-2.4 1a7 7 0 0 0-1.9-1.1l-.4-2.5h-4l-.4 2.5a7 7 0 0 0-1.9 1.1l-2.4-1l-2 3.5l2 1.5A7 7 0 0 0 5 12c0 .4 0 .7.1 1.1l-2 1.5l2 3.5l2.4-1c.6.5 1.2.8 1.9 1.1l.4 2.5h4l.4-2.5c.7-.3 1.3-.6 1.9-1.1l2.4 1l2-3.5l-2-1.5c.1-.4.1-.7.1-1.1Z', ...stroke },
])
