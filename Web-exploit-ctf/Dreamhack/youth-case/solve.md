# solution

this challenge is quite similar to baby-case challenge but it has two things different make the challenge more hard. You should look careful in detail:
![alt text](image.png)

![alt text](image-1.png)<br>

in first picture it's mean that the server will handle different rely on the char. upper or lower case will be handle like two seperate urls. /shop and /Shop are unlike. So how to bypass it. Well after get some hints from discord, i found this
![alt text](image-2.png)<br>
and how to use it here https://www.youtube.com/watch?v=sgs3s5oTfz8
<br>
summary, the sever (nodejs) will ignore **\xA0** but the nginx considers them as the part of the url so nginx not ban it and the server will remove and access to /shop resource. Next step is how to get the flag:

![alt text](image-3.png)<br>

we need someway display the word "flag" but how? after searching a lot i found this interesting page https://dev.to/jagracey/hacking-github-s-auth-with-unicode-s-turkish-dotless-i-460n
![alt text](image-4.png)<br>
so we can us"ﬂag" to bypass the filter and hu-ray i get the flag.
![alt text](image-5.png)<br>

# preferences

https://dev.to/jagracey/hacking-github-s-auth-with-unicode-s-turkish-dotless-i-460n
https://blog.devsecopsguides.com/attacking-nginx
https://book.hacktricks.xyz/pentesting-web/proxy-waf-protections-bypass
