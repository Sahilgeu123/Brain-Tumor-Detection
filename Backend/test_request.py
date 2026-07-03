import requests

url = "http://127.0.0.1:5000/predict"
files = {"file": open("tumor.jpg", "rb")}  # replace with your image path

response = requests.post(url, files=files)
print(response.json())
