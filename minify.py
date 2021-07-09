import os
import time
import requests

repeat = False

while True:

    print("\n======= CSS files =======")

    i = 0

    cssFiles = os.listdir("css/")

    cssData = ""

    print("- Reading files: ", end="")

    while i < len(cssFiles):
        f = open("css/" + cssFiles[i], "r")
        cssData = cssData + f.read()
        i += 1

    print("Complete!")

    url = 'https://cssminifier.com/raw'
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
        jsData = jsData + f.read()
        i += 1

    print("Complete!")

    url = 'https://javascript-minifier.com/raw'
    data = {'input': jsData}
    print("- Processing request: ", end="")
    response = requests.post(url, data=data)
    print("Complete!\n")

    f = open("all.min.js", "w")
    f.write(response.text)
    f.close()

    if repeat == False:
        break
    else:
        time.sleep(8)