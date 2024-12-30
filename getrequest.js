const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(apiUrl)
    .then(response => {
       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(`User ID: ${data.userId}`);
        console.log(`ID: ${data.id}`);
        console.log(`Title: ${data.title}`);
        console.log(`Completed: ${data.completed}`);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
