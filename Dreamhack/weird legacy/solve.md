# solution

This challenge is very exciting for me. You can easily know what to do, but need some knowledges to achive the flag.

```
try {
    const urlObject = new URL(url);
    host = urlObject.hostname;

    if (host !== "localhost" && !host.endsWith("localhost")) return res.send("rejected");
  } catch (error) {
    return res.send("Invalid Url");
  }

  try {
    let result = await node_fetch(url, {
      method: "GET",
      headers: { "Cookie": `FLAG=${FLAG}` },
    });
    const data = await result.text();
    res.send(data);
  } catch {
    return res.send("Request Failed");
  }
});
```

This part of source code should be focused. Idea is bypass **if (host !== "localhost" && !host.endsWith("localhost"))**. After searching and find some hints i see this site.
