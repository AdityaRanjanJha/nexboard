'use client'

import { OrganizationSwitcher, useAuth } from "@clerk/nextjs";

const OrganizationPage = () => {
    const {userId,orgId} = useAuth();
    return (
        <div>
            Organization page
        </div>
    );
};

export default OrganizationPage;