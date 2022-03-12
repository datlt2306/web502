type ShowInfoProps = {
    name: string,
    age: number
}

const ShowInfo = (props: ShowInfoProps) => {
    return <div>
        {props.name}
    </div>
};
export default ShowInfo;