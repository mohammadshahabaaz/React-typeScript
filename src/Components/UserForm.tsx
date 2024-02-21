import { useState } from "react";

interface IUserForm {
    name: string;
    age: number;
}

const defaultValues = {
    name: "Lucky",
    age:0
}

export function UserForm (){

    const [form, setForm] = useState<IUserForm>(defaultValues)

const onChangeName = (e:any) =>{
    setForm({
        ...form,
        name: e.target.value
    })

   
}

const onChangeAge =(e:any)=>{
    setForm(
        {
            ...form,
            age: e.target.value
        }
    )
}

const submit =()=>{
    console.log("form" ,form)
}

console.log(form)

return(
    <div>
   User Name: <input type="text" 
   name="userName"
    value={form.name}
    onChange={onChangeName}
    />
    <br></br>

User Age :<input type="number"
name="userAge" 
    value={form.age}
    onChange={onChangeAge}
    />
    <br></br>

<button type="button" onClick={submit}>Submit</button>
    </div>
)

}