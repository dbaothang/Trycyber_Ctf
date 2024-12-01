# solution

firstly, i try upload a .php file.
![alt text](image.png)<br>
Hmm the server has filter .php extension. I saw server use apache so my experient tells me try upload .htaccess file to try. Here is the payload

```
AddType application/x-httpd-php .png
```

It means the server will handle .png extension the same as .php file.
![alt text](image-1.png)<br>
Let test, hope we can execute php code in png file.
![alt text](image-2.png)<br>
![alt text](image-3.png)<br>
Its working, let find the flag, this step i want you to try so i will go to last step.
![alt text](image-4.png)<br>
![alt text](image-5.png)<br>
