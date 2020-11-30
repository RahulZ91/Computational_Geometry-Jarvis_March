# using folium for maps

import folium

import os

m = folium.Map(location=[47.769273755982866, 9.548686999490371], zoom_start=17)
fence =os.path.join('path_test.json')
salt=

folium.GeoJson(fence,name='Geofence').add_to(m)
m.save('index.html')

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
