

document.getElementById('login').addEventListener('submit', async function(event) {
    console.log("test");
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = {
        email: email,
        password: password
    };
    axios.post("http://localhost:8080/api/v1/login", data)
    .then(function(response) {
        // Xử lý phản hồi từ API khi đăng nhập thành công
        console.log(response.data);
        window.location.href = response.data;
        // Tiếp tục xử lý đăng nhập thành công
    })
    .catch(function(error) {
        // Xử lý phản hồi từ API khi đăng nhập không thành công
        console.error(error);
    });
});