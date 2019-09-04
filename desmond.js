function form_validation(){
    var name = document.querySelector('#your_name');
    var email = document.querySelector('#email');
    var title = document.querySelector('#title');

    if (name.value < 4){
        window.alert("Enter at least 4 characters in Name")
        name.focus()
        return false
    }

    if (email.value ==''){
        window.alert("Enter a valid email")
        email.focus()
        return false
    }

    if (title.value == ''){
        window.alert("Enter your title")
        title.focus()
        return false
    }

    return true
}

