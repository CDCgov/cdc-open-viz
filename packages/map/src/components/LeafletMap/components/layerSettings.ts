export const layerSettings = [
  {
    key: 'osm',
    name: 'OpenStreetMap',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '© OpenStreetMap contributors'
  },
  {
    key: 'positron',
    name: 'Positron',
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attribution: '© OpenStreetMap contributors © CartoDB'
  },
  {
    key: 'darkMatter',
    name: 'Dark Matter',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '© OpenStreetMap contributors © CartoDB'
  },
  {
    key: 'toner',
    name: 'Toner',
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
    attribution: '© OpenStreetMap contributors © Stamen Design'
  },
  {
    key: 'watercolor',
    name: 'Watercolor',
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
    attribution: '© OpenStreetMap contributors © Stamen Design'
  },
  {
    key: 'opentopomap',
    name: 'OpenTopoMap',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution: '© OpenStreetMap contributors'
  },
  {
    key: 'esriWorldImagery',
    name: 'Esri World Imagery',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution:
      'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  },
  {
    key: 'esriWorldTopoMap',
    name: 'Esri World Topo Map',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles © Esri — Source: Esri, DeLorme, NAVTEQ'
  },
  {
    key: 'hikeBike',
    name: 'Hike & Bike',
    url: 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png',
    attribution: '© OpenStreetMap contributors'
  }
]
