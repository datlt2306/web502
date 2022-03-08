type TPerson = {
    id: number;
    name: string;
    age: number;
    status?: boolean
}

const person: TPerson = {
    id: 1,
    name: "Dat",
    age: 20
}

const persons: TPerson[] = [
    { id: 1, name: "Dat", age: 20, status: true},
    { id: 2, name: "Kien", age: 22, status: false},
]



const show = ():void => {
    console.log()
}

const arrString: string[] = ["1","2","3"];
const arrNumber: number[] = ["1","2","3"];
console.log(person.name);



type AppProps = {
    message: string
}

const DemoApp = (props: AppProps) => {
    console.log(props)
}

DemoApp({message: "Hello"})