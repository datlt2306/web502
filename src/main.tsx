import ReactDOM from 'react-dom'

const myName: string = "Le Trong Dat";
const myStatus: boolean = true;
const myAge: number = 20;
const product: { id: number, name: string} = { id: 1, name: "A"};

type ShowProps = {
    name: string
}
function show(props: ShowProps ): any{
  console.log(props.name);
}

function Show(props: ShowProps): any{
  console.log('props',props);
  console.log(props.name);
  return null;
}

ReactDOM.render(<div>
  <h1>Hello {myName}</h1>
  <div>{myStatus ? "Thay Dat" : "Thay Son"}</div>
  <div>{myAge}</div>
  <div>{product.name}</div>
  <div>{show({ name: myName })}</div>

  <div><Show name={myName}/></div>
</div>, document.querySelector('#root'));












