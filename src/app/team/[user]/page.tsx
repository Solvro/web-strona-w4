
type UserPageProps = {
    params: {
        user: string,
    }
};

export default function UserPage(props: UserPageProps) {
    return (
        <div>This is user page - {props.params.user}</div>
    )
}
