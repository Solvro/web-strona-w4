type UserPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function PostPage(props: UserPageProps) {
    return <>
        POST PAGE { (await props.params).slug}
    </>;
}