var fname = document.querySelector(".fname")
var lname = document.querySelector(".lname")
var img = document.querySelector(".img")
var save = document.querySelector(".save")
var tb = document.querySelector(".tb")
var img1 = document.querySelector(".img1")
var fname1 = document.querySelector(".fname1")
var lname1 = document.querySelector(".lname1")
var mark1 = document.querySelector(".mark1")
var fac1 = document.querySelector(".fac1")
var tb2 = document.querySelector(".kolbasi")
var arr = []
var avg = 0

save.addEventListener("click", function(){
    var obj = {
        firstname: fname.value,
        lastname: lname.value,
        mark:parseInt(Math.random()*100),
        img:img.value,
        faculty: parseInt(Math.floor(Math.random()*4)+1)
    }
    var sum =0
    arr.push(obj)
    tb.innerHTML = ""
    tb2.innerHTML=""
    tb2.innerHTML = `
    <tr>
    <th>student name</th>
    <th>course</th>
</tr>
    `
    tb.innerHTML = `
    <tr>
    <th>Name</th>
    <th>Surname</th>
    <th>Mark</th>
    <th>Img</th>
    <th>faculty</th>
</tr>`
    for(var i of arr) {
        var tmp = `
        <tr>
            <td>${i.firstname}</td>
            <td>${i.lastname}</td>
            <td>${i.mark}</td>
            <td ><img src="${i.img}" class="im"></td>
            <td>${i.faculty}</td>
        </tr>
        `
        tb.innerHTML +=tmp
        sum+=i.mark
        var tmp1 = `
        <tr>
            <td>${i.firstname}</td>
            <td>${i.faculty}</td>
        </tr>
        `
        tb2.innerHTML+=tmp1
        
    }
    avg = Math.floor(sum /arr.length)
    console.log(avg)

    arr.sort(function(a,b){
        return b.mark - a.mark
    })
    fname1.innerHTML = arr[0].firstname
    lname1.innerHTML = arr[0].lastname
    img1.src = arr[0].img
    mark1.innerHTML = arr[0].mark
    fac1.innerHTML = arr[0].faculty


})