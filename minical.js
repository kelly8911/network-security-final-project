var errorMsg = '';

var customer_name = $.trim($("input[name='customer_name']").val());

// minical修改版: 加入"判斷是否含有formula"的條件, 若含有=, +, -, @等符號, 代表可能含有formula, 因此顯示Invalid Customer Name
if (customer_name == "" || customer_name.match(/^[=+-@]/) != null) {
    errorMsg += "\nInvalid Customer Name";
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
