export default function CvProfileItem() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user?.cvProfileId)
        return (
            <a target="_blank" href={`/cv-profile/${user?.cvProfileId}`}>
                TopCV Profile
            </a>
        );
    return;
}
