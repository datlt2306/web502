import "./App.css";

type ShowInfoProps = {
    name: string;
    age: number;
    children?: React.ReactNode;
};
function App() {
    const myName: string = "Lê Trọng Đạt";
    const myAge: number = 35;
    const isMarried: boolean = true;
    function showInfo(props: ShowInfoProps): string {
        return `Name: ${props.name} - age: ${props.age}`;
    }
    function ShowInfo(props: ShowInfoProps): JSX.Element {
        return (
            <div>
                Name: {props.name} - Age: {props.age}
            </div>
        );
    }
    return (
        <>
            <h1>Hello {myName}</h1>
            <h1>Age: {myAge}</h1>
            <h1>Married: {isMarried ? "Đã có gia đình" : "độc thân"}</h1>
            <div>{showInfo({ name: "Dat", age: 30 })}</div>
            <div>
                Component:
                <ShowInfo name="Dat" age={30}>
                    Có giá trị bên trong
                </ShowInfo>
            </div>
        </>
    );
}

export default App;
