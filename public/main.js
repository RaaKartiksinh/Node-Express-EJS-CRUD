

// Delete User 
// XMLHttpRequest
function deleteUser(id) {

    var url = 'http://localhost:8080/delete/' + id;
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('User deleted successfully');
            window.location.reload()
        } else {
            console.error('Failed to delete user with status: ' + xhr.status);
        }
    };
    xhr.onerror = function () {
        console.error('Network error occurred');
    };
    xhr.send();
}



// creat Books

let bname = document.getElementById('name');
let bprice = document.getElementById('price');
let bpublisher = document.getElementById('publisher');

let btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    let book = {
        name: bname.value,
        price: bprice.value,
        publisher: bpublisher.value
    }

    var url = 'http://localhost:8080/create-book';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 201) {
            console.log('Book created successfully');
            window.location.reload();
        } else {
            console.error('Failed to create book with status: ' + xhr.status);
        }
    };
    xhr.onerror = function () {
        console.error('Network error occurred');
    };
    xhr.send(JSON.stringify(book));
});


