import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage () {
    return (
        <OrganizationList
            hidePersonal= {true}
            afterSelectOrganizationUrl= "/organization/:slug"
            afterCreateOrganizationUrl="/organization/:slug"
        />
    );
};