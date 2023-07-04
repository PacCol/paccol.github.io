import os
import requests

print("\n======= CSS files =======")

i = 0

cssFiles = os.listdir("css/")
cssData = ""

print("- Reading files: ", end="")

while i < len(cssFiles):
    f = open("css/" + cssFiles[i], "r")
    cssData = cssData + " " + f.read()
    i += 1

print("Complete!")

url = 'https://www.toptal.com/developers/cssminifier/api/raw'
data = {'input': cssData}
print("- Processing request: ", end="")
response = requests.post(url, data=data)
print("Complete!")

f = open("all.min.css", "w")
f.write(response.text)
f.close()

print("\n======= JS files ========")

i = 0

jsFiles = os.listdir("js/")
jsData = ""

print("- Reading files: ", end="")

while i < len(jsFiles):
    f = open("js/" + jsFiles[i], "r")
    jsData = jsData + " " + f.read()
    i += 1

print("Complete!")

url = 'https://www.toptal.com/developers/javascript-minifier/raw'
data = {'input': jsData}
print("- Processing request: ", end="")
response = requests.post(url, data=data)
print("Complete!\n")

f = open("all.min.js", "w")
f.write(jsData)
f.close()
