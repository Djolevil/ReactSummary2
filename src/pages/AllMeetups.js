const DUMMY_DATA = [
    {
    id: 'm1',
    title: 'This is a first meetup',
    image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Калемегдан%2C_споменик_Побједник%2C_Биоград.jpg/1280px-Калемегдан%2C_споменик_Побједник%2C_Биоград.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
    'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
    id: 'm2',
    title: 'This is a second meetup',
    image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Калемегдан%2C_споменик_Побједник%2C_Биоград.jpg/1280px-Калемегдан%2C_споменик_Побједник%2C_Биоград.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
    'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    ];

function AllMeetupsPage() {
    return <section>
        <h1>All Meetups</h1>
        <ul>
        {DUMMY_DATA.map((meetup) => {
            return <li key={meetup.id}>{meetup.title}</li>
        })}
        </ul>
    </section>
};

export default AllMeetupsPage;