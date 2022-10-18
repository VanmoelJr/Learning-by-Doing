import requests

payload = {
    'username': 'albrrn@hi2.in',
    'password': 'buka1234'
}

with requests.Session() as s:
    p = s.post('https://accounts.spotify.com/login/password', data=payload)
    print(p.text)