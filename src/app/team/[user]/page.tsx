"use client"

import { Navbar } from "@/components/Navbar";
import { Member } from "@/types";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

type UserPageProps = {
    params: {user: string},
};

export default function UserPage(props: UserPageProps) {
    const [member, setMember] = useState<Member>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch((process.env.NEXT_PUBLIC_REST_API_USERS_URL ?? "") + `?slug=${props.params.user}`); // Replace API_URL with your WordPress REST API endpoint
                if (!response.ok) {
                    throw new Error(`Error fetching members: ${response.statusText}`);
                }
                const data = await response.json();

                if (data.length != 1) return;

                setMember(data[0]);
            } catch (err) {
                setError((err as any).message);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    if (loading) return "Loading...";
    if (!member) return notFound();

    return (
        <>
            <Navbar></Navbar>

            <div>This is user page - {member.name}
                <img src={member.avatar_urls[96]} alt="" />
                {member.acf.titlePrefix} <br />
                {member.acf.titleSuffix} <br />
                {member.acf.academic_history} <br />
                {member.acf.consultations} <br />
                {member.acf.contact} <br />
            </div>
        </>
    )
}
