# Node.js Post
A simple node.js script that accepts JSON data encoded in the body of an HTTP POST request, without requiring external modules.
The script is simply run by invoking 
```
node post.js
```

You can also invoke the script using the following php code:

```
<?php
$data = array("username" => "nikos", "password" => "fotiou");   
$postdata = json_encode($data);

$opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => 'Content-type: application/json',
        'content' => $postdata
    )
);

$context = stream_context_create($opts);
echo file_get_contents("http://127.0.0.1:3000/apicall1", false, $context);
?>
```

