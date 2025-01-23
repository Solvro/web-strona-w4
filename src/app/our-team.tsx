"use client"

import { Member } from "@/types";
import { useEffect, useState } from "react";


export function OurTeam() {
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_REST_API_USERS_URL ?? ""); // Replace API_URL with your WordPress REST API endpoint
                if (!response.ok) {
                    throw new Error(`Error fetching members: ${response.statusText}`);
                }
                const data = await response.json();
                let result = [];
                for (const member of data) {
                    if (member.is_author) result.push(member);
                }
                setMembers(result);
            } catch (err) {
                setError((err as any).message);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    if (loading) return <div></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="mt-14">
            <h2 className="section-header mb-10">Our Team</h2>
            <ul className="mt-3 mb-6 sm:px-12 lg:px-0 flex flex-row gap-3 justify-center flex-wrap">
                {members.map((member, index) => (
                    <li key={index}>
                        <a href={`/team/${member.slug}`}>
                            <div className="mx-auto text-center w-[100px] flex-shrink mb-2">
                                <div className="size-20 border-[3px] mx-auto mb-1 border-brand rounded-full">
                                    <img
                                        src={
                                            member.avatar_urls[96] ||
                                            `https://ui-avatars.com/api/?background=cf6967&color=fff&name=${member.name}`
                                        }
                                        alt=""
                                        className="rounded-full size-full object-cover"
                                    />
                                </div>
                                {member.acf.titlePrefix && (
                                    <small className="text-xs block mt-2">{member.acf.titlePrefix}</small>
                                )}
                                <p className="text-sm block font-medium leading-tight">
                                    {member.name}
                                </p>
                                {member.acf.titleSuffix && (
                                    <em className="text-xs block leading-tight">{member.acf.titleSuffix}</em>
                                )}
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
