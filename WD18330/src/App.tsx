import "./App.css";

type ShowInfoProps = {
    name: string;
    age: number;
    children?: React.ReactNode;
};
function ShowInfo(props: ShowInfoProps): JSX.Element {
    return (
        <div>
            Name: {props.name} - Age: {props.age}
            <p>{props.children}</p>
        </div>
    );
}
function App() {
    return (
        <>
            <ShowInfo name="Dat" age={30}>
                Có giá trị bên trong
            </ShowInfo>
        </>
    );
}

export default App;
