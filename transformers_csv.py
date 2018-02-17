import os
import urllib
url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2017-01"
data = urllib.urlopen(url).read().replace("},{", "} , {").split()
for dat in data:
    print dat
    print
