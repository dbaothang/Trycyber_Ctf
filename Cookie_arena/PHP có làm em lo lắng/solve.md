# solution

First, register -> login -> export csv
![alt text](image.png)<br>
when you access file link you will receive information including username and creation date (1)
Hmm i try look through all the website and i dont see any source code helpful for investigate. Then i realise (1), so can we put a malicious payload and change file .csv to .php to execute code.
![alt text](image-1.png)<br>
![alt text](image-2.png)<br>
Hmm, maybe have a filter here, then i check more and find that we can use **<?=....>** instead of **<?php....>**

Here is user's account

```
<?= system('cat /*') ?>
```

![alt text](image-3.png)<br>
Finish first step, let change .csv to .php to see can we have sth.
![alt text](image-4.png)<br>
Just use burp suite to change file extension.
![alt text](image-5.png)<br>
