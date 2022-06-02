function validation(){
    let a = document.forms['myForm']['fname'].value;
    let b = document.forms['myForm']['password'].value;
    let c = document.forms['myForm']['email'].value;
    let d = document.forms['myForm']['phno'].value;

    console.log(a,b,c,d)


    let table = document.getElementById('display')
    let tr = document.createElement('tr')
    let div = document.getElementById('div')
    let tbody = document.createElement('tbody')

    // tr.classList.add("d-flex justify-content-between")

    let name = document.createElement('th')
    let password = document.createElement('th')
    let email = document.createElement('th') 
    let phone = document.createElement('th')

    
    
    name.innerHTML = a 
    password.innerHTML = b 
    email.innerHTML = c 
    phone.innerHTML = d
    

    console.log(name,password,email,phone)
    //tr.appendChild("Element")
    tr.appendChild(name) 
    tr.appendChild(password)
    tr.appendChild(email)
    tr.appendChild(phone)
    

    tbody.append(tr)
    table.append(tbody)
    tr.classList.add("d-flex","col-md-12","text-center")
    // th.classList.add("border","col-md-3", "border-dark", "border-3")
    div.append(tr)
    document.body.append(div)

    return false        
}

// function validation(){
//     let a = document.forms['myForm']['fname'].value
//     let b = document.forms['myForm']['password'].value;
//     let c = document.form['myform']['email'].value;
//     let d = document.form['myForm']['phno'].value;
    
//     console.log(a,b,c,d)

//     let table = document.getElementById('display')
//     let tr = document.createElement('tr')
//     let div = document.getElementById('div')
//     let tbody = document.createElement('tbody')

//     let name = document.createElement('th')
//     let password = document.createElement('th')
//     let email = document.createElement('th')
//     let phno = document.createElement('th')

//     name.innerHTML = a;
//     password.innerHTML = b;
//     email.innerHTML = c;
//     phno.innerHTML = d;

//     console.log(name,password,email,phno)

//     tr.appendChild(name);
//     tr.appendChild(password);
//     tr.appendChild(email);
//     tr.appendChild(phno);

//     tbody.append(tr);
//     table.append(tbody)

    // tr.classList.add("d-flex","justify-content-between")
//     div.append(tr);
//     document.body.append(div);
//     return false;
    
// }