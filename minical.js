var errorMsg = '';

var customer_name = $.trim($("input[name='customer_name']").val());

// minical原始碼: 無法判斷是否含有csv formula, 可能造成CSV injection
if (customer_name == "") {
    errorMsg += "\nCustomer Name is required";
}
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var customer_email = $.trim($("input[name='customer-email']").val());
if (customer_email != '' && re.test(customer_email) == false) {
    errorMsg += "\nInvalid Email Address";
}
var customer_phone = $.trim($("input[name='phone']").val());

if (customer_phone != '' && customer_phone.match(/^[\(\)\s\-\+\d]{10,17}$/) == null) {
    errorMsg += "\nInvalid Phone Number";
}
