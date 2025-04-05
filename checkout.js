document.addEventListener("DOMContentLoaded", function () {
    const totalAmount = 500; // Example amount (change as needed)
    document.getElementById("total-amount").innerText = `₹${totalAmount}`;

    document.getElementById("pay-btn").addEventListener("click", function () {
        var options = {
            "key": "rzp_test_yourapikey", // Replace with your Razorpay API Key
            "amount": totalAmount * 100, // Amount in paisa (multiply by 100)
            "currency": "INR",
            "name": "KFC Store",
            "description": "Order Payment",
            "image": "https://yourlogo.com/logo.png",
            "handler": function (response) {
                alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            },
            "prefill": {
                "name": "Customer Name",
                "email": "customer@example.com",
                "contact": "9999999999"
            },
            "theme": {
                "color": "#d32f2f"
            }
        };
        
        var rzp1 = new Razorpay(options);
        rzp1.open();
    });
});