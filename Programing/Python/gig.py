import requests
import json

def login(email, password):
    s = requests.Session()
    payload = {
        'loginType': 0,
        'account': email,
        'email': email,
        'password': password
    }
    res = s.post('https://api.igamie.com/igamie/api/user/login', json=payload)
    s.headers.update({'authorization': json.loads(res.content)})
    print(res.content)
    return s

session = login('sahareimar001@gmail.com', 'buka1234')