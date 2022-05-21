function Student(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `Ft-Web${b}`;
}

function storeData(event){
    event.preventDefault(); 
      let form = document.getElementById("students_data");
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;
    // let btn = document.createElement("button");
    // btn.innerText="Submit"
    // btn.addEventListener("click",preventDefault())

    console.log(name,course,unit,image,batch)
}